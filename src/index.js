import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Form from './class-based-components/Form';
import ListActivities from './class-based-components/ListActivities';
import ListActivitiesFunctional from './functional-components/ListActivities';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/form">Controlled component example</Link>
        </li>
        <li>
          <Link to="/class-component">Calling API through class based component</Link>
        </li>
        <li>
          <Link to="/functional-component">Calling API through functional component using hooks</Link>
        </li>
      </ul>

      <Switch>
          <Route path="/form">
            <Form />
          </Route>
          <Route path="/class-component">
            <ListActivities />
          </Route>
          <Route path="/functional-component">
            <ListActivitiesFunctional />
          </Route>
          <Route path="/">
            <App />
          </Route>
        </Switch>
   </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
