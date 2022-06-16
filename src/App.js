import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignInPage from "./components/views/SignInPage/SignInPage";
import SignUpPage from "./components/views/SignUpPage/SignUpPage";
import NavigationBar from "./components/views/NavigationBar/NavigationBar";
import Lectures from "./components/views/Lectures/Lectures";
import InstructorLectures from "./components/views/Lectures/InstructorLectures";
import StudentLectures from "./components/views/Lectures/StudentLectures";
import CreateLecture from "./components/views/Lectures/CreateLecture";
import BoardLists from "./components/views/Boards/BoardLists";
import CreateBoard from "./components/views/Boards/CreateBoard";
import Board from "./components/views/Boards/Board";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={SignInPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/lecture" component={Lectures} exact={true} />
          <Route
            path="/lecture/instructor"
            component={InstructorLectures}
            exact={true}
          />
          <Route
            path="/lecture/student"
            component={StudentLectures}
            exact={true}
          />
          <Route
            path="/lecture/instructor/register"
            component={CreateLecture}
          />
          <Route path="/board/lists" component={BoardLists} />
          <Route path="/board/view" component={Board} />
          <Route path="/board/register" component={CreateBoard} exact={true} />
          <Route path="/logout" component={NavigationBar} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
