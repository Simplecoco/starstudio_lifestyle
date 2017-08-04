'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getClasses;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _createShallow = require('./createShallow');

var _createShallow2 = _interopRequireDefault(_createShallow);

var _withStyles = require('../styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var shallow = (0, _createShallow2.default)();

var _ref = _react2.default.createElement('div', null);

var Empty = function Empty() {
  return _ref;
};
Empty.defaultProps = {};

// Helper function to extract the classes from a styleSheet.
function getClasses(styleSheet, options) {
  var Extractor = (0, _withStyles2.default)(styleSheet, options)(Empty);

  return shallow(_react2.default.createElement(Extractor, null)).props().classes;
}