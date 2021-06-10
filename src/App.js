import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

// Utils Stuff
import themeObjectContent from "./utils/theme";

// MUI Stuff
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

// Components
import Footer from "./components/Layout/Footer";

// Pages
import home from "./pages/landingPage/landingPage";
import quiz from "./pages/quiz/quiz";

const theme = createMuiTheme(themeObjectContent);

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <Router>
          <div className="container">
            <Switch>
              <Route exact path="/" component={home} />
              <Route exact path="/home" component={home} />
              <Route exact path="/quiz" component={quiz} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </div>
    </MuiThemeProvider>
  );
};

export default App;
