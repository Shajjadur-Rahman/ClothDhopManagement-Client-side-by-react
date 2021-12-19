import * as actionType from '../Types'


const initialState = {
    orders: [],
    loading: false,
    error: ''
}

const ClientOrder = (state = initialState, action) => {
    switch(action.type){
        case action.GET_CLIENT_ORDER_REQUEST:
            return{
                ...state,
                loading: true
            }
        case actionType.GET_CLIENT_ORDER_SUCCESS:
            return{
                ...state,
                orders: action.payload,
                loading: false
            }
        case actionType.PAY_DUE_AMOUNT2:
            return{
                ...state,
                orders: state.orders.map(order => order.id === action.order_id ? {...order,
                     paid_amount: order.paid_amount + action.paid_amount, due_amount: order.due_amount - action.paid_amount} : order)
            }
        default:
            return state
    }
}
export default ClientOrder