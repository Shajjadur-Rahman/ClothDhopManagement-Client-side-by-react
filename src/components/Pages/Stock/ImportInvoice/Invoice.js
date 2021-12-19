import React from 'react'
import {Link} from 'react-router-dom'

const Invoice = ({
  invoice,
  editInvoice,
  deleteInvoice}) => {
    return <tr key={invoice.id}>
    <td>{invoice.invoice_no}</td>
    <td>{invoice.importer_name}</td>
    <td>{invoice.import_expense}</td>
    <td>{invoice.import_expense_type}</td>
    <td>{new Date(invoice.timestamp).toLocaleString()}</td>
    <td className="employee-action">

        <button className="employee--btn btn--info" onClick={() => editInvoice(invoice)}>Update</button>
        <button className="employee--btn btn--warning" onClick={() => deleteInvoice(invoice.id)}>Delete</button>
        <button className="employee--btn btn--success">
          <Link to={`/invoice-related-all-products/${invoice.invoice_no}/${invoice.id}/`}>Detail</Link>
        </button>
    </td>
</tr>
}

export default Invoice