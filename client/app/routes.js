// @flow
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import Question from './components/question'
import Questions from './containers/Questions'
import Tests from './containers/Tests'


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/counter" component={CounterPage} />
    <Route path="/tests" component={Tests} />
    <Route path="/tests/:id/questions" component={Questions}>
    	<Route path="/tests/:id/questions/:question" component={Question}/>
    </Route>
  </Route>
);
