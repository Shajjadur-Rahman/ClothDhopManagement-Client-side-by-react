import React, {Fragment, useEffect, useState, useMemo} from 'react'
import { currentYearSales } from '../../../../Services/Actions/SalesActions';
import { CurrentYearSale } from './CurrentYearSale';
import YearPicker from 'react-single-year-picker'  /* https://github.com/SystangoTechnologies/react-single-year-picker#readme */
import { useHistory } from 'react-router-dom';
import ReactLoading from 'react-loading'
import {connect} from 'react-redux'





function CurrentYearSales({
    year,
    sales,
    loading,
    total_profit,
    total_sold_qty,
    currentYearSales,
}) {


    let date = useMemo(() => new Date(), [])

    useEffect(() => {
        document.title = 'Sales report'
    }, [])

    const history = useHistory()
    const [yearSelected, setYear] = useState(2021)

    useEffect(() => {
        currentYearSales(yearSelected)
    }, [currentYearSales, yearSelected])


    const goToStock = () => {
        history.push('/stock')
    }

    return (
        <>
            <div className="page-header">
                <h2>Sales report in <span>{date.getFullYear()}</span></h2>
                <strong>{date.toLocaleDateString()}</strong>
            </div>
            {
                loading ? (
                    <ReactLoading style={{ height: '100px', width: '80px', margin: '80px auto', display: 'block'}} type='spin'/>
                ) : (
                    <>
                    <div className="search__wapper">
                        <div className="search__div">  
                            <YearPicker
                            yearArray={['2019', '2020']}
                            value={yearSelected}
                            onSelect={(e) => setYear(e)}
                            hideInput={false}
                            minRange={2001}
                            maxRange={2100}
                            />
                        </div>
                    </div>

                    <table className="data-table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">{year}</th>
                            <th scope="col">Sold QTY</th>
                            <th scope="col">Total P Rate</th>
                            <th scope="col">Discount</th>
                            <th scope="col">Sub-Total</th>
                            <th scope="col">Profit</th>
                            <th scope="col"><button className="employee--btn btn--info add--btn" onClick={goToStock}>Stock</button></th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                    sales.map((sale, index) => (
                        <CurrentYearSale sale={sale} key={index} index={index}/>
                    ))
                    }
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colSpan='2'>Total expense in this month</th>
                            <th>{total_sold_qty.toFixed(2)}</th>
                            <th>30000.00</th>
                            <th></th>
                            <th></th>
                            <th>{total_profit.toFixed(2)}</th>
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
                </>
                )
            }
        </>
    )
}

const mapStateToProps = state => ({
    sales: state.YearlySales.sales,
    total_profit: state.YearlySales.total_profit,
    total_sold_qty: state.YearlySales.total_sold_qty,
    loading: state.YearlySales.loading,
    year: state.YearlySales.year
})
export default connect(mapStateToProps, {currentYearSales})(CurrentYearSales)