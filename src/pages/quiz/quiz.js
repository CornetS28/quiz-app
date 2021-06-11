import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useHistory } from "react-router-dom";

// MUI stuff
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Check, Close } from "@material-ui/icons";

// styles
import styles from "./Styles";

// Components
import TypographyText from "../../components/Typography/Typography";
import ButtonQuiz from "../../components/Button/Button";

const Quiz = (props) => {
  const [quizLet, setQuizLet] = useState([]);
  const [number, setNumber] = useState(0);
  const [grade, setGrade] = useState(0);
  const [review, setReview] = useState([]);

  const chooseAnOption = (evt) => {
    let chosenAnswer = evt.target.outerText;

    if (quizLet[number].answer.toUpperCase() === chosenAnswer) {
      setGrade(grade + 10);
      setReview((oldArray) => [
        ...oldArray,
        {
          question: quizLet[number].question,
          result: "Correct",
        },
      ]);
    } else {
      setReview((oldArray) => [
        ...oldArray,
        {
          question: quizLet[number].question,
          result: "Incorrect",
        },
      ]);
    }

    setNumber(number + 1);
  };

  const history = useHistory();
  const routeChange = (path) => {
    history.push(path);
  };

  // Retrieve the data form the API
  useEffect(() => {
    axios
      .get("https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean")
      .then((res) => {
        setQuizLet(
          res.data.results.map((unit) => ({
            question: unit.question,
            options: [...unit.incorrect_answers, unit.correct_answer],
            answer: unit.correct_answer,
          }))
        );
      })
      .catch((err) => console.error(err));
  }, []);

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
          style={{ display: number === 10 ? "none" : "block" }}
        >
          {quizLet[number] && (
            <Paper elevation={0} className={classes.paperItems}>
              <TypographyText
                size="h6"
                textClass={classes.smallHeader}
                text={`${number + 1} of 10`}
              />
              {/* --- Display the questions --- */}
              <div style={{ marginBottom: 120 }}>
                <TypographyText
                  size="h6"
                  textClass={classes.smallHeader}
                  text={quizLet[number].question}
                />
              </div>
              {/* --- Display the true or false buttons --- */}
              {quizLet[number].options.map((item, index) => (
                <ButtonQuiz
                  buttonClass={classes.button}
                  key={index}
                  text={item}
                  onClick={chooseAnOption}
                />
              ))}
            </Paper>
          )}
        </Grid>

        <Grid item sm />

        {/* --- Display the result/review --- */}
        {number === 10 && (
          <Grid container item xs={12} sm={12}>
            <Grid
              container
              item
              xs={11}
              sm={11}
              md={10}
              lg={10}
              className={classes.resultsWrapper}
            >
              <Grid
                item
                xs={11}
                sm={10}
                md={10}
                lg={10}
                className={classes.resultsContainer}
              >
                <Paper elevation={0} className={classes.paperResults}>
                  <div className={classes.resultsScore}>
                    <TypographyText
                      size="h6"
                      textClass={classes.header}
                      text={`You scored: ${grade + "/100"}`}
                    />
                  </div>
                  {review.map((item, index) => (
                    <div key={index}>
                      <span style={{ display: "flex" }}>
                        {index + 1}-
                        <p
                          className={classes.question}
                          dangerouslySetInnerHTML={{
                            __html: item.question,
                          }}
                        />
                      </span>
                      <p
                        style={{
                          color: item.result === "Correct" ? "green" : "red",
                          marginTop: -10,
                        }}
                      >
                        {item.result === "Correct" ? (
                          <Check className={classes.check} fontSize="small" />
                        ) : (
                          <Close
                            fontSize="small"
                            style={{
                              paddingRight: 10,
                              marginBottom: -5,
                            }}
                          />
                        )}
                        {item.result}
                      </p>
                    </div>
                  ))}
                </Paper>
              </Grid>

              <Grid
                item
                xs={11}
                sm={6}
                md={5}
                lg={5}
                style={{
                  margin: "auto",
                }}
              >
                <ButtonQuiz
                  text="Play Again"
                  buttonClass={classes.button}
                  onClick={() => routeChange("/")}
                />
              </Grid>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};
Quiz.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Quiz);
