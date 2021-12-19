import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'
import './StockItemDetail.css'



 const StockItemDetail = ({match}) => {
    const id = match.params.id

    const [product, setProduct] = useState(null)


    useEffect(() => {
        axios({
            method: 'get',
            url: `stock/product-detail/${id}/`
        })
        .then(response => {
            setProduct(response.data)
        })
    }, [id])

    const history = useHistory()
    const goBack = () => {
        history.goBack()
    }

    return <>
                  <div className="page-header">
                      <h2>Product <span>{product &&  product.name }</span> detail info</h2>
                      <strong>{ new Date().toLocaleDateString()}</strong>
                  </div>
                {
                    product && <div className="product-detaill-container">
                                    <div className="product__content">
                                    <div className="product__image">
                                        <img src={product.p_image ? product.p_image : product.p_image_url} alt={product.name}/>
                                        <button onClick={goBack} className="action--btn back update">Back</button>
                                    </div>
                                    <div className="product__description">
                                            <table>
                                               <tbody>
                                               <tr>
                                                    <th>Invoice No</th>
                                                    <td>{product.invoice.invoice_no}</td>
                                                </tr>
                                                <tr>
                                                    <th>Imported By</th>
                                                    <td>{product.invoice.importer_name}</td>
                                                </tr>
                                                <tr>
                                                    <th>Imported date</th>
                                                    <td>{new Date(product.invoice.timestamp).toLocaleString()}</td>
                                                </tr>
                                                <tr>
                                                    <th>Product Name</th>
                                                    <td>{product.name} {" "} <strong>{product.product_color}</strong></td>
                                                </tr>
                                                <tr>
                                                    <th>Brand</th>
                                                    <td>{product.company.brand_name}</td>
                                                </tr>
                                                <tr>
                                                    <th>Category</th>
                                                    <td>{product.category.title}</td>
                                                </tr>
                                                <tr>
                                                    <th>Type</th>
                                                    <td>{product.p_type}</td>
                                                </tr>
                                                <tr>
                                                    <th>Size</th>
                                                    <td>{product.size}</td>
                                                </tr>
                                                <tr>
                                                    <th>GSM</th>
                                                    {product.gsm ?
                                                    <td>{product.gsm}</td> : <td>Null</td>
                                                    }
                                                    
                                                </tr>
                                                <tr>
                                                    <th>Panna</th>
                                                    {product.panna ?
                                                    <td>{product.panna}</td> : <td>Null</td>
                                                    }
                                                    
                                                </tr>
                                                <tr>
                                                    <th>Length Qty in Stock</th>
                                                    {product.len_qty ?
                                                    <td>{product.len_qty} {product.len_qty === 1 ? `${product.unit_tag}` : `${product.unit_tag}s`}</td> : <td>0</td>
                                                    }
                                                    
                                                </tr>
                                                <tr>
                                                    <th>Quantity in Stock</th>
                                                    {product.quantity ?
                                                    <td>{product.quantity} {product.quantity === 1 ? `${product.unit_tag}` : `${product.unit_tag}s`}</td> : <td>0</td>
                                                    }
                                                    
                                                </tr>
                                                <tr>
                                                    <th>Import Price</th>
                                                    <td>{product.price.toFixed(2)} Taka</td> 
                                                </tr>
                                                <tr>
                                                    <th>Min sale Price</th>
                                                    <td>{product.min_sale_price.toFixed(2)} Taka</td> 
                                                </tr>
                                               </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                }
    </>

}

const mapStateToProps = state => ({
    access: state.AuthReducer.access
})
export default connect(mapStateToProps)(StockItemDetail)