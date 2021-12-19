import React, {useEffect, useMemo} from 'react'
import {connect} from 'react-redux'
import ReactLoading from 'react-loading'
import { useHistory } from 'react-router-dom'
import { getTodayDueSales } from '../../../../Services/Actions/SalesActions'




const TodayDueSales = ({
    total,
    loading,
    dueOrders,
    total_due,
    total_paid,
    getTodayDueSales
})=> {
    
    let date =  useMemo(() => {
        new Date()
    }, [])
        
    useEffect(() => {
        document.title = `Today's due sales ( ${new Date().toDateString()} )`
    }, [date])

    const history = useHistory()

    const goToTodayDueSaleItems = (id, order_id) => {
        history.push(`/today's-due-sale-items/${id}/${order_id}`)
    }

    useEffect(() => {
        getTodayDueSales()
    }, [getTodayDueSales])


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
                            <td>{order.paid_amount + order.due_amount}</td>
                            <td>{order.paid_amount}</td>
                            <td>{order.due_amount}</td>
                            <td className="action">
                                <button onClick={() => goToTodayDueSaleItems(order.id, order.order_id)} className="sale--btn btn--success">View</button> 
                            </td>
                        </tr>
                    )) : <tr>
                        <td colSpan="11" style={{textAlign: 'center', color: 'red'}}>No data available</td>
                    </tr>
    }

    return         <>
                    <div className="page-header">
                        <h2>Today's due sales / orders history<span> ( {new Date().toDateString()} ) </span></h2>
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
                                        <th scope="col" className="action"><button className="employee--btn btn--info add--btn" title="Back" onClick={goBack}><i className="fas fa-backward"></i></button></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {saleData(dueOrders)}   
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th colSpan='4'>Total </th>
                                        <th>{total.toFixed(2)}</th>
                                        <th>{total_paid.toFixed(2)}</th>
                                        <th>{total_due.toFixed(2)}</th>
                                        <th></th>
                                    </tr>
                                </tfoot>
                            </table>
                        )
                    }
    
</>
}
const mapStateToProps = state => ({
    loading: state.todayDueSales.loading,
    dueOrders: state.todayDueSales.dueOrders,
    total_paid: state.todayDueSales.total_paid,
    total_due: state.todayDueSales.total_due,
    total: state.todayDueSales.total,
})
export default connect(mapStateToProps, {getTodayDueSales})(TodayDueSales)