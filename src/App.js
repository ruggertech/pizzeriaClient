import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import OrderHeader from './OrderHeader.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Order a pizza</h2>

        </div>
        <p className="App-intro">
          <OrderHeader></OrderHeader>

          <OrderHeader></OrderHeader>
          This is my react component
        </p>
      </div>
    );
  }
}

export default App;
