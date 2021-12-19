import * as actionType from '../Types'

const customer = JSON.parse(localStorage.getItem("customer"))
const initialState = customer ? {
    customer: customer
} : {}

const CustomerReducer = (state = initialState, action) => {
    switch(action.type){
        case actionType.ADD_TO_CART:
            return{
                ...state,
                customer: action.customer
            }
        case actionType.COMPLTETE_ORDER:
            return{
                customer:  null 
            }
        default:
            return state 
    }
}

export default CustomerReducer