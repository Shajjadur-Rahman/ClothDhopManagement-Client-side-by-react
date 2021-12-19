import React, {useEffect} from 'react'
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';

const AddInvoice = ({
    update,
    invoice,
    modalHide,
    onChangeHandler,
    onSubmitHandler
}) => {
    useEffect(() => {
        document.title = "Add import invoice"
    }, [])

    return <div className="custom-form">
                    <div className="page-header">
                        <h2>{update ? `Update ${invoice.invoice_no}` : "Add Import Invoice"}</h2>
                        <strong>{ new Date().toLocaleDateString()}</strong>
                    </div>
                    <form onSubmit={(event) => onSubmitHandler(event)}>
                        <div className="form--input--wrapper" style={{display : update ? '' : 'none'}}>
                            <div className="form--input">
                                <label htmlFor="invoiceNo">Update Invoice No *</label>
                                <input type="text" name="invoice_no" id="invoiceNo" value={invoice.invoice_no ? invoice.invoice_no : ''} onChange={onChangeHandler} required={false}/>
                            </div>
                        </div>
                        <div className="form--input--wrapper">
                            <div className="form--input">
                                <label htmlFor="expense">{update ? 'Update Import Expense' : "Add Import Expense *"}</label>
                                <input type="number" name="import_expense" id="expense" value={invoice.import_expense ? invoice.import_expense : ''} required={true} onChange={onChangeHandler} placeholder='00.00'/>
                            </div>
                        </div>
                        <div className="form--input--wrapper">
                            <div className="form--input">
                                <label htmlFor="import_expense_type">{update ? 'Update Import Expense Type' : "Add Import Expense Type *"}</label>
                                <input type="text" name="import_expense_type" id="import_expense_type" value={invoice.import_expense_type ? invoice.import_expense_type : ''} required={true} onChange={onChangeHandler} placeholder='Input expense type '/>
                            </div>
                        </div>
                            <div className="form--input--wrapper">
                                <div className="form--input">
                                    <label htmlFor="expense">{update ? 'Update Import Date' : "Add Import Date *"}</label>
                                    <DateTimePickerComponent 
                                    style={{padding: '5px 10px'}} 
                                    required={true} value={invoice.timestamp}
                                    name="timestamp" placeholder="Chose date and time"
                                    onChange={onChangeHandler}
                                    className="date-time-input" />
                                    {/* https://www.npmjs.com/package/@syncfusion/ej2-react-calendars#datetimepicker */}
                                </div>
                            </div>

                        

                        <div className="form--footer">
                            <button type="button" className="back" onClick={() => modalHide()}>Back</button>
                            <button type="submit" className="submit">{update ? "Update" : "Create"}</button>
                        </div>
                    </form>
        </div>
}

export default AddInvoice