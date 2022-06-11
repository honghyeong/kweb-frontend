import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./components/views/LandingPage/LandingPage";
import SignInPage from "./components/views/SignInPage/SignInPage";
import SignUpPage from "./components/views/SignUpPage/SignUpPage";

function App() {
  return (
    <Router>
      <div>~
        <Switch>
          <Route exact path="/" component={SignInPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/landing" component={LandingPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
