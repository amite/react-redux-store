import React, { Component } from 'react';

class Shelf extends Component {
  constructor(props) {
    super(props)

    this.addItemToCart = this.addItemToCart.bind(this)

    this.state = {
      shelfItems: [
        { "name": 'shampoo', "price": 23 },
        { "name": 'chocolate', "price": 15 },
        { "name": 'yogurt', "price": 10 }
      ]
    }
  }
  
  addItemToCart(item){
    this.props.addItem(item)
  }
  
  render() {
    const shelfItems = this.state.shelfItems.map((item, idx) => {
      return <li key={idx}><button onClick={()=>this.addItemToCart(item)}>[+]</button>{item.name} - ${item.price}</li>
    })
    return(
      <div>
        <h2>Shelf</h2>
        <ul>
          {shelfItems}
        </ul>
      </div>
    )
  }
}
export default Shelf