import * as actionType from '../Types'


const initialState = {
    incomes: [],
    loading: false,
    total_profit_in_year: 0,
    total_expense_in_year: 0,
    net_profit_or_loss: 0,
    year: null,
    error: ''
}

const yearlyIncome = (state = initialState, action) => {
    switch(action.type){
        case actionType.GET_INCOME_REQUEST:
            return{
                ...state,
                loading: true
            }
        case actionType.GET_INCOME_SUCCESS:
            return{
                ...state,
                incomes: action.payload,
                total_profit_in_year: action.total_profit_in_year,
                total_expense_in_year: action.total_expense_in_year,
                net_profit_or_loss: action.net_profit_or_loss,
                year: action.year,
                loading: false
            }
        default:
            return state
    }
}
export default yearlyIncome