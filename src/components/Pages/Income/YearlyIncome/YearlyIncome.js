import React, {useEffect, useState, useMemo} from 'react'
import YearPicker from 'react-single-year-picker'  /* https://github.com/SystangoTechnologies/react-single-year-picker#readme */
import {getYearlyIncome} from '../../../../Services/Actions/IncomeActions'
import {useHistory, Link} from 'react-router-dom'
import ReactLoading from 'react-loading'
import {connect} from 'react-redux'
import './YearlyIncome.css'




const YearlyIncome = ({
    year,
    loading,
    incomes,
    getYearlyIncome,
    net_profit_or_loss,
    total_profit_in_year,
    total_expense_in_year,
}) => {
    let date = useMemo(() => new Date(), [])

    useEffect(() => {
        document.title = `Income summary in ${date.getFullYear()}`
    }, [date])
    const [yearSelected, setYear] = useState()
    const history = useHistory()
    const refreshPage = () => {
        history.push("/income/current-year-income")
    }
    useEffect(() => {
        getYearlyIncome(yearSelected)
    }, [getYearlyIncome, yearSelected])

    return (
        <>
            <div className="page-header">
                <h2>Income Summary in <span>{year}</span></h2>
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
                                    <th scope="col">Profit</th>
                                    <th scope="col">Expense</th>
                                    <th scope="col">Net profit / loss</th>
                                    <th scope="col"><button className="employee--btn btn--info add--btn" onClick={() => refreshPage()}>Refresh</button></th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                incomes.length !== 0 ? incomes.map((income, index) => (
                                    <tr key={index} style={{background: income.profit.toFixed(2) <= 0 ? 'rgb(39, 5, 39)' : null}}>
                                        <td style={{color: income.profit.toFixed(2) <= 0 ? '#fff': null, padding: '20px'}}>{index + 1}</td>
                                        <td style={{color: income.profit.toFixed(2) <= 0 ? '#fff': null, padding: '20px'}}>{income.month}</td>
                                        <td style={{padding: '20px'}}><Link style={{color: income.profit.toFixed(2) <= 0 ? '#fff': null, textDecoration: 'underline'}}>{income.profit.toFixed(2)}</Link></td>
                                        <td style={{color: income.profit.toFixed(2) <= 0 ? '#fff': null, padding: '20px'}}><Link style={{color: income.profit.toFixed(2) <= 0 ? '#fff': null, textDecoration: 'underline'}}>{income.expense.toFixed(2)}</Link></td>
                                        <td style={{color: income.profit.toFixed(2) <= 0 ? '#fff': null}}>{income.net_loss_profit.toFixed(2)}</td>
                                        <td className="action">
                                        {income.net_loss_profit ? <span className={income.net_loss_profit.toFixed(2) < 0 ? "loss_profit_label loss" : "loss_profit_label"}>{income.net_loss_profit.toFixed(2) < 0 ? "Loss" : "Profit"}</span> : '-----'}
                                        </td>
                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan="3" style={{color: 'red', textAlign: 'center'}}>No data found !</td>
                                    </tr>
                                )
                            }
                            
                            <tr>
                                <th colSpan='2'>Total income in this Year ( {year} )</th>
                                <th>{total_profit_in_year ? total_profit_in_year.toFixed(2) : '0.00'}</th>
                                <th>{total_expense_in_year ? total_expense_in_year.toFixed(2) : '0.00'}</th>
                                <th>{net_profit_or_loss ? net_profit_or_loss.toFixed(2) : '0.00'}</th>
                                <th></th>
                            </tr>
                            </tbody>
                        </table>

                    </>
                )
            }
        </>
    )
}
const mapStateToProps = state => ({
    loading: state.yearlyIncome.loading,
    incomes: state.yearlyIncome.incomes,
    total_profit_in_year: state.yearlyIncome.total_profit_in_year,
    total_expense_in_year: state.yearlyIncome.total_expense_in_year,
    net_profit_or_loss: state.yearlyIncome.net_profit_or_loss,
    year: state.yearlyIncome.year
})
export default connect(mapStateToProps, {getYearlyIncome})(YearlyIncome)