import React, { Component } from "react";
import CalculatorForm from './CalculatorForm';

class ProductPrice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTeam: this.props.data,
        };
        console.log("SETTING VALUE"+this.state.selectedTeam);
    }

  render() {
    return (
      <div>
        <h2>Calculate Price</h2>
        <div><CalculatorForm/></div>
      </div>
    );
  }
}
 
export default ProductPrice;