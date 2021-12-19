import * as actionType from '../Types'

const initialState = {
    yearExpenses: [],
    loading: false,
    total_expense_in_year: 0,
    year: null,
    error: ''
}

const yearlyExpense = (state = initialState, action) => {
    switch(action.type){
        case actionType.GET_YEARLY_EXPENSES_REQUEST:
            return{
                ...state,
                loading: true
            }
        case actionType.GET_YEARLY_EXPENSES_SUCCESS:
            return{
                ...state,
                yearExpenses: action.payload,
                total_expense_in_year: action.total_expense_in_year,
                year: action.year,
                loading: false
            }
        default:
            return state
    }
}

export default yearlyExpense