import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

// MUI stuff
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

// styles
import styles from "./Styles";

// Components
import TypographyText from "../../components/Typography/Typography";
import Button from "../../components/Button/Button";

const LandingPage = (props) => {
  const { classes } = props;
  const history = useHistory();
  const routeChange = (path) => {
    history.push(path);
  };

  return (
    <Grid container className={classes.landingPageWrapper}>
      <Grid
        container
        item
        xs={12}
        sm={12}
        className={classes.landingPageContainer}
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
            <div style={{ marginBottom: "30%" }}>
              <TypographyText
                size="h6"
                textClass={classes.header}
                text="Welcome to the"
              />
              <TypographyText
                size="h6"
                textClass={classes.header}
                text="Trivia Challenge!"
              />
            </div>

            <div style={{ marginBottom: "30%" }}>
              <TypographyText
                size="h6"
                textClass={classes.smallHeader}
                text="You will be presented"
              />
              <TypographyText
                size="h6"
                textClass={classes.smallHeader}
                text="with 10 True or False"
              />
              <TypographyText
                size="h6"
                textClass={classes.smallHeader}
                text="questions."
              />
            </div>

            <div style={{ marginBottom: "30%" }}>
              <TypographyText
                size="h6"
                textClass={classes.smallHeader}
                text="You can score 100%?"
              />
            </div>

            <Grid container item sm={12} xs={12}>
              <Button
                buttonClass={classes.button}
                text="Begin"
                onClick={() => routeChange("/quiz")}
              />
            </Grid>
          </Paper>
        </Grid>

        <Grid item sm />
      </Grid>
    </Grid>
  );
};
LandingPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LandingPage);
