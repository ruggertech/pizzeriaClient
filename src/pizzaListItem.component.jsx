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
      <span className="e-pizza-list-item-wrapper">
        {JSON.stringify(this.props.pizza)}
            <FlatButton id={this.props.pizza.id} label="Add"
                        primary={true}
                        onClick ={this.handleAddToOrder.bind(this)}/>
      </span>
    );
  }
}

export default PizzaListItem;
