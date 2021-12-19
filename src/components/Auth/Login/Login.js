import React, {useState, useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom';
import {connect} from 'react-redux'
import AuthBackDrop from '../AuthBackDrop/AuthBackDrop'
import '../SignUpAndLogin.css'
import AuthFormImage from  '../../.././media/singup.PNG'
import { loginUser } from '../../../Services/Actions/AuthAction'






const Login = (props) => {

    useEffect(() => {
        document.title = 'Login'
    }, [])
    
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
    })
    const history = useHistory()
    const onChangeHandler = event => {
        setUserInfo({
            ...userInfo,
            [event.target.name]: event.target.value
        })
    }
    const onSubmitHandler = (event) => {
        event.preventDefault()

        props.loginUser(userInfo, history)
    }


    return <>
            <AuthBackDrop/>
            <div className="auth-form">
                <div className="auth-form-container login">
                    <div className="form-image">
                        <img src={AuthFormImage} alt="Form"/>
                    </div>
                    <form className="form" onSubmit={onSubmitHandler}>
                        <div className="form__fields">
                            <div className="form-header">
                                <h2><span><i className="fas fa-user"></i></span> Login</h2>
                            </div>
                            <div className="auth-input-field">
                                <label htmlFor="email">{props.error ? <strong style={{color: 'red'}}>{props.error}</strong> : "Email"}</label>
                                <input type="email" name="email" id="email" onChange={onChangeHandler} value={userInfo.email} required={true} placeholder="Input your valid email"/>
                            </div>
                            <div className="auth-input-field">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" id="password" onChange={onChangeHandler} value={userInfo.password} required={true} placeholder="Input your password"/>
                            </div>
                            <div className="form__btns">
                                <button className="form__btn" type="submit">Login</button>
                            </div>
                            <div className="form__footer">
                                <Link to="/register">Do you haven't an account ? Register !</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
    </>
        
}
const mapStateToProps = state => ({
    error: state.AuthReducer.error
})
export default connect(mapStateToProps, {loginUser})(Login)
