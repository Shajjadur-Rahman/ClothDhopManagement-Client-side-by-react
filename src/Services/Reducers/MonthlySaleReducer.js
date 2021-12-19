import * as actionType from '../Types'

const initialState = {
    monthlySales: [],
    monthly_total_sold: 0,
    monthly_total_sold_qty: 0,
    monthly_total_profit: 0,
    loading: false,
    error: ''
}

const monthlyTotalSale = (state = initialState, action) => {
    switch(action.type){
        case actionType.GET_SALE_DETAIL_REQUEST:
            return{
                ...state,
                loading: true
            }
        case actionType.GET_SALE_DETAIL_SUCCESS:
            return{
                ...state,
                monthlySales: action.payload,
                monthly_total_sold: action.total_sales,
                monthly_total_sold_qty: action.total_qty,
                monthly_total_profit: action.total_profit,
                loading: false
            }
        default:
            return state
    }
}

export default monthlyTotalSale