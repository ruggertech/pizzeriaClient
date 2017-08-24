import React from 'react';
import App from './App';
import './App.css';
import PizzaService from './pizza.service';
import PizzaListItem from './pizzaListItem.component';

class PizzaList extends React.Component {

  componentWillMount() {
    // call the service to load pizza list
    App.state.pizzaList = PizzaService.getPizzaList().pizzas;
  }

  render() {
    console.log(JSON.stringify(App.state));
    return (
      <div className="e-pizza-list-wrapper">
        <ul>
          {App.state.pizzaList && App.state.pizzaList.map(pizza => {
            return <li key={pizza.id}><PizzaListItem pizza={pizza} /></li>
          })}
        </ul>
      </div>
    );
  }
}

export default PizzaList;
