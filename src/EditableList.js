import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';

const containerStyle = {
  maxHeight: 400,
  overflow: 'auto',
  backgroundColor: 'white',
  marginLeft: 20,
  marginRight: 20,
}

const listItemStyle = {
  width: 250,
  justifyContent: 'space-between',
  borderBottomWidth: 1,
  borderBottomStyle: 'solid',
  borderBottomColor: '#e0e0e0',
  height: 50,
}

const firstListItemStyle = {
  marginTop: -8,
  width: 250,
  justifyContent: 'space-between',
  borderBottomWidth: 1,
  borderBottomStyle: 'solid',
  borderBottomColor: '#e0e0e0',
}

const addItemStyle = {
  width: 250,
  justifyContent: 'space-between',
  borderBottomWidth: 1,
  borderBottomStyle: 'solid',
  borderBottomColor: '#e0e0e0',
}

const deleteIconStyle = {
  marginLeft: 10,
}

export default class EditableList extends React.Component {
  constructor(props) {
    super(props);
    const { authors, item } = this.props;
    this.state = {
      item: item,
      authors: authors,
    }
  }

  componentDidUpdate(prevProps) {
    if(this.props.authors !== prevProps.authors || this.props.item !== prevProps.item) {
      const { authors, item } = this.props;
      this.setState({
        item: '',
        authors: authors,
      })
    }
  }

  setAddItemState = (value) => {
    this.setState({
      item: value,
    });
  }

  addItem = (value) => {
    const { type, addItem } = this.props;
    addItem(this.state.item, type);
    this.setState({
      item: '',
    });
  }

  renderList() {
    const { authors } = this.state;
    const { deleteItem, type } = this.props;
    return authors && authors.length > 0 ? (
      <List>
        {authors.map((author, index) => {
          return index == 0 ?
          (<ListItem key={index} style={firstListItemStyle}>
            {author}
          <DeleteIcon
          style={deleteIconStyle}
          onClick={() => deleteItem(author, type)}
           />
          </ListItem>)
          :
          (<ListItem key={index} style={listItemStyle}>
            {author}
          <DeleteIcon
          style={deleteIconStyle}
          onClick={() => deleteItem(author, type)}
           />
          </ListItem>)
        })}
      </List>
    ) :
    null;
  }

  render() {
    const { item } = this.state;

    return (
      <div style={containerStyle}>
        <ListItem style={addItemStyle}>
        <InputBase
          placeholder='Add Name'
          disableUnderline={true}
          value={item}
          onChange={event => this.setAddItemState(event.target.value)}
        />
        <AddIcon
        style={deleteIconStyle}
        onClick={() => this.addItem()}
        />
        </ListItem>
        {this.renderList()}
      </div>
    );
  }
}
