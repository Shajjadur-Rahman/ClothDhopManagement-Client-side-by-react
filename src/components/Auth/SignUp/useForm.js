import {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
// import { loginUser } from '../../../Services/Actions/AuthAction'


const useForm = (callback, validate) => {
    const [userInfo, setUserInfo] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    })
    const [errors, setErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    const onChangeHandler = event => {
        setUserInfo({
            ...userInfo,
            [event.target.name]: event.target.value
        })
        
    }
    const history = useHistory()
    const goLogin = () => {
        history.push('/login')
    }
    const onSubmitHandler = event => {
        event.preventDefault()
        setErrors(validate(userInfo))
        setIsSubmit(true)
        if(Object.keys(errors).length === 0 && isSubmit){
        // loginUser(userInfo)
            goLogin()
            console.log('No errors !')
        }else{
            return false
        }


    }
    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmit){
            callback()
        }
    })

    return {userInfo, onChangeHandler, onSubmitHandler, errors}
    
}

export default useForm