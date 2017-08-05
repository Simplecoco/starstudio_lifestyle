import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import reptileImage from '../image/abd50bc0e11052fea9669f18f0c017bc.jpg';
import Grid from 'material-ui/Grid';


const styleSheet = createStyleSheet({
	card: {
      minWidth: 230,
      maxWidth: 350,
      margin: "0 auto",
	},
	img: {
	  	width: "100%",
	}
});

function SimpleMediaCard(props) {
  const classes = props.classes;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia className={classes.cardMedia}>
          <img src={props.pic} alt="Contemplative Reptile" className={classes.img} />
        </CardMedia>
        <CardContent>
          <Typography type="headline" component="h2">
              {props.title}
          </Typography>
          <Typography component="p">
              {props.content}
          </Typography>
        </CardContent>
        <CardActions>
          <Button dense color="primary">
            Enter It
          </Button>
          <Button dense color="primary">
            Konw More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}


SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(SimpleMediaCard);