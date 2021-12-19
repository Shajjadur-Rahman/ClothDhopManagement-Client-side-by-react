import * as actionType from '../Types'


const initialState = {
    dueOrders: [],
    total_paid: 0,
    total_due: 0,
    total: 0,
    loading: false,
    error: ''
}

const todayDueSales = (state = initialState, action) => {
    switch(action.type){
        case actionType.TODAY_DUE_SALES_REQUEST:
        return{
            ...state,
            loading: true
        }
        case actionType.TODAY_DUE_SALES_SUCCESS:
            return{
                ...state,
                dueOrders: action.payload,
                total_paid: action.total_paid,
                total_due: action.total_due,
                total: action.total,
                loading: false
            }
        default:
            return state
    }
}
export default todayDueSales