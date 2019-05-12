import React from 'react';
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = BigCalendar.momentLocalizer(moment);


export default class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      speakerEvents: [],
      authorEvents: [],
    }
  }

  componentWillMount() {
    const { authors } = this.props.location.state;
    fetch("http://localhost:8080/Citation-Backend/getSchedule", {
    method: 'POST',
    body: JSON.stringify({
      authors: authors,
    })
  })
  .then((response) => response.text())
  .then((responseText) => {
    const json = JSON.parse(responseText);
    var speakerEvents = json['Speaker'];
    var authorEvents = json['Author'];
    speakerEvents = speakerEvents.map(event => {
      var newEvent = Object.assign({}, event);
      newEvent.color = '#2979ff';
      newEvent.start = new Date(event.start);
      newEvent.end = new Date(event.end);
      return newEvent;
    });
    authorEvents = authorEvents.map(event => {
      var newEvent = Object.assign({}, event);
      newEvent.color = '#00796b';
      newEvent.start = new Date(event.start);
      newEvent.end = new Date(event.end);
      return newEvent;
    });
    console.log(speakerEvents);
    this.setState({
      speakerEvents: speakerEvents,
      authorEvents: authorEvents,
    })
  })
  .catch((error) => {
    console.log(error);
  });
  }

  eventStyleGetter = (event) => {
    var color = event.color;
    var style = {
        backgroundColor: '#FFFFFF',
        color: color,
    };
    return {
        style: style
    };
  };

  render() {
    const { authorEvents, speakerEvents } = this.state;
    const events = authorEvents.concat(speakerEvents);
    return (
      <BigCalendar
        events={events}
        localizer={localizer}
        style={{height: '100vh', width: '100vw'}}
        step={60}
        showMultiDayTimes
        eventPropGetter={(this.eventStyleGetter)}
        defaultView={'agenda'}
        defaultDate={new Date(2019, 6, 26)}
      />
    );
  }
}
