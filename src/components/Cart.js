import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as CartActions from '../actions/cart'
import Shelf from './Shelf'

/*
This is a container component
*/
class Cart extends Component {

  render() {
    const CartItems = this.props.cart.map(
      (item, idx) => (<li key={idx}>{item}</li>)
    )

    return(
      <div className="Cart">
        <Shelf addItem={this.props.action.addToCart} />
        <h2>Cart Items</h2>
        <ol>
          {CartItems}
        </ol>
      </div>
    )
  }
}

function mapStateToProps(state, prop) {
  return {
    cart: state.cart
  }
}

function mapDispatchToProps(dispatch) {
  return {
     action: bindActionCreators(CartActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)