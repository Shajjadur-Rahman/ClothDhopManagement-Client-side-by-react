import * as actionType from '../Types'

const initialState = {
    sales: [],
    total_profit: 0,
    total_sold_qty: 0,
    year: null,
    loading: false,
    error: ''
}

const YearlySales = (state = initialState, action) => {
    switch(action.type){
        case actionType.GET_FULL_YEAR_SALES_REQUEST:
            return{
                ...state,
                loading: true
            }
        case actionType.GET_FULL_YEAR_SALES_SUCCESS:
            return{
                ...state,
                sales: action.payload,
                total_profit: action.total_profit,
                total_sold_qty: action.total_sold_qty,
                year: action.year,
                loading: false
            }
        default:
            return state
    }
}

export default YearlySales