import React from 'react';
import GoogleCalendarInstructions from './GoogleCalendarInstructions';
import ICalInstructions from './ICalInstructions';

export default class instructions extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { view } = this.props.location.state;

    if(view == 'Google Calendar') {
      return (
        <GoogleCalendarInstructions />
      );
    }
    else {
      return (
        <ICalInstructions />
      );
    }
  }
}
