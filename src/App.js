import { Component } from 'react';
import { Route, BrowserRouter, NavLink } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ProductPrice from './components/ProductPrice';


class App extends Component{
  render(){
    return (
      <BrowserRouter>
        <div>
        <h1>Shopping Cart</h1>
        <ul className="header">
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/productPrice">Price Calculator</NavLink></li>
        </ul>
        <div className="content">
          <Route exact path="/" component={Home}/>
          <Route path="/productPrice" component={ProductPrice}/>
        </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
