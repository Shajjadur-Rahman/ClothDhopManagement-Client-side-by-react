import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import AuthBackDrop from '../AuthBackDrop/AuthBackDrop'
import '../SignUpAndLogin.css'
import AuthFormImage from  '../../.././media/singup.PNG'
import { loginUser } from '../../../Services/Actions/AuthAction'




function Register(props){
    useEffect(() => {
        document.title = 'Register'
    }, [])
    
    // const [isSubmitted, setIsSubmitted] = useState(false)
    // const submitForm = () =>{
    //     setIsSubmitted(true)
    // }
    // const {onChangeHandler, onSubmitHandler, errors, userInfo} = useForm(submitForm, validate)


   
    
    return <>
            <AuthBackDrop/>
            <div className="auth-form">
                <div className="auth-form-container">
               
                    <div className="form-image">
                        <img src={AuthFormImage} alt="Form"/>
                    </div>
                   {/* { isSubmitted ? (
                                <div className="confirm-submittion">
                                    <h3>Form submitted successfully .....! <Link to='/login'>Login from here...</Link></h3>
                                </div>
                                ) : ( */}
                    <>
                    <form className="form">
                        <div className="form__fields">
                            
                            {/* <div className="form-header">
                                <h2><span><i className="fas fa-user-plus"></i></span> Register</h2>
                            </div>
                            <div className="auth-input-field">
                                <label htmlFor="username">{errors.username ? <span style={{color: '#5e3a4b', textShadow: '-1px 1px 3px #000'}}>{errors.username}</span> : "Username"}</label>
                                <input type="text" name="username" id="username" onChange={onChangeHandler} value={userInfo.username} placeholder="Input your username"/>
                            </div>
                            
                            <div className="auth-input-field">
                                <label htmlFor="email">{errors.email ? <span style={{color: '#5e3a4b', textShadow: '-1px 1px 3px #000'}}>{errors.email}</span> : "Email"}</label>
                                <input type="email" name="email" id="email" onChange={onChangeHandler} value={userInfo.email} placeholder="Input your valid email"/>
                            </div>
                            <div className="auth-input-field">
                                <label htmlFor="password">{errors.password ? <span style={{color: '#5e3a4b', textShadow: '-1px 1px 3px #000'}}>{errors.password}</span> : "Password"}</label>                              
                                <input type="password" name="password" id="password" onChange={onChangeHandler} value={userInfo.password} placeholder="Input your password"/>
                            </div>
                            <div className="auth-input-field">
                                <label htmlFor="password2">{errors.password2 ? (<span style={{color: '#5e3a4b', textShadow: '-1px 1px 3px #000'}}>{errors.password2}</span>) : "Confirm password"}</label> 
                                <input type="password" name="password2" id="password2" onChange={onChangeHandler} value={userInfo.password2} placeholder="Input your password"/>
                            </div>
                            
                            <div className="form__btns">
                                <button className="form__btn" type="submit">Register</button>
                            </div> */}

                            <strong style={{display: 'inline-block', textAlign: 'justify', marginBottom: '20px'}}>Only Admin or Super user has authority to create new User or Employee ! If you are Admin or Super user in this app ,
                                 You have to login very first ! Then click side nav item "Employee" . After clicking "Employee" nav item you must notice a employee list table .
                                  On the top of Employee list table Click "Add" button to create new Employee ........ ! If you have no authorization to create user , You can send a mail to Admin through this email " shaturngbd@gmail.com " ! Thanks in advance !  </strong>
                    
                            <div className="form__footer">
                                <Link to="/login">Already have an account ? Login !</Link>
                            </div>
                        </div>
                    </form>
                    </>
                 
                    
                </div>
            </div>
    </>
        
}

export default connect(null, {loginUser})(Register)
