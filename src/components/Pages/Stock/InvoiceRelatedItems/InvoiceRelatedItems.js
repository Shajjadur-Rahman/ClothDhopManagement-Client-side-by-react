import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {useHistory} from 'react-router-dom'
import ReactLoading from 'react-loading'
import InvoiceRelatedItem from './InvoiceRelatedItem'
import { getInvoiceProducts } from './../../../../Services/Actions/InvoiceProductActions';


const InvoiceRelatedItems = ({
    match,
    loading,
    total_item,
    total_import,
    import_expense,
    invoiceProducts,
    getInvoiceProducts 
}) => {

    const {invoice_no, invoice_id} = match.params
    const history = useHistory()
    const goBack = () => {
      history.goBack()
    }
    
    useEffect(() => {
        getInvoiceProducts(invoice_id)
    }, [getInvoiceProducts, invoice_id])

    return (
        <>
           <div className="page-header">
                <h2><span>{invoice_no} </span> related all Products</h2>
                <h2>Total Imported : <span>{total_import.toFixed(2)}</span></h2>
                <h2>Import Expenses : {" "}<span>{import_expense.toFixed(2)}</span></h2>
                <h2>Total Imported  : {" "} <span>{total_item} {total_item > 1 ? "items" : "item"}</span></h2>
                <strong>{ new Date().toLocaleDateString()}</strong>
            </div>
            {loading ? (
              <ReactLoading style={{ height: '100px', width: '80px', margin: '80px auto', display: 'block'}} type='spin'/>
            ) : (
              <table className="data-table">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Product</th>
                    <th scope="col">Price</th>
                    <th scope="col">Size</th>
                    <th scope="col">Type</th>
                    <th scope="col">Color</th>
                    <th scope="col">Supplier</th>
                    <th scope="col">Category</th>
                    <th scope="col">GSM</th>
                    <th scope="col">Width / Panna</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Unit</th>
                    <th scope="col">

                        <button className="employee--btn btn--info" onClick={goBack}><i className="fas fa-backward"></i></button>
                      
                      </th>
                  </tr>
                </thead>
                <tbody>
                
                {
                  invoiceProducts && invoiceProducts.map((invoiceProduct, index) => (
                    <InvoiceRelatedItem invoiceProduct={invoiceProduct} key={invoiceProduct.id} index={index}/>
                  ))
                }
                  <tr>
                    <th colSpan="3">Total Imported  : {total_import.toFixed(2)}</th>
                    <th colSpan="4">Import Expenses : {" "}{import_expense.toFixed(2)}</th>
                    <th colSpan="7">Total Imported  : {" "} {total_item} {total_item > 1 ? "items" : "item"}</th>
                  </tr>
                </tbody>
              </table> 
            )} 
        </>
    )
}
const mapStateToProps = state => ({
    loading: state.invoiceRelatedProduct.loading,
    invoiceProducts: state.invoiceRelatedProduct.invoiceProducts,
    total_import: state.invoiceRelatedProduct.total_import,
    total_item: state.invoiceRelatedProduct.total_item,
    import_expense: state.invoiceRelatedProduct.import_expense,
})
export  default connect(mapStateToProps, {getInvoiceProducts})(InvoiceRelatedItems)