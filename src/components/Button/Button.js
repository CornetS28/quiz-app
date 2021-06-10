import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

// MUI stuff
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const ButtonQuiz = ({ text, buttonClass }) => {
  // const history = useHistory();

  return (
    <Grid container item sm={12} xs={12}>
      <Button
        variant="contained"
        color="secondary"
        className={buttonClass}
        // onClick={() => history.push(path))}
      >
        {text}
      </Button>
    </Grid>
  );
};
ButtonQuiz.propTypes = {
  classes: PropTypes.object.isRequired,
  buttonClass: PropTypes.string.isRequired,
};

export default ButtonQuiz;
