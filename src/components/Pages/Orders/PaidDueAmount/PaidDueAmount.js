import React from 'react'

const PaidDueAmount = ({
    paid,
    order,
    error,
    setPaid,
    modalHide,
    onSubmitHandler
}) => {




    return <div className="custom-form">
    <div className="page-header">
        <h2>Pid due amount</h2>
        <h3>Order ID: <span>{order.order_id}</span></h3>
        <h3>Pid : <span>{order.paid_amount.toFixed(2)}</span></h3>
        <h3>Due : <span>{order.due_amount.toFixed(2)}</span></h3>
        <strong>{new Date().toLocaleDateString()}</strong>
    </div>
    <form onSubmit={(event) => onSubmitHandler(event)}>
            <div className="form--input--wrapper">
                <div className="form--input">
                    <label htmlFor="phone">{error ? <span style={{color: 'red'}}>{error}</span> : 'Input paid amount'}</label>
                    <input type="number" id="phone" name="phone" value={paid} onChange={(e) => setPaid(e.target.value)}  required={true} placeholder='0.00'/>
                </div>
            </div>
            
            <div className="form--footer">
                <button type="button" className="back" onClick={() => modalHide()}>Back</button>
                <button type="submit" className="submit">Submit</button>
            </div>
    </form>
</div>
}

export default PaidDueAmount