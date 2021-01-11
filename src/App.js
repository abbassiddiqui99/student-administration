import Navbar from "./component/layout/Navbar";
import StudentCard from "./component/studentDetailsCard/StudentCard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/App.scss";
import StudentView from "./component/studentDetailsCard/StudentView";
import StudentForm from "./component/studentDetailsCard/StudentForm";
import { Provider } from "react-redux";
import store, { rrfProps } from "./store";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import Login from "./component/login/Login";
import PrivateRoute from "./component/routes/PrivateRoute";
import NotFound from "./component/layout/NotFound";

function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Router>
          <div className="App">
            <PrivateRoute component={Navbar} />
            <Switch>
              <PrivateRoute exact path="/" component={StudentCard} />
              <PrivateRoute
                exact
                path="/student/view/:id"
                component={StudentView}
              />
              <PrivateRoute
                exact
                path="/student/form/:id?"
                component={StudentForm}
              />
              <Route exact path="/login" component={Login} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;
