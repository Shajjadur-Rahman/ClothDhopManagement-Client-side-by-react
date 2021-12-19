import React from 'react'
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars'


const AddExpense = ({
    edit,
    errors,
    expense,
    modalHide,
    onChangeHandler,
    onSubmitHandler
}) => {
    return <div className="custom-form">
                <button className="custom--btn" onClick={() => modalHide()}>X</button>
                <div className="page-header">
                    <h2>{edit ? "Update Expense" : "Add Expense"}</h2>
                    <strong>{new Date().toLocaleDateString()}</strong>
                </div>
                <form onSubmit={onSubmitHandler}>
                        <div className="form--input--wrapper">
                            <div className="form--input">
                            <label htmlFor="expense_type">Input Expense Type *</label>
                            {errors.expense_type && <span style={{color: 'red', paddingBottom: '10px', display: 'block'}}>{errors.expense_type}</span>}
                            <input type="text" name="expense_type" id="expense_type" value={expense.expense_type} onChange={onChangeHandler} placeholder='Input expense type ....'/>
                            </div>
                        </div>

                        <div className="form--input--wrapper">
                            <div className="form--input">
                            <label htmlFor="expense_amount">Input Expense Amount *</label>
                            {errors.expense_amount && <span style={{color: 'red', paddingBottom: '10px', display: 'block'}}>{errors.expense_amount}</span>}
                            <input type="number" name="expense_amount" id="expense_amount" value={expense.expense_amount} onChange={onChangeHandler} placeholder='0.00'/>
                            </div>
                        </div>
                        <div className="form--input--wrapper">
                            <div className="form--input">
                            <label htmlFor="timestamp">Input expense date  *</label>
                            {errors.timestamp && <span style={{color: 'red', paddingBottom: '10px', display: 'block'}}>{errors.timestamp}</span>}
                                <DateTimePickerComponent 
                                style={{padding: '5px 10px'}} 
                                value={expense.timestamp}
                                name="timestamp" placeholder="Chose date and time"
                                onChange={onChangeHandler}
                                className="date-time-input" />
                                {/* https://www.npmjs.com/package/@syncfusion/ej2-react-calendars#datetimepicker */}
                            </div>
                        </div>
                        
                        <div className="form--footer">
                        {expense.timestamp && 
                            <>
                           <button type="button" className="back" onClick={() => modalHide()}>Back</button>
                           <button type="submit" className="submit">{edit ? "Update": "Submit"}</button>
                           </>
                        }
                        </div>
                </form>
            </div>

}

export default AddExpense