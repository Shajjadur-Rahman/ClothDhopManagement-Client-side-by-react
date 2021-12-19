import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import { useHistory } from 'react-router-dom'
import ReactLoading from 'react-loading'
import {getTodayCashSaleItems} from '../../../../Services/Actions/SalesActions'


const TodayCashOrderItems = ({
    match,
    cashItems,
    loading,
    total_qty,
    due_amount,
    paid_amount,
    total_sales,
    total_profit,
    getTodayCashSaleItems
}) => {
    
    useEffect(() => {
        document.title = "Today's cash sales items"
    }, [])
    
    const {id, order_id} = match.params
    const history = useHistory()

    useEffect(() => {
        getTodayCashSaleItems(id)
    }, [getTodayCashSaleItems, id])

    const goBack = () => {
        history.goBack()
    }


    console.log("cashItems +++ cashItems", cashItems)

    const saleData = (items) => {
        return items && items.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{new Date(item.timestamp).toLocaleString()}</td>
                            <td>{item.product.quantity ? item.product.quantity : item.product.len_qty}{" "}{item.quantity === 1 ? `${item.unit_tag}` : `${item.unit_tag}s`}</td>
                            <td>{item.product && item.product.name}</td>
                            <td>{item.quantity}{" "}{item.quantity === 1 ? `${item.unit_tag}` : `${item.unit_tag}s`}</td>
                            <td>{item.sub_total.toFixed(2)}</td>
                            <td>{item.profit.toFixed(2)}</td>
                            <td>{item.customer.name}</td>
                            <td>{item.customer.phone ? `+88${item.customer.phone}` : null}</td>
                            <td>{item.sold_by ? item.sold_by.username : "None"}</td>
                            <td className="action">
                               
                            </td>
                        </tr>
                    )) 
    }

    const total_amount = due_amount + paid_amount
    return <>
            <div className="page-header">
                <h2>Order related products</h2>
                <h3>Order ID<span> ( {order_id} ) </span></h3>
                <h3>Total <span>{total_amount.toFixed(2)}</span></h3>
                <h3>Due remaining <span>  {due_amount.toFixed(2)}  </span></h3>
                <h3>Paid <span>  {paid_amount.toFixed(2)}  </span></h3>

                <strong>{new Date().toLocaleDateString()}</strong>
            </div>
            {
                loading ? (
                    <ReactLoading style={{ height: '100px', width: '80px', margin: '80px auto', display: 'block'}} type='spin'/>
                ) : (
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Date</th>
                                <th scope="col">SKU / Store Qty</th>
                                <th scope="col">Product</th>
                                <th scope="col">Sold</th>
                                <th scope="col">Price</th>
                                <th scope="col">Profit</th>
                                <th scope="col">Customer</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Sold By</th>
                                <th scope="col" className="action"><button className="employee--btn btn--info add--btn" title="Back to all sales report !" onClick={goBack}><i className="fas fa-backward"></i></button></th>
                            </tr>
                        </thead>
                        <tbody>
                            {saleData(cashItems)}   
                        </tbody>
                        <tfoot>
                            <tr>
                                <th colSpan='4'>Total</th>
                                <th>{total_qty.toFixed(2)}</th>
                                <th>{total_sales.toFixed(2)}</th>
                                <th>{total_profit.toFixed(2)}</th>
                                <th colSpan="4"></th>
                            </tr>
                        </tfoot>
                    </table>
                )
            }

</>
}
const mapStateToProps = state => ({
    loading: state.cashSaleItems.loading,
    cashItems: state.cashSaleItems.cashItems,
    total_profit: state.cashSaleItems.total_profit,
    total_sales: state.cashSaleItems.total_sales,
    total_qty: state.cashSaleItems.total_qty,
    paid_amount: state.cashSaleItems.paid_amount,
    due_amount: state.cashSaleItems.due_amount,
})
export default connect(mapStateToProps, {getTodayCashSaleItems})(TodayCashOrderItems)