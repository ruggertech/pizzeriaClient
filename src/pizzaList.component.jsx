import React from 'react';
import App from './App';
import './App.css';
import PizzaService from './pizza.service';
import PizzaListItem from './pizzaListItem.component';

class PizzaList extends React.Component {

  componentWillMount() {
    // call the service to load pizza list
    App.state.pizzaList = PizzaService.getPizzaList().pizzas;
    const pizzaList = PizzaService.getPizzaList().pizzas;
    App.state = ({ ...App.state, pizzaList });
  }

  render() {
    return (
      <div className="e-pizza-list-wrapper">
        <ul>
          {App.state.pizzaList && App.state.pizzaList.map(pizza => {
            return <li key={pizza.id}><PizzaListItem pizza={pizza} addOrder={this.props.addOrder} /></li>
          })}
        </ul>
      </div>
    );
  }
}

export default PizzaList;
