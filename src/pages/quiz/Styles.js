const styles = (theme) => ({
  quizPageWrapper: {
    flexGrow: theme.palette.pageWrapper.flexGrow,
  },
  quizPageContainer: {
    minHeight: theme.palette.pageContainer.minHeight,
  },
  paperWrapper: {
    textAlign: "center",
    margin: "230px auto auto auto",
  },
  paperItems: {
    width: "90%",
    margin: "auto",
    padding: "15px 15px 15px 15px",
    backgroundColor: theme.palette.color.contrastWhite,
    height: 100,
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
});

export default styles;
