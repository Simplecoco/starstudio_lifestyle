import React from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import bgPic from '../image/UNADJUSTEDNONRAW_thumb_7.jpg';
import PropTypes from 'prop-types';


const styleSheet = createStyleSheet({
	root:{
		background: "linear-gradient(50deg, HSLA(205, 62%, 44%, 1), #F62D51)",
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