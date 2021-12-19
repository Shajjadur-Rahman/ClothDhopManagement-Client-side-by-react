import * as actionType from '../Types'

const auth = JSON.parse(localStorage.getItem('auth'))
const isAuthenticated =  localStorage.getItem("isAuthenticated")

const initialState = auth ? {
    user: auth.user,
    pro_image: auth.pro_image,
    access: auth.access ,
    refresh: auth.refresh ,
    isAuthenticated: isAuthenticated, 
    error: ''
} : {}


 const AuthReducer = (state = initialState, action) => {
    switch(action.type){
        case actionType.USER_LOGIN:
            return{
                ...state,
                user: action.payload.user,
                pro_image: action.payload.pro_image,
                access: action.payload.access,
                refresh: action.payload.refresh,
                isAuthenticated: true,
            }
        case actionType.USER_LOGIN_FAILED:
            return{
                ...state,
                error: action.error
            }
            
        case actionType.USER_LOG_OUT:
            const logOutState = {
                user: null,
                pro_image: null,
                access: '',
                refresh: '',
                isAuthenticated: false,
                error: ''
            }
            localStorage.removeItem("auth")
            localStorage.removeItem("isAuthenticated")
            return logOutState
      
        default: 
            return state    
    }
}

export default AuthReducer