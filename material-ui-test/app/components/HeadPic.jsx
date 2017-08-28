import React from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import PropTypes from 'prop-types';
import img from "../image/IMG_20150219_152734.jpg";

const styleSheet = createStyleSheet({
	root:{
		background: "linear-gradient(50deg, HSLA(205, 62%, 44%, 1), #F62D51)",
		// background: "url(" + img + ")",
		backgroundRepeat:"no-repeat",
		backgroundSize: "cover",
		backgroundAttachment: "fixed",
		height: 500,
		marginBottom: 30
	}
});

function HeadPic(props){
	const classes = props.classes;
	return (
		<div className={classes.root}></div>
	);
}

HeadPic.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(styleSheet)(HeadPic);