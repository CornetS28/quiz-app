const styles = (theme) => ({
  quizPageWrapper: {
    flexGrow: theme.palette.pageWrapper.flexGrow,
  },
  quizPageContainer: {
    minHeight: theme.palette.pageContainer.minHeight,
  },
  paperWrapper: {
    textAlign: "center",
    margin: "160px auto auto auto",
  },
  paperItems: {
    width: "90%",
    margin: "auto",
    padding: "15px 15px 15px 15px",
    backgroundColor: theme.palette.color.contrastWhite,
    height: 170,
  },
  paperResults: {
    width: "95%",
    margin: "auto",
    padding: "15px 15px 15px 15px",
    backgroundColor: theme.palette.color.contrastWhite,
    [theme.breakpoints.down(600)]: {
      marginLeft: -7,
    },
    [theme.breakpoints.down(281)]: {
      marginLeft: -9,
    },
  },
  button: {
    lineHeight: 2,
    boxShadow: "none",
    width: "100%",
    margin: "auto auto 20px auto",
    fontFamily: theme.palette.font.montserrat,
    "&:hover": {
      backgroundColor: theme.palette.color.yellow,
      color: theme.palette.secondary.main,
    },
  },

  checkMark: {
    color: "green",
  },
  resultsWrapper: {
    margin: "50px auto auto auto",
  },
  resultsContainer: {
    margin: "auto auto 15px auto",
  },
  resultsScore: {
    marginBottom: "5%",
    textAlign: "center",
  },
  question: {
    marginTop: 0,
    paddingLeft: 10,
  },
  check: {
    paddingRight: 10,
    marginBottom: -5,
  },
});

export default styles;
