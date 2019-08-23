import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './Home';
import Result from './Result';
import Calendar from './Calendar';
import GoogleCalendarInstructions from './GoogleCalendarInstructions';
import ICalInstructions from './ICalInstructions';
import Instructions from './Instructions';

export default class App extends React.Component {

  render() {
    const { navigation } = this.props;
    return (
      <Router basename="/jsmschedule">
        <Route exact path="/" component={Home} />
        <Route path="/search" component={Result} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/instructions" component={Instructions} />
      </Router>
    );
  }
}
