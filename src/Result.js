import React from 'react';
import EditableList from './EditableList';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import Radio from '@material-ui/core/Radio';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';

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
  marginTop: 50,
  fontSize: 50,
  color: '#FFFFFF',
  marginBottom: 25,
}

const listsStyle = {
  display: 'flex',
  flexDirection: 'row',
  marginBottom: 25,
}

const listTitleStyle = {
  marginLeft: 20,
  fontSize: 15,
  fontWeight: 'semi-bold',
  textAlign: 'center',
  color: '#FFFFFF',
  marginBottom: 10,
}

const suggestionStyle = {
  fontSize: 15,
  fontWeight: 'semi-bold',
  textAlign: 'center',
  color: '#FFFFFF',
  marginBottom: 15,
}

const footerStyle = {
  display: 'flex',
  flexDirection: 'row',
  color: '#FFFFFF',
}

const buttonStyle = {
  marginRight: 10,
}

const radioStyle = {
  color: '#FFFFFF',
}

const authors = [
  "Hui Zou",
  "Kenneth Lange",
  "Sanjay Chaudhuri",
  "Ryan Tibshirani",
  "Elizaveta Levina",
  "Jianqing Fan",
  "Ming Yuan",
  "Kshitij Khare",
  "Ji Zhu",
  "Mathias Drton",
];

export default class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'Google Calendar',
      citingAuthors: [],
      citedAuthors: [],
      others: [],
      loading: true,
    }
  }

  setRadioButtonChange(radioButton) {
    this.setState({
      selected: radioButton,
    })
  }

  componentDidMount() {
    const { name } = this.props.location;
    fetch("http://localhost:8080/Citation-Backend/getCitingAuthors?name=" + name)
      .then(res => res.json())
      .then(
        (result) => {
          const citingAuthors = result.map(item => item.name);
          this.setState({
            citingAuthors: citingAuthors,
          });
          fetch("http://localhost:8080/Citation-Backend/getCitedAuthors?name=" + name)
            .then(res => res.json())
            .then(
              (result) => {
                const citedAuthors = result.map(item => item.name);
                this.setState({
                  citedAuthors: citedAuthors,
                  loading: false,
                });
              },
              (error) => {
                console.log(error);
                this.setState({
                  loading: false,
                });
              }
            )
        },
        (error) => {
          console.log(error);
          this.setState({
            loading: false,
          });
        }
      )
  }

  generateSchedule = () => {
    const { citingAuthors, citedAuthors, others } = this.state;
    const authors = citingAuthors.concat(citedAuthors).concat(others);
    this.props.history.push({
      pathname: 'calendar',
      state: {
        authors: authors,
      }
    });
  }

  addItem = (item, type) => {
    if(type == 'Citing') {
      var citingAuthors = this.state.citingAuthors;
      citingAuthors.unshift(item);
      this.setState({
        citingAuthors: citingAuthors,
        citingAuthorsItem: '',
      })
    }
    else if(type == 'Cited') {
      var citedAuthors = this.state.citedAuthors;
      citedAuthors.unshift(item);
      this.setState({
        citedAuthors: citedAuthors,
        citedAuthorsItem: '',
      })
    }
    else {
      var others = this.state.others;
      others.unshift(item);
      this.setState({
        others: others,
        othersItem: '',
      })
    }
  }

  deleteItem = (toDeleteAuthor, type) => {
    if(type == 'Citing') {
      var citingAuthors = this.state.citingAuthors;
      citingAuthors = citingAuthors.filter(author => author !== toDeleteAuthor);
      this.setState({
        citingAuthors: citingAuthors,
      });
    }
    else if(type == 'Cited') {
      var citedAuthors = this.state.citedAuthors;
      citedAuthors = citedAuthors.filter(author => author !== toDeleteAuthor);
      this.setState({
        citedAuthors: citedAuthors,
      });
    }
    else {
      var others = this.state.others;
      others = others.filter(author => author !== toDeleteAuthor);
      this.setState({
        others: others,
      });
    }
  }

  render() {
    const { selected,
      citingAuthors,
      citedAuthors,
      others,
      citingAuthorsItem,
      citedAuthorsItem,
      othersItem,
      loading,
    } = this.state;

    if(loading) {
      return null;
    }

    return (
      <div style={containerStyle}>
        <div style={headerStyle}>
          Here are the people we think you'd like to hear
        </div>
        <div style={listsStyle}>
          <div>
            <div style={listTitleStyle}>People who cite you a lot</div>
            <EditableList
            type='Citing'
            authors={citingAuthors}
            addItem={this.addItem}
            deleteItem={this.deleteItem}
            />
          </div>
          <div>
            <div style={listTitleStyle}>People you cite a lot</div>
            <EditableList
            type='Cited'
            authors={citedAuthors}
            addItem={this.addItem}
            deleteItem={this.deleteItem}
            />
          </div>
          <div>
            <div style={listTitleStyle}>Others</div>
            <EditableList
            type='Other'
            authors={others}
            addItem={this.addItem}
            deleteItem={this.deleteItem}
            />
          </div>
        </div>
        <div style={suggestionStyle}>
          Feel free to edit these lists or add new names in 'Others'
          before generating your schedule
        </div>
        <div style={footerStyle}>
          <Button
          variant="contained"
          size='medium'
          onClick={() => this.generateSchedule()}
          >
            <div style={buttonStyle}>
              Generate my JSM schedule
            </div>
          </Button>
          <div>
          <Radio
            style={radioStyle}
            checked={selected == 'Google Calendar'}
            icon={<RadioButtonUncheckedIcon fontSize="small" />}
            checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
            onChange={() => this.setRadioButtonChange('Google Calendar')}
          />
          Google Calendar
          <Radio
            style={radioStyle}
            checked={selected == 'iCal'}
            icon={<RadioButtonUncheckedIcon fontSize="small" />}
            checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
            onChange={() => this.setRadioButtonChange('iCal')}
          />
          iCal
          <Radio
            style={radioStyle}
            checked={selected == 'Text'}
            icon={<RadioButtonUncheckedIcon fontSize="small" />}
            checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
            onChange={() => this.setRadioButtonChange('Text')}
          />
          Text (.txt)
          </div>
        </div>
    </div>
    );
  }
}
