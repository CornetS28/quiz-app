const styles = (theme) => ({
  navigationWrapper: {
    flexGrow: 1,
  },
  footerWrapper: {
    backgroundColor: theme.palette.secondary.main,
  },
  footerContainer: {
    margin: "auto",
  },
  footerText: {
    color: theme.palette.color.grey,
    fontFamily: theme.palette.font.montserrat,
    textAlign: "center",
    fontSize: 14,
    lineHeight: theme.palette.font.lineHeight,
  },
  link: {
    textDecoration: "none",
    color: theme.palette.color.yellow,
    "&:hover": {
      color: theme.palette.color.orange,
    },
  },
});

export default styles;
