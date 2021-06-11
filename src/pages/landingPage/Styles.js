const styles = (theme) => ({
  landingPageWrapper: {
    flexGrow: theme.palette.pageWrapper.flexGrow,
  },
  landingPageContainer: {
    minHeight: theme.palette.pageContainer.minHeight,
  },
  paperWrapper: {
    textAlign: "center",
    margin: "auto",
  },
  paperItems: {
    width: "90%",
    margin: "auto",
    paddingTop: 15,
    backgroundColor: theme.palette.color.contrastWhite,
  },
  header: {
    fontFamily: theme.palette.font.montserrat,
    color: theme.palette.secondary.main,
    textTransform: "uppercase",
    margin: "auto",
    width: "100%",
    [theme.breakpoints.down(1200)]: {
      margin: "auto auto auto auto",
    },
  },
  smallHeader: {
    fontFamily: theme.palette.font.montserrat,
    color: theme.palette.secondary.main,
    margin: "auto auto auto auto",
    width: "100%",
    [theme.breakpoints.down(960)]: {
      fontSize: 20,
    },
    [theme.breakpoints.down(415)]: {
      marginTop: 5,
    },
    [theme.breakpoints.down(376)]: {
      fontSize: 16,
    },
    [theme.breakpoints.down(321)]: {
      fontSize: 14,
    },
  },

  button: {
    lineHeight: 2,
    boxShadow: "none",
    width: "80%",
    margin: "auto auto 20px auto",
    fontFamily: theme.palette.font.montserrat,
    "&:hover": {
      backgroundColor: theme.palette.color.yellow,
      color: theme.palette.secondary.main,
    },
  },
});

export default styles;
