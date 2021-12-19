import React, {useEffect, useMemo} from 'react'
import Expense from './Expense'
import {connect} from 'react-redux'
import vlidationInfo from '../AddExpense/ExpenseValidation'
import { Modal } from './../../../../UI/Modal/Modal'
import useForm from '../AddExpense/UseExpenseForm'
import AddExpense from '../AddExpense/AddExpense'
import ReactLoading from 'react-loading'
import {getTodayExpenses, addExpense, updateExpense} from '../../../../Services/Actions/ExpenseActions'
import '../Expenses.css'

function TodayExpenses({
    loading,
    expenses,
    addExpense,
    updateExpense,
    total_expense,
    getTodayExpenses
}) {

    const {onChangeHandler, onSubmitHandler, expense, errors, edit, editExpense, show, modalShow, modalHide} = useForm(vlidationInfo, addExpense, updateExpense)


    let date = useMemo(() => new Date(), [])

    useEffect(() =>{
        document.title = `Today's expenses ( ${date} )`
    }, [date])

    useEffect(() => {
        getTodayExpenses()
    }, [getTodayExpenses])

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
                <h2>Today's Expenses Summary </h2>
                <strong>{date.toLocaleDateString()}</strong>
            </div>

            {
                loading ? (
                    <ReactLoading style={{ height: '100px', width: '80px', margin: '80px auto', display: 'block'}} type='spin'/>
                ) : (
                    <>
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Expense description / Type</th>
                                <th scope="col">Expense amount</th>
                                <th scope="col">Entry by</th>
                                <th scope="col">Date</th>
                                <th scope="col" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                   <button className="employee--btn btn--info add--btn" onClick={modalShow}>Add</button>
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
    loading: state.todayExpenses.loading,
    expenses: state.todayExpenses.expenses,
    total_expense: state.todayExpenses.total_expense
})
export default connect(mapStateToProps, {addExpense, updateExpense, getTodayExpenses})(TodayExpenses)