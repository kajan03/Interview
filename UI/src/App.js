import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  HashRouter,
} from "react-router-dom";
import Welcome from "./Components/welcome";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
function App() {
  return (
    <Router>
      <Route component={Welcome} path='/Home'></Route>
      <Route component={Signup} path='/Signup'></Route>
      <Route component={Login} path='/Login'></Route>


    </Router>
  );
}

export default App;
