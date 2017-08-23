import React, { Component } from 'react';
import './App.css';
import OrderSummary from './OrderSummary.component';
import PizzaList from './PizzaList.component';

class App extends Component {
  static state = {};

  render() {
    return (
      <div className="App">

        <div className="items-list">
          <PizzaList></PizzaList>
        </div>
        <div className="my-order-wrapper">
          <OrderSummary></OrderSummary>
        </div>
      </div>

    );
  }
}

export default App;
