import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignInPage from "./components/views/SignInPage/SignInPage";
import SignUpPage from "./components/views/SignUpPage/SignUpPage";
import NavigationBar from "./components/views/NavigationBar/NavigationBar";
import Lectures from "./components/views/Lectures/Lectures";
import InstructorLectures from "./components/views/Lectures/InstructorLectures";
import StudentLectures from "./components/views/Lectures/StudentLectures";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={SignInPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/lecture" component={Lectures} exact={true} />
          <Route path="/lecture/instructor" component={InstructorLectures} />
          <Route path="/lecture/student" component={StudentLectures} />
          <Route path="/logout" component={NavigationBar} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
