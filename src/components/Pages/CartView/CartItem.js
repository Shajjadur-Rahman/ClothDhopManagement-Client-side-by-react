import React from 'react'

const CartItem = ({
    customer,
    cartItems, 
    removeProduct}) => {

    return cartItems && cartItems.map((item, index) => (
        <tr key={index}>
            <td>{item.product.name}</td>
            <td className="cart-image">
               
                     <img src={item.product.p_image ? item.product.p_image : item.product.p_image_url} alt={item.product.name}/> 
             
            </td>
            <td>{item.price.toFixed(2)}</td>
            <td>{item.quantity}</td>
            <td>{item.quantity === 1 ? `${item.product.unit_tag}` : `${item.product.unit_tag}s`}</td>
            <td>{item.discount.toFixed(2)}</td>
            <td>{item.sub_total.toFixed(2)}</td>
            <td>{new Date(item.timestamp).toLocaleString()}</td>
            <td>
            <button className="cart_btn" style={{background: 'red', float: 'right'}} onClick={item.product.quantity ? () => removeProduct(item.product.id, customer.id, item.quantity, 'not_fabric') : () => removeProduct(item.product.id, customer.id, item.quantity, 'fabric')}>Delete</button>  
            </td>
        </tr>
      ))
    }
export default CartItem