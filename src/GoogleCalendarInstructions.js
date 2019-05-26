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

const downloadStyle = {
  fontSize: 15,
  marginLeft: 20,
  marginBottom: 5,
  fontWeight: 'bold',
};

const paragraphStyle = {
  fontSize: 15,
  marginLeft: 20,
  marginBottom: 5,
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

  componentWillMount() {
    const { authors } = this.props;
    fetch("http://citation-env.t9nubywtms.us-east-2.elasticbeanstalk.com/getSpeakerCalendar", {
      method: 'POST',
      body: JSON.stringify({
        authors: authors,
      })
    })
    .then(res => res.blob())
    .then(
      (blob) => {
        const element = document.createElement("a");
        element.href = URL.createObjectURL(blob);
        element.download = "speakercalendar.ics";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
      },
      (error) => {
        console.log(error);
      }
    )

    fetch("http://citation-env.t9nubywtms.us-east-2.elasticbeanstalk.com/getAuthorCalendar", {
      method: 'POST',
      body: JSON.stringify({
        authors: authors,
      })
    })
    .then(res => res.blob())
    .then(
      (blob) => {
        const element = document.createElement("a");
        element.href = URL.createObjectURL(blob);
        element.download = "authorcalendar.ics";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
      },
      (error) => {
        console.log(error);
      }
    )
  }

  render() {

    return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        Import calendar to Google Calendar
      </div>
      <div style={downloadStyle}>
        Your download will begin shortly.
      </div>
      <div style={paragraphStyle}>
        You can transfer your events from a different calendar application or Google Account to Google Calendar.
      </div>

      <div style={stepHeaderStyle}>
        Step 1: Open Google Calendar
      </div>
      <div style={paragraphStyle}>
        Navigate to calendar.google.com
      </div>

      <div style={stepHeaderStyle}>
        Step 2: Add other calendars
      </div>
      <div style={paragraphStyle}>
        Click on the '+' next other 'Other Calendar' on the left sidebar
      </div>
      <img style={stepOneImageStyle} src={step1} />

      <div style={stepHeaderStyle}>
        Step 3: Select Import
      </div>
      <div style={paragraphStyle}>
        Click on the 'Import' option from the pop-up
      </div>
      <img style={stepTwoImageStyle} src={step2} />

      <div style={stepHeaderStyle}>
        Step 4: Select Calendar
      </div>
      <div style={paragraphStyle}>
        Click on 'Select file from your computer' and browse to locate the calendar .ics file to import.
      </div>
      <img style={stepThreeImageStyle} src={step3} />

      <div style={stepHeaderStyle}>
        Step 5: Import
      </div>
      <div style={paragraphStyle}>
        Click on the 'Import' button
      </div>
      <img style={stepThreeImageStyle} src={step4} />
    </div>
    );
  }
}
