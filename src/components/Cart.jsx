import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as CartActions from '../actions/cart'
import Shelf from './Shelf'
import EmptyCart from './EmptyCart'

/*
This is a container component
*/
class Cart extends Component {

  render() {
    const CartItems = this.props.cart.map(
      (item, idx) =><li key={idx}>{item.name} - ${item.price}</li>
    )

    const isCartEmpty = () => CartItems.length === 0
    
    return(
      <div className="Cart">
        <Shelf addItem={this.props.action.addToCart} />
        <h2>Cart Items</h2>
        <ol>
          {isCartEmpty() ? <EmptyCart/> : CartItems}
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
