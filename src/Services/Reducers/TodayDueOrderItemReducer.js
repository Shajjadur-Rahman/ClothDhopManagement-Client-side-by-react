import * as actionType from '../Types'


const initialState = {
    items: [],
    total_profit: 0,
    total_sales: 0,
    total_qty: 0,
    paid_amount: 0,
    due_amount: 0,
    loading: false,
    error: ''
}

const todayDueOrderItems = (state = initialState, action) => {
    switch(action.type){
        case actionType.TODAY_DUE_SALE_ITEMS_REQUEST:
            return{
                ...state,
                loading: true
            }   
        case actionType.TODAY_DUE_SALE_ITEMS_SUCCESS:
            return{
                ...state,
                items: action.payload,
                total_profit: action.total_profit,
                total_sales: action.total_sales,
                total_qty: action.total_qty,
                paid_amount: action.paid_amount,
                due_amount: action.due_amount,
                loading: false
            }
        default:
            return state
    }
}
export default todayDueOrderItems