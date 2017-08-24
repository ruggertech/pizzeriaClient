import React, { Component } from 'react';
import './App.css';
import App from './App';

class OrderSummary extends Component {
  render() {
    return (
      <div className="e-order-summary">
        <div className="e-order-list">
        {App.state && App.state.orders && App.state.orders.map(ord => {
          return JSON.stringify(ord);
        })}
        </div>
        <div className="e-order-total">Total: {App.state.orderTotal || 0}</div>
      </div>
    );
  }
}

export default OrderSummary;
