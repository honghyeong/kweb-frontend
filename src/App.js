import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignInPage from "./components/views/SignInPage/SignInPage";
import SignUpPage from "./components/views/SignUpPage/SignUpPage";
import NavigationBar from "./components/views/NavigationBar/NavigationBar";
import LectureList from "./components/views/LectureList/LectureList";

function App() {
  return (
    <Router>
      <div>
        ~
        <Switch>
          <Route exact path="/" component={SignInPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/lecture" component={LectureList} />
          <Route path="/logout" component={NavigationBar} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
