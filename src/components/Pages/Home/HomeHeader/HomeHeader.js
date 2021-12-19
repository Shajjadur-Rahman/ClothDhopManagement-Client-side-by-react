import React, {useEffect} from 'react'
import CardItem from './CardItem/CardItem'
import {connect} from 'react-redux'
import {getTotalOrder} from '../../../../Services/Actions/HomeActions'
import ReactLoading from 'react-loading'
import './HomeHeader.css'

const HomeHeader = ({
    loading,
    totalOrder,
    getTotalOrder
}) => {
    useEffect(() => {
        document.title = "Home"
    }, [])
    const monthName = [
        "January", "February", "March",
        "April", "May", "June",
        "July", "August", "September",
        "October", "November", "December"
    ];
    useEffect(() => {
        getTotalOrder()
    }, [getTotalOrder])
    
    let date = new Date()
    let currentMonthSales = `Total sales in ${monthName[date.getMonth()]}`

    return<div className='dashboard-header-area'>
            {
                loading ?  <ReactLoading style={{ height: '50px', width: '40px', margin: '80px auto', display: 'block'}} type='spin'/> : <CardItem link="/sales/today" className='item1' heading="Today's total sales" amount={totalOrder.today_total_sale ? totalOrder.today_total_sale : 0}/>
            }
                        {
                loading ?  <ReactLoading style={{ height: '50px', width: '40px', margin: '80px auto', display: 'block'}} type='spin'/>  : <CardItem link="/sales/today's-due-sales" className='item2' heading="Today's due sales" amount={totalOrder.today_due_sale ? totalOrder.today_due_sale : 0}/>
            }
                        {
                loading ?  <ReactLoading style={{ height: '50px', width: '40px', margin: '80px auto', display: 'block'}} type='spin'/>  : <CardItem link='/sales/cash-sales' className='item3' heading="Today's cash sales" amount={totalOrder.today_cash_sale ? totalOrder.today_cash_sale : 0}/>
            }
                        {
                loading ?  <ReactLoading style={{ height: '50px', width: '40px', margin: '80px auto', display: 'block'}} type='spin'/>  : <CardItem link={`/sales/${monthName[date.getMonth()]}/${date.getFullYear()}`} className='item3' heading={currentMonthSales} amount={totalOrder.current_month_sale ? totalOrder.current_month_sale : 0}/>
            }
            
            
            
        </div>  
}
const mapStateToProps = state => ({
    loading: state.homeReducer.loading,
    totalOrder: state.homeReducer.totalOrder,
})
export default connect(mapStateToProps, {getTotalOrder})(HomeHeader)