import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./components/views/LandingPage/LandingPage";
import SignInPage from "./components/views/SignInPage/SignInPage";
import SignUpPage from "./components/views/SignUpPage/SignUpPage";
import NavigationBar from "./components/views/NavigationBar/NavigationBar";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={SignInPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/landing" component={LandingPage} />
          <Route path="/logout" component={NavigationBar} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
