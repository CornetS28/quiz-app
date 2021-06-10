import React from "react";
import PropTypes from "prop-types";

// MUI stuff
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// styles
import styles from "./Styles";

const Quiz = (props) => {
  const { classes } = props;

  return (
    <Grid container className={classes.quizPageWrapper}>
      <Grid
        container
        item
        xs={12}
        sm={12}
        className={classes.quizPageContainer}
      >
        Quiz
      </Grid>
    </Grid>
  );
};
Quiz.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Quiz);
