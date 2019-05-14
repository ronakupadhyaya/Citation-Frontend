import React from 'react';
import step1 from './gcstep1.png';
import step2 from './gcstep2.png';
import step3 from './gcstep3.png';
import step4 from './gcstep4.png';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const headerStyle = {
  marginTop: 50,
  fontSize: 30,
  marginBottom: 50,
  textAlign: 'center',
};

const paragraphStyle = {
  fontSize: 15,
  marginLeft: 20,
}

const stepHeaderStyle = {
  fontSize: 30,
  fontWeight: 'bold',
  marginLeft: 20,
  marginTop: 20,
  marginBottom: 20,
}

const stepOneImageStyle = {
  margin: 50,
  height: 450,
  width: 200,
};

const stepTwoImageStyle = {
  margin: 50,
  height: 450,
  width: 300,
};

const stepThreeImageStyle = {
  margin: 50,
  height: 150,
  width: 300,
}

export default class GoogleCalendarInstructions extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        Import calendar to Google Calendar
      </div>
      <div style={paragraphStyle}>
        You can transfer your events from a different calendar application or Google Account to Google Calendar.
      </div>

      <div style={stepHeaderStyle}>
        Step 1: Open Google Calendar
      </div>
      <div style={paragraphStyle}>
        Navigate to https://calendar.google.com
      </div>

      <div style={stepHeaderStyle}>
        Step 2: Add other calendars
      </div>
      <div style={paragraphStyle}>
        Click on the '+' next other 'Other Calendar' on the left sidebar
      </div>
      <img style={stepOneImageStyle} src={step1} />

      <div style={stepHeaderStyle}>
        Step 3: From URL
      </div>
      <div style={paragraphStyle}>
        Click on the 'From URL' option from the pop-up
      </div>
      <img style={stepTwoImageStyle} src={step2} />

      <div style={stepHeaderStyle}>
        Step 4: Enter URL
      </div>
      <div style={paragraphStyle}>
        Enter the following URL in the textbox:
        https://calendar.google.com/calendar/ical/t30d498ub4icaegmjab3k7podo%40group.calendar.google.com/public/basic.ics
      </div>
      <img style={stepThreeImageStyle} src={step3} />

      <div style={stepHeaderStyle}>
        Step 5: Add Calendar
      </div>
      <div style={paragraphStyle}>
        Click on the 'Add Calendar' button
      </div>
      <img style={stepThreeImageStyle} src={step4} />
    </div>
    );
  }
}
