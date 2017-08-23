import React from 'react';
import App from './App';
import './App.css';
import PizzaService from './pizza.service';

class PizzaList extends React.Component {

  componentWillMount() {
    // call the service to load pizza list
    App.state.pizzaList = PizzaService.getPizzaList().pizzas;
  }

  render() {
    console.log(JSON.stringify(App.state));

    return (
      <div className="e-order-header">
        <ul>
          <li>
            {App.state.pizzaList && App.state.pizzaList.map(pizza =>
              <span key={pizza.id}>{pizza.topping}</span>
            )}
          </li>
        </ul>
      </div>
    );
  }
}

export default PizzaList;
