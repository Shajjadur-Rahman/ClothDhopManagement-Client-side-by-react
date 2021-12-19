import * as actionType from '../Types'

const initialState = {
    cartItems: [],
    total_cart_items: 0,
    total: 0,
    total_discount: 0,
    loading: false,
    error: ''
}

const CartReducer = (state = initialState, action) => {
    switch(action.type){
        case actionType.GET_CART_ITEMS_REQUEST:
            return{
                ...state,
                loading: true
            }
        case actionType.GET_CART_ITEMS_SUCCESS:
            return{
                ...state,
                cartItems: action.payload,
                total_cart_items: action.total_cart_items,
                total: action.total,
                total_discount: action.total_discount,
                loading: false
            }
        case actionType.ADD_TO_CART:
            return{
                ...state,
                cartItems: [action.payload, ...state.cartItems],
                total_cart_items: action.total_item
            }
        case actionType.REMOVE_PRODUCT:
            return{
                ...state,
                cartItems: state.cartItems.filter(item => item.product.id !== action.id),
                total_cart_items: state.total_cart_items - 1 
            }
        case actionType.COMPLTETE_ORDER:
            localStorage.removeItem("customer")
            return{
                cartItems: [],
                total_cart_items: 0,
                total: 0,
                total_discount: 0,
                loading: false,
                error: '' 
            }
        default:
            return state
    }
}
export default CartReducer