import React, {useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import {connect} from 'react-redux'
import ReactLoading from 'react-loading'
import { allCartItems, completeOrder, removeProduct } from './../../../Services/Actions/CartActions'
import CartItem from './CartItem'
import './CartView.css'





const CartView = ({
    total,
    loading,
    cartItems,
    allCartItems,
    completeOrder,
    removeProduct,
    total_discount,
    total_cart_items
}) => {

    const [customer, setCustomer] = useState(null)

    useEffect(() => {
        document.title = "Cart-view"
    })

    const [click, setClick] = useState(false)

    const [paid, setPaid] = useState(0)
    const [error, setError] = useState('')



    useEffect(() => {
    const custo = JSON.parse(localStorage.getItem("customer"))
    setCustomer(custo)
    }, [])

        useEffect(() => {

            if(customer){
                allCartItems(customer.id)
            }
        
    }, [allCartItems, customer])

    const history = useHistory()



    const continueSale = () => {
        history.push('/stock')
    }



    const onSubmitHandler = event => {
        event.preventDefault()
        if(parseFloat(total) >= paid && paid > 0){
            completeOrder(customer.id, paid, history)
            setError('')
            console.log("Submitted !")
        }else{
            setError('Invalid amount ! Paid amount should be lessthan or equal to due amount !')
            console.log("Submition failed !")
        }
    }

    return <>


                    <div className="page-header">
                      <h2><span>Cart view</span></h2>
                      <strong>{ new Date().toLocaleDateString()}</strong>
                    </div>
                    {
                        loading ? (
                            <ReactLoading style={{ height: '100px', width: '80px', margin: '80px auto', display: 'block'}} type='spin'/>
                        ) : (
                            <>
            <div id="section-to-print">
                <table className="data-table">  
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Customer</th>
                            <th>Phone</th>
                            <th style={{width: '200px'}}>
                                {
                                    customer ? (
                                    <button type="button" onClick={() => window.print()} className="create_retport" style={{float: 'right', marginRight: '10px'}}><i className="fas fa-print"></i></button>
                                    ) : (
                                        <button type="button" className="create_retport" style={{background: 'red', cursor: 'not-allowed', float: 'right', marginRight: '10px'}}><i className="fas fa-print"></i></button> 
                                    )
                                }
                                
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{customer ? customer.id : "None"}</td>
                            <td>{customer ? customer.name : "None"}</td>
                            <td>{customer ? customer.phone : "None"}</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
         
                <div className="cart__view">
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Poduct</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Quatity</th>
                                <th>Unit</th>
                                <th>Discount</th>
                                <th>Total</th>
                                <th>Date</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <CartItem cartItems={cartItems} removeProduct={removeProduct} customer={customer}/>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td>Total : {total_cart_items} {total_cart_items === 1 ? "item" : "items"}</td>
                                <td colSpan="3"></td>
                                <td>{total_discount.toFixed(2)}</td>
                                <td>{total.toFixed(2)}</td>
                                <td colSpan="2"></td>
                            </tr>
                            <tr>
                                <td colSpan="5"></td>
                                <td colSpan="5">
                                {click ? <button className="cart_btn continue__sale" style={{float: 'right', visibility: 'hidden'}}>Continue Sale</button> : <button className="cart_btn continue__sale" onClick={() => continueSale()}>Continue Sale</button>}{" "}
                                    {
                                        customer ? (
                                            click ? <button className="cart_btn" style={{float: 'right', visibility: 'hidden'}} >Complete Order</button> : <button className="cart_btn" style={{float: 'right'}} onClick={() => setClick(true)}>Complete Order</button>
                                        ) : (
                                            <button className="cart_btn" style={{background: 'red', cursor: 'not-allowed', float: 'right'}}>Complete Order</button>
                                        )
                                    }
                                    
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>   
                </div>
                <form onSubmit={onSubmitHandler} className={click ? 'toggle--form' : 'order--form'}>
                    <div className="form--input--wrapper">
                        <div className="form--input">
                            <label htmlFor="payable_amount">Total payable amount</label>
                            <input type="number" id="payable_amount" name="payable" value={total.toFixed(2)} disabled={true}/>
                        </div>
                        <div className="form--input">
                            <label htmlFor="name_amount">{error ? <span style={{color: 'red'}}>{error}</span> : 'Input paid amount'}</label>
                            <input type="number" id="name_amount" name="paid" value={paid} onChange={(e) => setPaid(e.target.value)} required={true} placeholder='Input paid amount'/>
                        </div>
                        <div className="form--input">
                            <label htmlFor="due_amount">Due amount</label>
                            <input type="text" id="due_amount" name="due" value={total.toFixed(2) - paid} required={false} disabled={true}/>
                        </div>
                    </div>
   
                    <div style={{width: '100%', textAlign: 'right'}}>
                        <button type="button" className="cart_btn continue__sale" style={{display: 'inline-block'}} onClick={() => continueSale()}>Continue Sale</button>
                        <button type="submit" className="cart_btn" style={{marginLeft: '20px'}}>Complete</button>
                    </div>
             
                </form>    
                            </>
                        )
                    }
    </>
}
const mapStateToProps = state => ({
    cartItems: state.CartReducer.cartItems,
    total_cart_items: state.CartReducer.total_cart_items,
    total: state.CartReducer.total,
    total_discount: state.CartReducer.total_discount,
    loading: state.CartReducer.loading,
    customer: state.CustomerReducer.customer
})
export default connect(mapStateToProps, {allCartItems, completeOrder, removeProduct})(CartView)