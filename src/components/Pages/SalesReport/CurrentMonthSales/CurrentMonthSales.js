import React, {useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import {connect} from 'react-redux'
import ReactLoading from 'react-loading'
import {saleInMonth} from '../../../../Services/Actions/SalesActions'
import './CurrentMonthSales.css'



 function CurrentMonthSales({
     match,
     access,
     loading,
     saleInMonth,
     monthlySales,
     monthly_total_sold,
     monthly_total_profit,
     monthly_total_sold_qty}) {
         
    const year = match.params.year
    const month = match.params.month

    useEffect(() => {
        document.title = `Sales history of ${month} ${year}`
    }, [year, month])

    const history = useHistory()
    const goBack = () => {
        history.goBack()
    }
    useEffect(() => {
        saleInMonth(month, year, access)
    }, [saleInMonth, month, year, access])


    const saleData = (sales) => {
        return sales.length !==0 ? sales.map((sale, index) => (
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{new Date(sale.timestamp).toLocaleString()}</td>
                            <td>{sale.product.quantity ? sale.product.quantity : sale.product.len_qty}{" "}{sale.quantity === 1 ? `${sale.unit_tag}` : `${sale.unit_tag}s`}</td>
                            <td>{sale.product.name}</td>
                            <td>{sale.quantity}{" "}{sale.quantity === 1 ? `${sale.unit_tag}` : `${sale.unit_tag}s`}</td>
                            <td>{sale.sub_total.toFixed(2)}</td>
                            <td>{sale.profit.toFixed(2)}</td>
                            <td>{sale.customer.name}</td>
                            <td>{sale.customer.phone ? `${sale.customer.phone}` : null}</td>
                            <td>{sale.sold_by ? sale.sold_by.username : "None"}</td>
                            <td className="action">
                                <button className="sale--btn btn--success "><i className="fas fa-edit"></i></button> 
                                <button className="sale--btn btn--warning delete--btn"><i className="fas fa-trash"></i></button> 
                            </td>
                        </tr>
                    )) : <tr>
                        <td colSpan="11" style={{textAlign: 'center', color: 'red'}}>No data available</td>
                    </tr>
    }

    return (
        <>
            <div className="page-header">
                <h2>Sales history of <span>{month} {year}</span></h2>
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
                                <th scope="col" className="action"><button className="employee--btn btn--info add--btn" title="Back to all sales report !" onClick={() => goBack()}><i className="fas fa-backward"></i></button></th>
                            </tr>
                        </thead>
                        <tbody>
                            {saleData(monthlySales)}   
                        </tbody>
                        <tfoot>
                            <tr>
                                <th colSpan='4'>Total </th>
                                <th>{monthly_total_sold_qty ? monthly_total_sold_qty : 0}</th>
                                <th>{monthly_total_sold ? monthly_total_sold.toFixed(2) : 0}</th>
                                <th>{monthly_total_profit ? monthly_total_profit.toFixed(2) : 0}</th>
                                <th colSpan="4"></th>
                            </tr>
                        </tfoot>
                    </table>
                )
            }
            
        </>
    )
}
const mapStateToProps = state => ({
    access: state.AuthReducer.access,
    monthlySales: state.monthlyTotalSale.monthlySales,
    monthly_total_profit: state.monthlyTotalSale.monthly_total_profit,
    monthly_total_sold: state.monthlyTotalSale.monthly_total_sold,
    monthly_total_sold_qty: state.monthlyTotalSale.monthly_total_sold_qty,
    loading: state.monthlyTotalSale.loading
})
export default connect(mapStateToProps, {saleInMonth})(CurrentMonthSales)