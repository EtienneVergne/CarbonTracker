import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CarbonCalculator from './components/CarbonCalculator';
import App from './App';
import MobiliteDouce from './components/MobiliteDouce';
import * as serviceWorker from './serviceWorker';

import {     BrowserRouter as Router,     Route,     Switch } from "react-router-dom"; 

const Root = () => (
  <Router>
      <Switch>
          <Route exact path='/' component={App} />
          <Route path='/calculator' component={CarbonCalculator}/>
          <Route path='/mobilitedouce' component={MobiliteDouce} />
          
      </Switch>
  </Router>
);

ReactDOM.render(
  
    <Root />,
  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
