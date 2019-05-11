import React from 'react';
import Home from './Home';
import EditableList from './EditableList';
import Result from './Result';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;
    return (
      <Result />
    );
  }
}
