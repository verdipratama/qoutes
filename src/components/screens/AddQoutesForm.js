import React, { Component } from 'react';
import uuid from 'uuid';
import Icon from '../Icons';

export default class AddQoutesForm extends Component {
  state = {
    id: uuid(),
    pesan: '',
    selesai: false
  };

  handleChange = e => {
    this.setState({
      pesan: e.target.value
    });
  };

  handleEnter = e => {
    if (e.key === 'Enter') {
      this.handleSubmit();
    }
  };

  handleSubmit = () => {
    alert('Upss... Sorry, Lets try next time!');
    // console.log(this.state);
    this.setState({
      id: uuid(),
      pesan: '',
      selesai: false
    });
  };

  render() {
    return (
      <div className="container add__form">
        <div className="add-new-note">
          <input
            className="form-control"
            type="text"
            value={this.state.pesan}
            placeholder="Enter new qoutes here"
            onChange={this.handleChange}
            onKeyPress={this.handleEnter}
          />
          <button className="primary-cta" type="submit" onClick={this.handleSubmit}>
            <Icon name="add" size="21" /> Add New
          </button>
        </div>
      </div>
    );
  }
}
