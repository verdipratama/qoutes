import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Home from './components/screens/Home';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Skeletons from '../src/components/Skeletons';
import AddQoutesForm from './components/screens/AddQoutesForm';

import '../src/styles/index.scss';
import * as serviceWorker from './serviceWorker';

export default class App extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 6000);
  }

  render() {
    return (
      <div className="app-wrapper">
        <Header />
        <AddQoutesForm />
        {this.state.loading ? <Skeletons /> : <Home />}
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
