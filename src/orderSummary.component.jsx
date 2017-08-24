import React, { Component } from 'react';
import './App.css';
import App from './App';
import { FlatButton } from 'material-ui';
import PizzaService from './pizza.service';

class OrderSummary extends Component {
  placeOrder() {
    PizzaService.placeOrder(App.state.orderDetails).then(() => {
      this.forceUpdate();
    });
  }

  removePizzaFromOrder = (order) => {
    console.log('removePizzaFromOrder: ', App.state.orderDetails);
    const pizzaToRemove = App.state.orderDetails.find(ord => ord.id === order.id);
    if(pizzaToRemove) {
      const amount = pizzaToRemove.amount;
      if (amount > 1) {
        pizzaToRemove.amount = amount - 1;
      } else {
        App.state.orderDetails.splice(pizzaToRemove, 1)
      }
    }

    this.forceUpdate();
  }

  render() {
    return (
      <div className="e-order-summary">
        <div className="e-order-list">
          <div className="e-order-list-title"><h1>My Order</h1></div>
          {App.state && App.state.orderDetails && App.state.orderDetails.map((ord, index) => {
            return <div key={index}>
              Pizza {ord.topping} {ord.price}$ Amount: {ord.amount}
              <FlatButton label="Remove"
                          primary={false}
                          onClick={() => {
                            this.removePizzaFromOrder(ord);
                          }}
                          backgroundColor="red"/>
            </div>
          })}

        </div>
        <div className="e-order-total"><b>Order Total: </b>{App.state.orderTotal || 0}$</div>
        <div className="e-order-place-order"><FlatButton label="Place Order"
                                                         primary={false}
                                                         onClick={this.placeOrder.bind(this)}
                                                         backgroundColor="red"/></div>
      </div>
    );
  }
}

export default OrderSummary;
