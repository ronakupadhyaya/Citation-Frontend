import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './Home';
import Result from './Result';
import Calendar from './Calendar';
import GoogleCalendarInstructions from './GoogleCalendarInstructions';
import CalendarInstructions from './CalendarInstructions';


export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;
    return (
      <Router>
        <Route exact path="/" component={CalendarInstructions} />
        <Route path="/search" component={Result} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/instructions" component={GoogleCalendarInstructions} />
      </Router>
    );
  }
}
