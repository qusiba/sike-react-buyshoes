import React from 'react'
import Ps from 'perfect-scrollbar'
import cartStore from '../stores/CartStore'
import CartItem from './CartItem'
import connect from './connect'

class CartView extends React.Component {
  componentDidMount() {
    let cartBox = React.findDOMNode(this.refs.cartBox)
    Ps.initialize(cartBox)
  }
  render() {
    let {cartItems} = this.props
    let cartItemNode = []
    for(let i in cartItems){
      cartItemNode.push(
        <CartItem cartItem={cartItems[i]} key={i}/>
      )
    }
    return (
     <div className="cart">
        <h3 className="cart__title">Shopping Cart</h3>
        <div className="cart__content" ref="cartBox">
          <h3 className="cart__title cart__title--spacer">Shopping Cart</h3>
          {cartItemNode}
        </div>
      </div>
    )
  }
}
@connect(cartStore, 'cartItems')
export default class ConnectedCart extends CartView {}