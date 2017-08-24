import React, { Component } from 'react';
import './App.css';
import OrderSummary from './orderSummary.component';
import PizzaList from './pizzaList.component';
import { MuiThemeProvider } from 'material-ui';

class App extends Component {
  static state = {};

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="items-list">
            <PizzaList></PizzaList>
          </div>
          <div className="my-order-wrapper">
            <OrderSummary></OrderSummary>
          </div>
        </div>
      </MuiThemeProvider>

    );
  }
}

export default App;
