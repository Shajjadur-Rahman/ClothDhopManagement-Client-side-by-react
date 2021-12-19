import React, {useEffect, useState} from 'react'
import {Link, useHistory} from 'react-router-dom' 
import {connect} from 'react-redux'
import { logOut, loggedInUserInfo } from '../../Services/Actions/AuthAction'
import userImage from '../../media/user1-128x128.jpg'
import './Header.css'
import { allCartItems } from './../../Services/Actions/CartActions';





const Header = ({
    user,
    access,
    logOut,
    pro_image,
    togglehide,
    allCartItems,
    isAuthenticated,
    total_cart_items,

}) => {

    const [customer, setCustomer] = useState(null)

    useEffect(() =>{
        if(customer){
            allCartItems(customer.id, access)
        }
    }, [isAuthenticated, allCartItems, access, customer])

    const history = useHistory()

    useEffect(() => {
    const custo = JSON.parse(localStorage.getItem("customer"))
    setCustomer(custo)
    }, [])

    const gotToProfile = () => {
        history.push(`/profile/${user.id}`)
    }
    
    const cartView = () => {
        history.push('/cart-view')
    }

    const goLogin = () => {
        history.push('/login')
    }

    const profileImage = pro_image => {
        let profile_img = null
        if(pro_image){
            if(pro_image.profile_image){
                profile_img = pro_image.profile_image
                return profile_img 
            }if(pro_image.profile_image_url){
                profile_img = pro_image.profile_image_url
               return profile_img
            }else{
                return profile_img
            }
        }else{
            return profile_img
        }

    }

    return <header className="header">
                <div className="logo">
                    <h2>Admin lite</h2>
                    <div className='toggle__button'><i className = "fas fa-bars" onClick = {() => togglehide() } > </i></div>
                </div>
                <div className="header-nav">
                    <ul>
                        <li className='heaher__nav__item'><Link to='/'><i className="fas fa-home"></i> Home</Link></li>
                        <li className='heaher__nav__item'><Link to='/contact'><i className="fas fa-phone"></i> Contact</Link></li>
                        <li className='heaher__nav__item'><span onClick={() => logOut()} className="logout__btn"><i className="fas fa-power-off log-out"></i> Log out</span></li>
                        <li className="search-item"><button><i className="fas fa-search"></i></button><input type="search"/></li>
                    </ul>
                </div>
                <div className="notification-area">
                    <div className="message-icon">
                        <span className="span">2</span>
                        <i className='far fa-comments'></i>
                    </div>
                    <div className="notification-icon">
                        <span>2</span>
                        <i className='far fa-bell'></i>
                    </div>
                     <div className="notification-icon" onClick={() => cartView()}>
                        <span>{total_cart_items ? total_cart_items : 0}</span>
                        <i className='fa fa-shopping-cart'></i>
                    </div>
                </div>

                <div className="login-user">
                    {
                        isAuthenticated === undefined ? 
                        <>
                            <img src={userImage} alt="User"/>
                            <h2  onClick={() => goLogin()}> &nbsp; <strong>Login</strong> </h2>
                        </> : 
                        <>
                            <img src={profileImage(pro_image)} alt="User"  onClick={ () => gotToProfile()}/>
                            <h2  onClick={() => gotToProfile()}>Welcome , &nbsp; <strong> {user && user.username}</strong> </h2>
                        </>
                    }

                </div>
                
    </header>
}
const mapStateToProps = state => ({
    user: state.AuthReducer.user,
    pro_image: state.AuthReducer.pro_image,
    access: state.AuthReducer.access,
    isAuthenticated: state.AuthReducer.isAuthenticated,
    total_cart_items: state.CartReducer.total_cart_items,
    customer: state.CustomerReducer.customer,

})
export default connect(mapStateToProps, {logOut, loggedInUserInfo, allCartItems})(Header)