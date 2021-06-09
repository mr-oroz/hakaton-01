import React from 'react';
import './App.css'
import Header from './components/Header';
import PRODUCTS from './products.json';
import Product from './pages/Product'
import CATEGORIES from './categories'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cart: PRODUCTS,
      categories: CATEGORIES,
    }
  }
  handleClick = (id) => {
    const cart = PRODUCTS.filter(v => v.category_id === id);
    this.setState({
      cart
    })
  }
  handleClickDisCount = (id) => {
    const cart = PRODUCTS.filter(v => v.discount !== id);
    this.setState({
      cart
    })
  }
  render() {
    console.log(this.state.categories)
    return (
      <div className={'App'}>
        <Header handleClickDisCoun={(v) => this.handleClickDisCount} handleClick={(v) => this.handleClick(v)} Categories={this.state.categories} />
        <Product cart={this.state.cart} Categories={this.state.categories} />
      </div>
    );
  }
}

export default App;