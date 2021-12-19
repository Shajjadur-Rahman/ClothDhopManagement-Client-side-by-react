import * as actionType from '../Types'

const initialState = {
    cashOrders: [],
    total_paid: 0,
    total_due: 0,
    total: 0,
    loading: false,
    error: ''
}

const todayCashSales = (state = initialState, action) => {
    switch(action.type){
        case actionType.GET_TODAY_CASH_SALES_REQUEST:
            return{
                ...state,
                loading: true
            }
        case actionType.GET_TODAY_CASH_SALES_SUCCESS:
            return{
                ...state,
                cashOrders: action.payload,
                total_paid: action.total_paid,
                total_due: action.total_due,
                total: action.total,
                loading: false
            }
        default:
            return state
    }
}

export default todayCashSales