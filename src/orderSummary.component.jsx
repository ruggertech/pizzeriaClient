import React, { Component } from 'react';
import './App.css';
import App from './App';

class OrderSummary extends Component {
  render() {
    return (
      <div className="e-order-summary">
        {App.state && App.state.orders && App.state.orders.map(ord => {
          console.log('here: ');
          return JSON.stringify(ord);
        })}
      </div>
    );
  }
}

export default OrderSummary;
