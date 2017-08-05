import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import { teal, cyan } from 'material-ui/colors';

const primary = teal['A400'];
const accent = cyan['A400'];

const styleSheet = createStyleSheet({
  root: {
    position: "fixed",
    width: '95%',
    top: 20,
    left: "2.5%",
    zIndex: 100,
    minWidth: 300
  },

  Appbar: {
    backgroundColor: primary,
    justifyContent: "center",
  },

  flex: {
    flex: 1,
  },
});

function ButtonAppBar(props) {
  const classes = props.classes;
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.Appbar}>
        <Toolbar>
          <IconButton color="contrast" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography type="title" color="inherit" className={classes.flex}>
            Welcome To StarStudio
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(ButtonAppBar);