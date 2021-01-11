import Navbar from "./component/layout/Navbar";
import StudentCard from "./component/studentDetailsCard/StudentCard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/App.scss";
import StudentView from "./component/studentDetailsCard/StudentView";
import StudentForm from "./component/studentDetailsCard/StudentForm";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={StudentCard} />
          <Route exact path="/student/view/:id" component={StudentView} />
          <Route exact path="/student/form/:id?" component={StudentForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
