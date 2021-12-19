import * as actionType from '../Types'

const initialState = {
    products: [],
    loading: false,
    error: ''
}

const deactivateProducts = (state= initialState, action) => {
    switch(action.type){
        case actionType.GET_HIDE_PRODUCT_REQUEST:
            return{
                ...state,
                loading: true
            }
        case actionType.GET_HIDE_PRODUCT_SUCCESS:
            return{
                ...state,
                products: action.payload,
                loading: false
            }
        case actionType.ACTIVATE_PRODUCT:
            return{
                ...state,
                products: state.products.filter(product => product.id !== action.id)
            }
        default:
            return state
    }
}
export default deactivateProducts