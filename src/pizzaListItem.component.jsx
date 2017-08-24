import React from 'react';
import './App.css';
import { FlatButton } from 'material-ui';

class PizzaListItem extends React.Component {
  handleAddToOrder() {
    // Add current item to the order summary in the state

  }

  render() {
    return (
      <span className="e-pizza-list-item-wrapper">
        {JSON.stringify(this.props.pizza)}
            <FlatButton id={this.props.pizza.id} label="Add"
                        primary={true}
                        onClick ={this.handleAddToOrder}/>
      </span>
    );
  }
}

export default PizzaListItem;
