import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {

  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        </div>
        <input type="email" placeholder='Enter your E-mail' />
        <input type="text" placeholder='Enter the Street' />
        <div className="multi-fields">
          <input type="text" placeholder='Enter the City' />
          <input type="text" placeholder='Enter the State' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Enter Zip-Code' />
          <input type="text" placeholder='Enter your Country' />
        </div>
        <input type="text" placeholder='Enter Phone Number' />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 5}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <b><p>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 5}</p></b>
            </div>
          </div>
          <button>Proceed to Payment</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
