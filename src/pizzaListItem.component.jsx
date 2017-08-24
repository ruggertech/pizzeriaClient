import React from 'react';
import './App.css';
import { FlatButton } from 'material-ui';

class PizzaListItem extends React.Component {


  handleAddToOrder() {
    // Add current item to the order summary in the state
    this.props.addOrder(this.props.pizza);
  }

  render() {
    return (
      <div className="e-pizza-list-item-wrapper">
        <img src={this.props.pizza.img} title={this.props.pizza.topping} alt={this.props.pizza.topping}/>
        <div>
          <p>Pizza: {this.props.pizza.topping}</p>
          <p className="e-pizza-price">Price: {this.props.pizza.price}$</p>
          <p>Ingredients: {this.props.pizza.ingredients.join(", ")}</p>


          <FlatButton  id={this.props.pizza.id} label="Add"
                      primary={false}
                      onClick={this.handleAddToOrder.bind(this)}
                      backgroundColor="red"/>


        </div>
      </div>
    );
  }
}

export default PizzaListItem;
