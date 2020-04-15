
import ReactDOM from 'react-dom';
import Home from '../src/Home/Home';
import React, { Component } from 'react';

import Help from '../src/Home/Help';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const About = () => <h1>About Us</h1>

class App extends Component {
  render() {
      return (
        <div>
        <Router>
           <Switch>
             <Route exact path="/" component={Home} />
             <Route path="/help" component={Help} />
           </Switch>
         </Router>
 </div>
);
}
}
export default App;
