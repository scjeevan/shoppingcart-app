import React, { Component } from "react";
import ProductDropDown from './ProductDropDown';
import PriceTable from './PriceTable';

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Select a product to view price list</h2>
        <div>
            <ProductDropDown/>
        </div>
        <p><PriceTable/></p>
      </div>
    );
  }
}
 
export default Home;