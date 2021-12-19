import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux';
import { Modal } from './../../../../UI/Modal/Modal';
import ReactLoading from 'react-loading'
import Invoice from './Invoice';
import {  
  addInvoice, 
  deleteInvoice,
  updateInvoice, 
  allImportInvoices } from './../../../../Services/Actions/ImportInvoiceActions';
import AddInvoice from './AddInvoice';




const ImportInvoice = ({
  loading,
  invoices,
  addInvoice, 
  updateInvoice,
  deleteInvoice,
  allImportInvoices, 
  }) => {

    useEffect(() => {
        document.title = "Import invoces"
    })
    const [show, setShow] = useState(false)
    const [update, setUpdate] = useState(false)

    const modalShow = () => {
      setShow(true)
    }

    const modalHide = () => {
      setShow(false)
      setUpdate(false)
      clear()
    }


    useEffect(() => {
        allImportInvoices() 
    }, [allImportInvoices])

    const [invoice, setInvoice] = useState({
      id: null,
      invoice_no: '',
      import_expense_type: '',
      import_expense: null,
      timestamp: null
    })

    const clear = () => {
      setInvoice({
        id: null,
        invoice_no: '',
        import_expense_type: '',
        import_expense: null,
        timestamp: null
      })
    }
    const onChangeHandler = event => {
      setInvoice({
        ...invoice,
        [event.target.name]: event.target.value
      })
    }

    const onSubmitHandler = event => {
      event.preventDefault()
      if(update){
        updateInvoice(invoice)
        clear()
        modalHide()
      }else{
        const invoiceObj = new FormData()
            invoiceObj.append("import_expense", invoice.import_expense)
            invoiceObj.append("import_expense_type", invoice.import_expense_type)
            invoiceObj.append("timestamp", invoice.timestamp.toISOString())
            addInvoice(invoiceObj)
            clear()
            modalHide()
      }
    }

    const editInvoice = invoice => {
      setInvoice({
        id: invoice.id,
        invoice_no: invoice.invoice_no,
        import_expense_type: invoice.import_expense_type,
        import_expense: invoice.import_expense,
        timestamp: invoice.timestamp
      })
      modalShow()
      setUpdate(true)
    }

    return <>
            <Modal show={show}>
              <AddInvoice 
              update={update} 
              invoice={invoice}
              modalHide={modalHide} 
              onChangeHandler={onChangeHandler} 
              onSubmitHandler={onSubmitHandler}/>
            </Modal>
            <div className="page-header">
                <h2>All <span>Import Invoice</span> Record</h2>
                <strong>{ new Date().toLocaleDateString()}</strong>
            </div>
            {loading ? (
              <ReactLoading style={{ height: '100px', width: '80px', margin: '80px auto', display: 'block'}} type='spin'/>
            ) : (
              <table className="data-table">
                <thead>
                  <tr>
                    <th scope="col">Invoice No</th>
                    <th scope="col">Importer Name</th>
                    <th scope="col">Import Expenes</th>
                    <th scope="col">Expenes Type</th>
                    <th scope="col">Import Date</th>
                    <th scope="col">

                        <button className="employee--btn btn--info" onClick={modalShow}>Add</button>
                      
                      </th>
                  </tr>
                </thead>
                <tbody>
                
                {
                  invoices && invoices.map(invoice => (
                    <Invoice 
                    invoice={invoice} 
                    key={invoice.id} 
                    editInvoice={editInvoice}
                    deleteInvoice={deleteInvoice}/>
                  ))
                }
                  <tr>
                    <th colSpan="2" style={{ textAlign: 'center' }}></th>
                    <th></th>
                    <th style={{textAlign: 'center'}}></th>
                    <th colSpan="2"></th>
                  </tr>
                </tbody>
              </table> 
            )}
    
     
</>
}

const mapStateToProps = state => ({
    invoices: state.ImportInvoiceReducer.invoices,
    loading: state.ImportInvoiceReducer.loading,
    access: state.AuthReducer.access
})

export default connect(mapStateToProps, {allImportInvoices, addInvoice, deleteInvoice, updateInvoice})(ImportInvoice)