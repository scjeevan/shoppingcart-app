import React, { Component } from "react";
import ProductDropDown from './ProductDropDown';


class CalculatorForm extends Component {
    constructor(props) {
    super(props);
    this.state = {
        productId: '1',
        qty:'1',
        cartons:'',
        units:'',
        price:''
    };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        fetch("http://localhost:8082/api/v1/product/calculate/"+this.state.productId+'?qty='+this.state.qty)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            this.setState({
                cartons:data.DATA.cartons, 
                amount:data.DATA.amount, 
                units:data.DATA.unit
            });
        })
        .catch(error => {
            console.log(error);
        });
    }
  
    handleChange(event) {
      this.setState({qty: event.target.value});
    }
  
    handleSubmit(event) {
        fetch("http://localhost:8082/api/v1/product/calculate/"+this.state.productId+'?qty='+this.state.qty)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            this.setState({
                cartons:data.DATA.cartons, 
                amount:data.DATA.amount, 
                units:data.DATA.unit
            });
        })
        .catch(error => {
            console.log(error);
        });
        event.preventDefault();
    }
  
    render() {
      return (
        <div>
            <ProductDropDown/>
            <input type="text" placeholder="Quantity" value={this.state.value} onChange={this.handleChange} />
            <button onClick={this.handleSubmit.bind(this)}>
                Submit
            </button>
            <table>
            <thead>
                <th>Cartons</th>
                <th>Units</th>
                <th>Total Price</th>
            </thead>
            <tbody>
                <td>{this.state.cartons}</td>
                <td>{this.state.units}</td>
                <td>{this.state.amount}</td>
            </tbody>
        </table>
        </div>
      );
    }
  }

  export default CalculatorForm;