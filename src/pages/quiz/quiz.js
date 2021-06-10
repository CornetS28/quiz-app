import React from "react";
import PropTypes from "prop-types";

// MUI stuff
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

// styles
import styles from "./Styles";

// Components
import TypographyText from "../../components/Typography/Typography";
import ButtonQuiz from "../../components/Button/Button";

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
        <Grid item sm />
        <Grid
          container
          item
          xs={11}
          md={5}
          sm={5}
          lg={4}
          className={classes.paperWrapper}
        >
          <Paper elevation={0} className={classes.paperItems}>
            <div style={{ marginBottom: "10%" }}>
              <TypographyText
                size="h6"
                textClass={classes.smallHeader}
                text="You will be presented ou will be presented ou will be presented ou will be presented ou will be presented"
              />
            </div>

            <ButtonQuiz text="True" buttonClass={classes.button} />
            <ButtonQuiz text="False" buttonClass={classes.button} />
          </Paper>
        </Grid>

        <Grid item sm />
      </Grid>
    </Grid>
  );
};
Quiz.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Quiz);
