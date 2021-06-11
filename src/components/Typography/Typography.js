import React from "react";
import PropTypes from "prop-types";

// MUI stuff
import Typography from "@material-ui/core/Typography";

const TypographyText = ({ size, textClass, text }) => {
  return (
    <Typography
      variant={size}
      gutterBottom
      className={textClass}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};
TypographyText.propTypes = {
  textClass: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default TypographyText;
