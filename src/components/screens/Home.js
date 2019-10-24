import React, { Component } from 'react';
import uuid from 'uuid';
import quote from 'inspirational-quotes';
import List from './List';

export default class Home extends Component {
  state = {
    list: [
      { id: uuid(), pesan: quote.getRandomQuote(), selesai: false },
      { id: uuid(), pesan: quote.getRandomQuote(), selesai: false },
      { id: uuid(), pesan: quote.getRandomQuote(), selesai: false }
    ]
  };

  render() {
    return <List list={this.state.list} />;
  }
}
