import React, {useEffect, useMemo} from 'react'
import {connect} from 'react-redux'
import ReactLoading from 'react-loading'
import { Link, useHistory } from 'react-router-dom'
import {getTodayCashSales} from '../../../../Services/Actions/SalesActions'


const TodayCashSales = ({
    total,
    loading,
    cashOrders,
    total_due,
    total_paid,
    getTodayCashSales
}) => {

    let date =  useMemo(() => {
        new Date()
    }, [])
        

    useEffect(() => {
        document.title = `Today's cash sales ( ${new Date().toDateString()} )`
    }, [date])

  

    useEffect(() => {
        getTodayCashSales()
    }, [getTodayCashSales])

    const history = useHistory()
    const goBack = () => {
        history.goBack()
    }
    const saleData = (orders) => {
        return orders.length !==0 ? orders.map((order, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{new Date(order.timestamp).toLocaleString()}</td>
                            <td>{order.order_id}</td>
                            <td>{order.order_status === "3" ? "Due" : "Paid"}</td>
                            <td>{order.paid_amount + order.due_amount}.00</td>
                            <td>{order.paid_amount ? order.paid_amount.toFixed(2) : 0.00}</td>
                            <td>{order.due_amount ? order.due_amount.toFixed(2) : 0.00}</td>
                            <td className="action">
                                <Link to={`/today's-cash-sale-items/${order.id}/${order.order_id}`} className="sale--btn btn--success">View</Link> 
                            </td>
                        </tr>
                    )) : <tr>
                        <td colSpan="11" style={{textAlign: 'center', color: 'red'}}>No data available</td>
                    </tr>
    }

    return  <>
            <div className="page-header">
                <h2>Today's cash sales / orders history<span> ( {new Date().toDateString()} ) </span></h2>
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
                                <th scope="col">Order ID</th>
                                <th scope="col">Status</th>
                                <th scope="col">Total</th>
                                <th scope="col">Paid</th>
                                <th scope="col">Due</th>
                                <th scope="col" className="action">
                                    <button className="employee--btn btn--info add--btn" title="Back" onClick={goBack}><i className="fas fa-backward"></i></button>     
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {saleData(cashOrders)}   
                        </tbody>
                        <tfoot>
                            <tr>
                                <th colSpan='4'>Total </th>
                                <th>{total && total.toFixed(2)}</th>
                                <th>{total_paid ? total_paid.toFixed(2) : 0.00}</th>
                                <th>{total_due ? total_due.toFixed(2) : 0.00}</th>
                                <th></th>
                            </tr>
                        </tfoot>
                    </table>
                )
            }

        </>
}
const mapStateToProps = state => ({
    loading: state.todayCashSales.loading,
    cashOrders: state.todayCashSales.cashOrders,
    total_paid: state.todayCashSales.total_paid,
    total_due: state.todayCashSales.total_due,
    total: state.todayCashSales.total,
})
export default connect(mapStateToProps, {getTodayCashSales})(TodayCashSales)