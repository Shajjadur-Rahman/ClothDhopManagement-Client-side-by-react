import * as actionType from '../Types'
import axios from 'axios'


// export const loginUser = (userInfo, history) => async dispatch => {
//     const res = await axios.post('account/login/', userInfo)
//         try{
//             dispatch({
//                 type: actionType.USER_LOGIN,
//                 payload: res.data
//             })
//             history.push("/")
//             localStorage.setItem("isAuthenticated", true)
//             localStorage.setItem("auth", JSON.stringify(res.data))
        
//         }catch(error){
//             console.log("error.response")
//             console.log(error.response)
       
//         }
 
// }

export const loginUser = (userInfo, history) => async dispatch => {
    await axios({
        method: 'post',
        url: 'account/login/',
        data: userInfo
    })
    .then(response => {
        dispatch({
            type: actionType.USER_LOGIN,
            payload: response.data 
        })
        history.push("/")
        localStorage.setItem("isAuthenticated", true)
        localStorage.setItem("auth", JSON.stringify(response.data))
    })
    .catch(error => {
        dispatch({
            type: actionType.USER_LOGIN_FAILED,
            error: error.response.data.error
        })
    })
}

export const loggedInUserInfo = () => async dispatch => {
    dispatch({
        type: actionType.GET_USER_INFO_REQUEST
    })
    const response = await axios.get('account/logged-in-user-info/')
    try{
        dispatch({
            type: actionType.GET_USER_INFO_SUCCESS,
            payload: response.data
        })
    }catch(error){
        console.log(error)
    }
}

export const logOut = () => dispatch => {
    dispatch({
        type: actionType.USER_LOG_OUT
    })
}


