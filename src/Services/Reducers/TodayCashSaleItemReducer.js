import * as actionType from '../Types'

const initialState = {
    cashItems: [],
    total_profit: 0,
    total_sales: 0,
    total_qty: 0,
    paid_amount: 0,
    due_amount: 0,
    loading: false,
    error: ''
}

const cashSaleItems = (state = initialState, action) => {
    switch(action.type){
        case actionType.GET_TODAY_CASH_SALES_ITEMS_REQUEST:
            return{
                ...state,
                loading: true
            }
        case actionType.GET_TODAY_CASH_SALES_ITEMS_SUCCESS:
            return{
                ...state,
                cashItems: action.payload,
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
export default cashSaleItems