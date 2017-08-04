'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _deepmerge = require('deepmerge');

var _deepmerge2 = _interopRequireDefault(_deepmerge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// < 1kb payload overhead when lodash/merge is > 3kb.

/* eslint-disable flowtype/require-valid-file-annotation */

function createStyleSheet(name, callback) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var getStyles = typeof name === 'string' ? callback : name;

  function createStyles() {
    var theme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var styles = typeof getStyles === 'function' ? getStyles(theme) : getStyles;

    if (!theme.overrides || !theme.overrides[name]) {
      return styles;
    }

    var overrides = theme.overrides[name];
    var stylesWithOverrides = (0, _extends3.default)({}, styles);

    (0, _keys2.default)(overrides).forEach(function (key) {
      process.env.NODE_ENV !== "production" ? (0, _warning2.default)(stylesWithOverrides[key], 'You are trying to overrides a style that do not exist.') : void 0;
      stylesWithOverrides[key] = (0, _deepmerge2.default)(stylesWithOverrides[key], overrides[key], { clone: true });
    });

    return stylesWithOverrides;
  }

  return {
    name: typeof name === 'string' ? name : false,
    createStyles: createStyles,
    options: options,
    // Enable the theme if the getStyles is a function (as we provide the theme as first argument)
    // or if the sheets has a name (as we can use the overrides key of the theme).
    themingEnabled: typeof getStyles === 'function' || typeof name === 'string'
  };
}

exports.default = createStyleSheet;