/* eslint-disable-line no-useless-computed-key */
import React from "react";
import PropTypes from "prop-types";

// MUI stuff
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";

// styles
import styles from "./Styles";

const Footer = (props) => {
  const { classes } = props;

  return (
    <>
      <Grid container className={classes.footerWrapper}>
        <Grid item sm={9} xm={12} className={classes.footerContainer}>
          <div className={classes.footerText}>
            <p>
              ©Built by{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/CornetS28/quiz-app"
                className={classes.link}
              >
                Samuel Cornet
              </a>{" "}
              on 2021
            </p>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
