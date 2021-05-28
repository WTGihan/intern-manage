import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import SignIn from "./components/pages/common/SignIn";
import SignUp from "./components/pages/common/SignUp";
import StudentProfile from "./components/pages/student/StudentProfile";
import CompanyProfile from "./components/pages/company/CompanyProfile";
import About from "./components/pages/common/About";
import NotFound from "./components/pages/common/NotFound";
// import CompanyHome from "./components/pages/company/CompanyHome";
// import StudentHome from "./components/pages/student/StudentHome";
import Home from "./components/pages/common/Home";
import Logout from "./components/pages/common/Logout";

function App() {
  const [loginUser, setLoginUser] = useState([]);

  // RUN ONCE when the app start
  useEffect(() => {
    getLocal();
  }, []);

  // UseEffect
  useEffect(() => {
    saveLocal();
  }, [loginUser]);

  // Save to local storage
  const saveLocal = () => {
    localStorage.setItem("loginUser", JSON.stringify(loginUser));
  };

  const getLocal = () => {
    if (localStorage.getItem("loginUser") === null) {
      localStorage.setItem("loginUser", JSON.stringify([]));
    } else {
      let loginUser = JSON.parse(localStorage.getItem("loginUser"));
      setLoginUser(loginUser);
    }
  };

  return (
    <Router>
      <div className="App">
        <Navbar loginUser={loginUser} />
        <Switch>
          {/* <Route exact path="/signin" component={SignIn}></Route> */}
          <Route
            exact
            path="/signin"
            render={(props) => (
              <SignIn setLoginUser={setLoginUser} loginUser={loginUser} />
            )}
          />
          <Route
            exact
            path="/logout"
            render={(props) => (
              <Logout setLoginUser={setLoginUser} loginUser={loginUser} />
            )}
          />
          <Route exact path="/signup" component={SignUp}></Route>
          <Route exact path="/about" component={About}></Route>
          {/* <Route exact path="/companies" component={CompanyHome}></Route> */}
          <Route
            exact
            path="/company/view/:id"
            component={CompanyProfile}
          ></Route>
          <Route exact path="/" component={Home}></Route>
          <Route
            exact
            path="/student-profile"
            component={StudentProfile}
          ></Route>
          <Route
            exact
            path="/company-profile"
            component={CompanyProfile}
          ></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
