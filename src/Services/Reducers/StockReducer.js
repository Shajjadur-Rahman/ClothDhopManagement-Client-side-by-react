import * as actionType from '../Types'

const initialState = {
    products: [],
    loading: false,
    error: ''
}

const stockReducer = (state = initialState, action) => {
    switch(action.type){
        case actionType.GET_PRODUCT_REQUEST:
            return{
                ...state,
                loading: true
            }
        case actionType.GET_PRODUCT_SUCCESS:
            return{
                ...state,
                products: action.payload,
                loading: false
            } 
        case actionType.ADD_PRODUCT:
            return{
                ...state,
                products: [action.payload, ...state.products]
            }  
        case actionType.UPDATE_PRODUCT:
            return{
                ...state,
                products: state.products.map(product => product.id === action.id ? action.payload : product)
            } 
        case actionType.DEACTIVATE_PRODUCT:
            return{
                ...state,
                products: state.products.filter(product => product.id !== action.id)
            }
        case actionType.ADD_TO_CART:
            return{
                ...state,
                products: action.qty ? 
                state.products.map(product => product.id === action.id ? {...product, quantity: (product.quantity) - parseFloat(action.qty)} : product) : 
                state.products.map(product => product.id === action.id ? {...product, len_qty: (product.len_qty) - parseFloat(action.len_qty)} : product)
            }
        default:
            return state
    }
}
export default stockReducer