import React, {useEffect, useMemo} from 'react'
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars'
import {getMonthlyExpense, addExpense, updateExpense} from '../../../../Services/Actions/ExpenseActions'
import vlidationInfo from '../AddExpense/ExpenseValidation'
import { Modal } from './../../../../UI/Modal/Modal'
import useForm from '../AddExpense/UseExpenseForm'
import AddExpense from '../AddExpense/AddExpense'
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import ReactLoading from 'react-loading'
import Expense from './Expense'
import '../Expenses.css'

function ExpensesInMonth({
    match,
    loading,
    expenses,
    addExpense,
    updateExpense,
    total_expense,
    getMonthlyExpense
}) {

    const {onChangeHandler, onSubmitHandler, expense, searchHandler, searchValue,  errors, edit, editExpense, show, modalShow, modalHide} = useForm(vlidationInfo, addExpense, updateExpense)
    const {month, year} = match.params
    let date = useMemo(() => new Date(), [])

    const history = useHistory()
    const goBack = () => {
        history.goBack()
    }

    useEffect(() =>{
        document.title = `Expenses in ${month} ${year}`
    }, [month, year])



    useEffect(() => {
        getMonthlyExpense(month, year, searchValue)
    }, [getMonthlyExpense, month, year, searchValue])


    

    return (
        <>

            <Modal show={show}>
                <AddExpense 
                edit={edit} 
                errors={errors}
                expense={expense} 
                modalHide={modalHide} 
                onSubmitHandler={onSubmitHandler}
                onChangeHandler={onChangeHandler} />
            </Modal>

            <div className="page-header">
                <h2>Expenses Summary in <span>{month} {""} {year}</span></h2>
                <strong>{date.toLocaleDateString()}</strong>
            </div>

            {
                loading ? (
                    <ReactLoading style={{ height: '100px', width: '80px', margin: '80px auto', display: 'block'}} type='spin'/>
                ) : (
                    <>
                    <div className="search__wapper">
                        <div className="search__div">  
                            <DatePickerComponent name="timestamp" value={searchValue.timestamp} style={{width: '280px'}} onChange={searchHandler} placeholder="Search expense by date"/>
                        </div>
                    </div>
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Expense description / Type</th>
                                <th scope="col">Expense amount</th>
                                <th scope="col">Entry by</th>
                                <th scope="col">Date</th>
                                <th scope="col" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    { expenses.length !== 0 && <button className="employee--btn btn--info add--btn" onClick={modalShow}>Add</button>}
                                    <button className="employee--btn btn--info add--btn" onClick={() => goBack()}><i className="fas fa-backward"></i></button>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            expenses.length !== 0 ? expenses.map((expense, index) => <Expense key={index} expense={expense} index={index} editExpense={editExpense}/>) : 
                                <tr>
                                    <td colSpan="6" style={{color: 'red', textAlign: 'center'}}>No data found !</td>
                                </tr>
                            
                        }
                        <tr>
                            <th colSpan='2'>Total</th>
                            <th>{total_expense ? total_expense.toFixed(2) : '0.00'}</th>
                            <th colSpan='4'></th>
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
    loading: state.monthlyExpenses.loading,
    expenses: state.monthlyExpenses.expenses,
    total_expense: state.monthlyExpenses.total_expense
})
export default connect(mapStateToProps, {getMonthlyExpense, addExpense, updateExpense})(ExpensesInMonth)