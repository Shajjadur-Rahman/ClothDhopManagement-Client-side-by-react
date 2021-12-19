import React, { useState, useEffect } from 'react'
import { Route, Switch, useRouteMatch, NavLink} from 'react-router-dom'
import UserImage1 from '../../../media/employee1.jpg'
import UserImage2 from '../../../media/employee2.jpg'
// import { PrivateRoute } from '../../PublicRoute/PublicRoute'
import './Messages.css'
import Inbox from './Messages/MessageDetail/Inbox'
import MessageDetail from './Messages/MessageDetail/MessageDetail'




const users = [{ 'name': 'Shajjad', 'msg': 'Hello, Sumon . How are you doing ?.....', 'image': UserImage1 }, { 'name': 'Shajjad', 'msg': 'Hello, Sumon . How are you doing ?.....', 'image': UserImage1 }, { 'name': 'Shajjad', 'msg': 'Hello, Sumon . How are you doing ?.....', 'image': UserImage1 }, { 'name': 'Shajjad', 'msg': 'Hello, Sumon . How are you doing ?.....', 'image': UserImage1 }, { 'name': 'Shajjad', 'msg': 'Hello, Sumon . How are you doing ?.....', 'image': UserImage1 }, { 'name': 'Shajjad', 'msg': 'Hello, Sumon . How are you doing ?.....', 'image': UserImage1 }]

function Message(props)
{
    const [click, setClick] = useState({
        append: false
    })
    const toggleClick = (index) => setClick({
        ...click,
        [index]: !click[index]
    })

    useEffect(() => {
        document.title = 'Message'
    })

    let { path, url } = useRouteMatch()

    return <div className="messenger-container">
    <div className="active-user">
        <div className="search-user">
            <input type="search" placeholder="Search here...."/>
        </div>
        <div className="uses-area">

            <ul>
                {users.map((user, index) => (
                    <li key={index}>
                    <i className="fas fa-ellipsis-h toggle-icon" onClick={() => toggleClick(index)}></i>
                    <NavLink to={`${url}`}>
                            <img src={user.image} alt="User" />
                            <span className="active-icon"></span>
                            <div className="user-msg">
                                <h3>{ user.name }</h3>
                                <small>{user.msg}</small>
                            </div>
                    </NavLink>
                    {click[index] && <div className="drop-down">
                        <a href="!#"><i className="far fa-folder-open"></i>{' '} Open</a>
                        <a href="!#"><i className="far fa-user"></i>{' '} Profile</a>
                        <a href="!#"><i className="fas fa-trash"></i>{' '} delete</a>
                    </div>}
                </li>
                ))}
                <li>
                    <i className="fas fa-ellipsis-h toggle-icon" onClick={() => toggleClick}></i>
                    <NavLink to={`${url}/inbox/12`}>
                            <img src={UserImage2} alt="User" />
                            <span className="active-icon"></span>
                            <div className="user-msg">
                                <h3>Shajjad</h3>
                                <small>Hi</small>
                            </div>
                    </NavLink>
                    {click && <div className="drop-down">
                        <a href="!#"><i className="far fa-folder-open"></i>{' '} Open</a>
                        <a href="!#"><i className="far fa-user"></i>{' '} Profile</a>
                        <a href="!#"><i className="fas fa-trash"></i>{' '} delete</a>
                    </div>}
                </li>
            </ul>
        
        </div>
    </div>
  
           
            <Switch>
                <Route path={`${path}/:topicId`} component={Inbox} />
                <Route path={path} component={MessageDetail} />
            </Switch>
   
</div>

}
export default Message