import * as actionType from '../Types'



const initialState = {
    orders: [],
    loading: false,
    error: ''
}

const ClientDueOrder = (state = initialState, action) => {
    switch(action.type){
        case actionType.GET_CLIENT_DUE_ORDER_REQUEST:
            return{
                ...state,
                loading: true
            }
        case actionType.GET_CLIENT_DUE_ORDER_SUCCESS:
            return{
                ...state,
                orders: action.payload,
                loading: false
            }
        case actionType.PAY_DUE_AMOUNT:
            const {due_amount} = state.orders.find(order => order.id === action.id)
            console.log("Due due_amount")
            return{
                ...state,
                orders: due_amount === action.paid ? state.orders.filter(order => order.id !== action.id) : state.orders.map(order => order.id === action.id ? {...order, paid_amount: order.paid_amount + action.paid, due_amount: order.due_amount - action.paid} : order)
            }
        default:
            return state
    }
}

export default ClientDueOrder