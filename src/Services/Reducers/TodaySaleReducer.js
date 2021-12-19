import * as actionType from '../Types'

const initialState = {
    todaySales: [],
    today_total_sold: 0,
    today_total_sold_qty: 0,
    today_total_profit: 0,
    loading: false,
    error: ''
}

const todaySales = (state = initialState, action) => {
    switch(action.type){
        case actionType.GET_TODAY_SALES_REQUEST:
            return{
                ...state,
                loading: true
            }
        case actionType.GET_TODAY_SALES_SUCCESS:
            return{
                ...state,
                todaySales: action.payload,
                today_total_sold: action.total_sales,
                today_total_sold_qty: action.total_qty,
                today_total_profit: action.total_profit,
                loading: false 
            }
        default:
            return state
    }
}

export default  todaySales
