import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './SaleProduct.css'


const SaleProduct = ({ 
    product, 
    cart, 
    getYard,
    saleHide,
    customer,
    setCusId,
    saleError,
    inputHandler,
    submitHandler}) => {

    const [searchCustomer, setSearchCustomer] = useState(null)    

    useEffect(() => {
        const loadCustomers = async () => {
            await axios({
                method: 'get',
                url: `order/search-customer/?phone=${cart.phone}`
            })
            .then(reponse => {
                setSearchCustomer(reponse.data) 
                setCusId(reponse.data.id)
            })
            .catch(error => {
                console.log(error)
            })
        }
        loadCustomers()
    }, [cart.phone, setCusId])



    return (
        <div className="custom-form">
            <div className="sale-product-page-header">
            <div className="product__image">
                <img src={product.p_image ? product.p_image : product.p_image_url} alt={product.product_name} />
            </div>
            <div className="product-content-header">
                <h2>Poduct : {product.product_name}</h2>
                <h3>Min sale price : <span>{parseFloat(product.min_sale_price).toFixed(2)}</span> Taka {product.len_qty > 0 && "per yard/goj"}</h3>
        {
            product.quantity ? (
                <h3>In Stock qty : {product.quantity} {" "} {product.quantity === 1 ? `${product.unit_tag}` : `${product.unit_tag}s`}</h3>
            ) : (
                <h3>In Stock qty : {product.len_qty} {" "} {product.len_qty === 1 ? `${product.unit_tag}` : `${product.unit_tag}s`}</h3>
            )
        }
                <h3>Ready for sale</h3>
                <strong>{ new Date().toLocaleDateString()}</strong>
            </div>
            </div>
            <form onSubmit={(event) => submitHandler(event)} encType='multipart/form-data'>
                <div className="form--input--wrapper">
                    <div className="form--input">
                        <label htmlFor="phone">Customer Phone</label>
                        <input type="number" id="phone" name="phone" value={customer ? customer.phone : cart.phone} onChange={inputHandler} required={false} placeholder='Input customer phone'/>
                    </div>
                    <div className="form--input">
                        <label htmlFor="name">Customer Name</label>
                        <input type="text" id="name" name="name" value={customer ? customer.name : searchCustomer ? searchCustomer.name : cart.name} onChange={inputHandler} required={true} placeholder='Input customer name'/>
                    </div>
                </div>

                <div className="form--input--wrapper">
                    <div className="form--input">
                        <label htmlFor="price">{product.len_qty ? "Input Sale Price per Yard/Goj" : "Input Sale Price"} </label>
                        <input type="number" id="price" name="price" value={cart.price || ''} onChange={inputHandler} required={true} placeholder='Input product sale price'/>
                    </div>
                    {
                        product.len_qty ? (
                    
                            <div className="form--input">
                                <label htmlFor="len_qty">{saleError ? <span style={{color: 'red'}}>{saleError}</span> : "Input Fabric Length Quanity"} </label>
                                <div className="input__length">
                                    <input type="number" id="goj" name="goj" value={cart.goj || ''} onChange={inputHandler} required={true} placeholder='Yard/Goj'/>
                                    <input type="number" id="gira" name="gira" value={cart.gira || ''} onChange={inputHandler} required={false} placeholder='Gira'/>
                                    <input type="number" id="len_qty" name="len_qty" value={getYard() || ''}  required={true} disabled={true}/>
                                </div>
                            </div>
                        ) : (
                            <div className="form--input">
                                <label htmlFor="quantity">{saleError ? <span style={{color: 'red'}}>{saleError}</span> : "Input Product Quanity"} </label>
                                <input type="number" id="quantity" name="quantity" value={cart.quantity || ''} onChange={inputHandler} required={true} placeholder='Input product quantity'/>
                            </div>
                        )
                    }
                </div>
                <div className="form--input--wrapper">
                     <div className="form--input">
                        <label htmlFor="discount">Discount ( Optional )</label>
                        <input type="number" id="discount" name="discount" value={cart.discount} onChange={inputHandler} required={false} placeholder='0.00'/>
                    </div>
                    {
                        product.len_qty ? (
                            <div className="form--input">
                                <label htmlFor="payable_price">Total Payable Price</label>
                                <input type="number" id="payable_price"  value={(cart.price * getYard() - cart.discount ) || 0} disabled={true} placeholder='Input product sale price'/>
                            </div>
                        ) : (
                        <div className="form--input">
                            <label htmlFor="payable_price">Total Payable Price</label>
                            <input type="number" id="payable_price"  value={(cart.price * cart.quantity - cart.discount ).toFixed(2) || 0} disabled={true} placeholder='Input product sale price'/>
                        </div>
                        )
                    }
                    
                </div>

                <div className="form--footer">
                    <button type="button" className="back" onClick={() => saleHide()}>Back</button>
                    <button type="submit" className="submit">Sale</button>
                </div>
            </form>
        </div>
    )
}

export default SaleProduct