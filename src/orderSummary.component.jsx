import React, { Component } from 'react';
import './App.css';
import App from './App';

class OrderSummary extends Component {
  render() {
    return (
      <div className="e-order-summary">
        <div className="e-order-list">
          <div className="e-order-list-title"><h1>My Order</h1></div>

          {App.state && App.state.orders && App.state.orders.map(ord => {
            return <p>Pizza {ord.topping} {ord.price}$</p>
            // return JSON.stringify(ord);
          })}
        </div>
        <div className="e-order-total"><b>Order Total: </b>{App.state.orderTotal || 0}$</div>
      </div>
    );
  }
}

export default OrderSummary;
