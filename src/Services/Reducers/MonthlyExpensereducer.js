import * as actionType from '../Types'

const initialState = {
    expenses: [],
    loading: false,
    total_expense: null,
    error: ''
}

const monthlyExpenses = (state = initialState, action) => {
    switch(action.type){
        case actionType.GET_MONTHLY_EXPENSE_REQUEST:
            return{
                ...state,
                loading: true
            }
        case actionType.GET_MONTHLY_EXPENSE_SUCCESS:
            return{
                ...state,
                expenses: action.payload,
                total_expense: action.total_expense,
                loading: false
            }
        case actionType.ADD_EXPENSE:
            return{
                ...state,
                expenses: [action.payload, ...state.expenses],
                total_expense: state.total_expense + action.total_expense
            }
        case actionType.UPDATE_ESPENSE:
            return{
                ...state,
                expenses: state.expenses.map(expense => expense.id === action.id ? action.payload : expense)
            }
        default:
            return state
    }
}
export default monthlyExpenses