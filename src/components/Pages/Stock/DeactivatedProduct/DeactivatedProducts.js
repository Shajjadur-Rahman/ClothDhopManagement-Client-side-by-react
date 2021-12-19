import React, {useEffect} from 'react'
import ReactLoading from 'react-loading'
import {connect} from 'react-redux'
import { useHistory } from 'react-router-dom';
import DeactivatedProduct from './DeactivatedProduct'
import { getDeactivateProducts, activateProduct } from './../../../../Services/Actions/StockActions';


const DeactivatedProducts = ({
  loading,
  products,
  activateProduct,
  getDeactivateProducts
}) => {

  useEffect(() => {
    document.title = "Deactivate products"
  }, [])

  const history = useHistory()

  const goStock = () => {
    history.push('/stock')
  }
  useEffect(() => {
    getDeactivateProducts()
  }, [getDeactivateProducts])
  

    return (
        <>
            <div className="page-header">
                      <h2>Deactivated product list</h2>
                      <strong>{ new Date().toLocaleDateString()}</strong>
                  </div>
                  {loading ? (
                    <ReactLoading style={{ height: '100px', width: '80px', margin: '80px auto', display: 'block'}} type='spin'/>
                  ) : (
                      <table className="data-table">
                        <thead>
                          <tr>
                            <th scope="col">Product ID</th>
                            <th scope="col">Product</th>
                            <th scope="col">Category</th>
                            <th scope="col">Brand</th>
                            <th scope="col">In Stock Qty</th>
                            <th scope="col">Unit</th>
                            <th scope="col">Supplier</th>
                            <th scope="col">Product Image</th>
                            <th scope="col"><button className="action--btn btn--info" onClick={() => goStock()}>Stock</button></th>
                          </tr>
                        </thead>
                        <tbody>
                          
                        {
                          
                          products.length !== 0 ? products.map(product => (
                            <DeactivatedProduct 
                            key={product.id} 
                            product={product} 
                            loading={loading} 
                            activateProduct={activateProduct}/>
                          )) : (
                            <tr>
                                <td colSpan="8" style={{color: 'red'}}>No data available !</td>
                            </tr>
                          )
                        }
                        </tbody>
                        <tfoot>
                          <tr>
                            <th></th>
                            <th colSpan="3">Total Qty</th>
                            <th>1000</th>
                            <th colSpan="2">Total Price</th>
                            <th colSpan="5">12000000.00</th>
                          </tr>
                          </tfoot>
                      </table>
                  )}
        </>
    )
}
const mapStateToProps = state => ({
  loading: state.deactivateProducts.loading,
  products: state.deactivateProducts.products
})
export default connect(mapStateToProps, {getDeactivateProducts, activateProduct})(DeactivatedProducts)