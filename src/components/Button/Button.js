import React from "react";
import PropTypes from "prop-types";

// MUI stuff
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const ButtonQuiz = ({ text, buttonClass, onClick }) => {
  return (
    <Grid container item sm={12} xs={12}>
      <Button
        variant="contained"
        color="secondary"
        className={buttonClass}
        onClick={onClick}
      >
        {text}
      </Button>
    </Grid>
  );
};
ButtonQuiz.propTypes = {
  buttonClass: PropTypes.string.isRequired,
};

export default ButtonQuiz;
