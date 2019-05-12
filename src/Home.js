import React from 'react';
import InputBase from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  backgroundImage: "url('https://api.regonline.com/CustImages/290000/299570/104475878-DENVER_1.1910x1000_copy_2.jpg')",
  backgroundSize: 'cover',
  fontWeight: 'semi-bold',
  alignItems: 'center',
};

const headerStyle = {
  marginTop: 200,
  fontSize: 70,
  color: '#FFFFFF',
  marginBottom: 50,
}

const searchStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  height: 50,
  width: 500,
  backgroundColor: '#FFFFFF',
};

const searchInputStyle = {
  marginLeft: 10,
  width: 450,
}

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    }
  }

  setNameState = (value) => {
    this.setState({
      name: value,
    })
  }

  render() {
    const { name } = this.state;

    return (
      <div style={containerStyle}>
      <div style={headerStyle}>
        Get your custom JSM schedule
      </div>
        <div style={searchStyle}>
          <InputBase
            placeholder="Your Name"
            disableUnderline={true}
            style={searchInputStyle}
            value={name}
            onChange={event => this.setNameState(event.target.value)}
          />
          <Link to={{
            pathname: '/search',
            name: name,
          }}>
            <SearchIcon />
          </Link>
      </div>
    </div>
    );
  }
}
