import React, {useEffect, useState, useMemo, memo} from 'react'
import {getYearlyExpenseSummary} from '../../../../Services/Actions/ExpenseActions'
import YearPicker from 'react-single-year-picker'  /* https://github.com/SystangoTechnologies/react-single-year-picker#readme */
import {useHistory} from 'react-router-dom'
import ReactLoading from 'react-loading'
import {connect} from 'react-redux'
import '../Expenses.css'


function ExpensesInYear({
    year,
    loading,
    yearExpenses,
    total_expense_in_year,
    getYearlyExpenseSummary,
}) {

    let date = useMemo(() => new Date(), [])
    const history = useHistory()

    const monthlyExpense = (month, year) => {
        history.push(`/expenses/expenses/${month}/${year}`)
    }

    useEffect(() =>{
        document.title = `Expenses in ${date.getFullYear()}`
    }, [date])

    const [yearSelected, setYear] = useState()

      useEffect(() => {
        getYearlyExpenseSummary(yearSelected)
      }, [getYearlyExpenseSummary, yearSelected])

    return (
        <>
            <div className="page-header">
                <h2>Expenses Summary in <span>{year}</span></h2>
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
                                    <th scope="col">Sub total</th>
                                    <th scope="col"><button className="employee--btn btn--info add--btn">Add</button></th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                yearExpenses.length !== 0 ? yearExpenses.map((expense, index) => (
                                    <tr key={index} style={{background: expense.monthly_expense.toFixed(2) <= 0 ? 'rgb(39, 5, 39)' : null}}>
                                        <td style={{color: expense.monthly_expense.toFixed(2) <= 0 ? '#fff': null}}>{index + 1}</td>
                                        <td style={{color: expense.monthly_expense.toFixed(2) <= 0 ? '#fff': null}}>{expense.month}</td>
                                        <td style={{color: expense.monthly_expense.toFixed(2)<= 0 ? '#fff': null}}>{expense.monthly_expense.toFixed(2)}</td>
                                        <td className="action">
                                            {
                                                expense.monthly_expense.toFixed(2) <= 0 ? (
                                                  <button className="action--btn btn--success" style={{cursor: 'not-allowed'}}>View</button>
                                                ) : (
                                                  <button className="action--btn btn--success" onClick={() => monthlyExpense(expense.month, expense.year)}>View</button>
                                                )
                                            }
                                            
                                        </td>
                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan="3" style={{color: 'red', textAlign: 'center'}}>No data found !</td>
                                    </tr>
                                )
                            }
                            
                            <tr>
                                <th colSpan='2'>Total expense in this Year ( {year} )</th>
                                <th>{total_expense_in_year ? total_expense_in_year.toFixed(2) : '0.00'}</th>
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
    loading: state.yearlyExpense.loading,
    yearExpenses: state.yearlyExpense.yearExpenses,
    total_expense_in_year: state.yearlyExpense.total_expense_in_year,
    year: state.yearlyExpense.year,
})

export default connect(mapStateToProps, {getYearlyExpenseSummary})(memo(ExpensesInYear))