import React from 'react';
import PropTypes from 'prop-types';
import SimpleMediaCard from './card';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Grid from 'material-ui/Grid';

const styleSheet = createStyleSheet({
  root: {
    flexGrow: 1,
    padding: "35px 0"
  },
  container: {
    justifyContent: "space-around",
    align: "center",
    justify: "center"
  },
});



function FullWidthGrid(props) {
  const classes = props.classes;

  return (
    <div className={classes.root}>
      <Grid container gutter={40} className={classes.container} align={"center"} justify={"center"}>
        <Grid item xs={10} sm={5} className={classes.item}>
            <SimpleMediaCard />
          </Grid>
          <Grid item xs={10} sm={5} className={classes.item}>
              <SimpleMediaCard />
          </Grid>
      </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(FullWidthGrid);