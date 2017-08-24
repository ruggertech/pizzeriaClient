import React from 'react';
import App from './App';
import './App.css';
import PizzaService from './pizza.service';
import PizzaListItem from './pizzaListItem.component';

class PizzaList extends React.Component {

  componentWillMount() {
    // call the service to load pizza list
    let pizzaList = [];

    PizzaService.getPizzaList().then((ret) => {
      pizzaList = ret;
      console.log('componentWillMount: ', pizzaList);
      App.state = ({ ...App.state, pizzaList });
      this.forceUpdate();
    });
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
