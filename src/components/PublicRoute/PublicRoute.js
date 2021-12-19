import React from 'react'
import {connect} from 'react-redux'
import { Route, Redirect } from 'react-router-dom'



export const PrivateRoute = ({

    isAuthenticated,
    component: Component,
    ...rest
}) => {


    return <Route {...rest} component={(props) => (
        isAuthenticated ? (
            <Redirect to="/" />   
        ): (
            <Component {...props} />  
        )
    )} />
}

const mapStateToProps = state => ({
    userInfo: state.AuthReducer.userInfo,
    isAuthenticated: state.AuthReducer.isAuthenticated
})
export default connect(mapStateToProps, {})(PrivateRoute)