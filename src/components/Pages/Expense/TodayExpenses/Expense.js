import React from 'react'

const Expense = ({
    index,
    expense
}) => {
    return <tr key={expense.id}>
            <td>{index + 1}</td>
            <td>{expense.expense_type}</td>
            <td>{expense.expense_amount.toFixed(2)}</td>
            <td>{expense.creator_name}</td>
            <td>{new Date(expense.timestamp).toLocaleString()}</td>
            <td className="action" style={{width: '150px'}}>
                <button className="action--btn btn--info">Update</button>
                <button className="action--btn btn--warning">Delete</button>
            </td>
        </tr>
}

export  default Expense