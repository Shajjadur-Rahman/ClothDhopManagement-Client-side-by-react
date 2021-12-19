import React, {useEffect, useState, useCallback, memo}  from 'react'
import {connect} from 'react-redux'
import { useHistory } from 'react-router-dom'
import ReactLoading from 'react-loading'
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars'
import { dueOrder, payDueAmount } from './../../../../Services/Actions/ClientOrderActions';
import { Modal } from '../../../../UI/Modal/Modal'
import PaidDueAmount from '../PaidDueAmount/PaidDueAmount'


const ClientDueOrders = ({
    match,
    loading,
    orders,
    dueOrder,
    payDueAmount
}) => {

    const {name, id} = match.params

    useEffect(() => {
        document.title = `${name}'s due orders`
    }, [name])

    const [show, setShow] = useState(false)
    const [orderObj, setOrderObj] = useState({
        order_id: '',
        paid_amount: 0,
        due_amount: 0
    })

    const [paid, setPaid] = useState('')
    const [error, setError] = useState('')

    const modalShow = () => setShow(true)
    const modalHide = () => {
        setShow(false)
        setPaid('')
    }



    const paidDueAmount = order => {
        setOrderObj({
            id: order.id,
            order_id: order.order_id,
            paid_amount: order.paid_amount,
            due_amount: order.due_amount
        })
        modalShow()
    }


    const onSubmitHandler = event => {
        event.preventDefault()
        if(paid > orderObj.due_amount || paid <= 0){
            setError('Invalid amount ! Paid amount should be lessthan or equal to due amount !')
        }else{
            payDueAmount(paid, orderObj.id)
            setError('')
            modalHide()
        }
    }


    const [searchValue, setSearchValue] = useState({
        timestamp: null
      })
      


    const searchHandler = useCallback(event => {
    setSearchValue({
        ...searchValue,
        [event.target.name]: event.target.value
    })
    }, [searchValue])

    const history = useHistory()
    const goBack = () => {
        history.goBack()
    }

    useEffect(() => {
        dueOrder(id, searchValue)
    }, [dueOrder, id, searchValue])


    // sum all sub_total item price   
    const getTotal = (items) =>{
        let value = 0
        let item = 0
        for(item in items) {
            value += items[item].sub_total
        }
        return value.toFixed(2)
    }

    return <>
            <Modal show={show}>
                <PaidDueAmount 
                paid={paid}
                error={error}
                order={orderObj} 
                setPaid={setPaid}
                modalHide={modalHide} 
                onSubmitHandler={onSubmitHandler} />
            </Modal>
            
            <div className="page-header">
                <h2><span>{name}'s </span> due orders</h2>
                <strong>{new Date().toLocaleDateString()}</strong>
            </div>
            {loading ? (
                <ReactLoading style={{ height: '100px', width: '80px', margin: '80px auto', display: 'block'}} type='spin'/>
            ) : (
                <>
                    <div className="search__wapper">
                        <div className="search__div">  
                            <DatePickerComponent name="timestamp" value={searchValue.timestamp} style={{width: '280px'}} onChange={searchHandler} placeholder="Search your task by date"/>
                        </div>
                        
                    </div>
                    <table className="data-table">

                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Order ID</th>
                            <th>Date</th>
                            <th className="action" colSpan="4">
                                <button className="employee--btn btn--info add--btn" title="Back to clients / customers list !" onClick={() => goBack()} style={{float: 'right', marginRight: '36px'}}><i className="fas fa-backward"></i></button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.length !== 0 ? orders.map((order, index)=> (
                                <>
                                <tr key={order.id} style={{background: 'rgb(54, 55, 75)'}}>
                                    <td style={{color: '#fff'}}>{index + 1}</td>
                                    <td style={{color: '#fff'}}>{order.order_id}</td>
                                    <td style={{color: '#fff'}} colSpan="6">{new Date(order.timestamp).toLocaleString()}{order.order_status === '3' && <button className="paid__btn" onClick={() => paidDueAmount(order)}>Pay</button>}</td>
                                </tr>
                                {order.orderItems.map((item, index) => (
                                    
                                        <tr key={index}>
                                            <td>Product : {item.product.name}</td>
                                            <td>Sold by : {item.sold_by ? item.sold_by.username : null}</td>
                                            <td>Price : {item.price}</td>
                                            <td>Qty : {item.quantity}</td>
                                            <td>Discount : {item.discount}</td>
                                            <td>Sub total : {item.sub_total}</td>
                                            <td>{item.product.name}</td>
                                        </tr>                                     
                                ))}
                                <tr style={{background: order.order_status === '3' ? '#ce4785' : ''}}>
                                    <td colSpan="4" style={{color: order.order_status === '3' ? '#fff' : '#000'}}><strong>Total</strong></td>
                                    <td colSpan="2" style={{color: order.order_status === '3' ? '#fff' : '#000'}}><strong>{getTotal(order.orderItems)} {"-"} {order.paid_amount} {"="} {order.due_amount}</strong></td>
                                    <td style={{color: order.order_status === '3' ? '#fff' : '#000'}}><strong>Due amount : {order.due_amount.toFixed(2)}</strong></td>
                                </tr>
                                <br/>
                                <br/>
                    
                                </>
                            )) : (
                                <tr>
                                    <td colSpan="4" style={{textAlign: 'center', color: 'red'}}> Data not found !</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                </>
            )
            }
        </>

}
const mapStateToProps = state => ({
    loading: state.ClientDueOrder.loading,
    orders: state.ClientDueOrder.orders,
})
export default memo(connect(mapStateToProps, {dueOrder, payDueAmount})(ClientDueOrders))