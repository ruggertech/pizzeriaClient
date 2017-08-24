import React, { Component } from 'react';
import './App.css';
import OrderSummary from './orderSummary.component';
import PizzaList from './pizzaList.component';
import { MuiThemeProvider } from 'material-ui';

class App extends Component {
  static state = {};

  constructor() {
    super();
    App.state.orders = [];
    App.state.pizzaList = [];
    App.state.orderTotal = 0;
  }

  addOrder(order) {
    App.state.orders.push(order);
    App.state.orderTotal = App.state.orderTotal + order.price;
    console.log('addOrder: ', order.price);
    this.forceUpdate()
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="items-list">
            <PizzaList addOrder={this.addOrder.bind(this)}></PizzaList>
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
