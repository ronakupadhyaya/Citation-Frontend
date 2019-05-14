import React from 'react';
import step1 from './cstep1.png';
import step2 from './cstep2.png';
import step3 from './cstep3.png';

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
};

const stepOneImageStyle = {
  margin: 50,
  height: 250,
  width: 350,
};

const stepTwoImageStyle = {
  margin: 50,
  height: 250,
  width: 450,
};

const stepThreeImageStyle = {
  margin: 50,
  height: 250,
  width: 450,
}

export default class ICalInstructions extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        Import calendar to iCal
      </div>
      <div style={paragraphStyle}>
        You can transfer your events from a different calendar application to iCal.
      </div>

      <div style={stepHeaderStyle}>
        Step 1: Open iCal
      </div>

      <div style={stepHeaderStyle}>
        Step 2: Import
      </div>
      <div style={paragraphStyle}>
        Go to File>Import. In the Import section File field, browse to locate the calendar .ics file to import.
      </div>
      <img style={stepOneImageStyle} src={step1} />

      <div style={stepHeaderStyle}>
        Step 3: Select Calendar
      </div>
      <div style={paragraphStyle}>
        Select an existing calendar or create a calendar to import the file.
      </div>
      <img style={stepTwoImageStyle} src={step2} />

      <div style={stepHeaderStyle}>
        Step 3: Click OK
      </div>
      <img style={stepThreeImageStyle} src={step3} />
    </div>
    );
  }
}
