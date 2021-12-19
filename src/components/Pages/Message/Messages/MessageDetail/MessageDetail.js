import React, { useState } from 'react'

import UserImage1 from '../../../../../media/employee1.jpg'



const MessageDetail = (props) =>
{

    const [display, setDisplay] = useState(false)
    const toggleDisplay = () => setDisplay(!display)

    return <div className="messages">
    <div className="msg-wrapper">
    <div className="msg-header">
        <div className="sender">
            <img src={UserImage1} alt="Sender"/>
        </div>
        <div className="header-right">
            <div className="msg-header-icon">
                <button className="msg--btn audio"><i className="fas fa-phone-alt"></i></button>
                <button className="msg--btn"><i className="fas fa-video"></i></button>
                <button className="msg--btn" onClick={toggleDisplay}><i class="fas fa-ellipsis-h"></i></button>
            </div>
            {display && <div className="drop-down">
                <a href="!#">Open</a>
                <a href="!#">Profile</a>
                <a href="!#">delete</a>
            </div>}
        </div>
    </div>
    <div className="msg-body">
        <div className="msg-item">
            <p> Hello, What about you Sumon ?Hello, What about you Sumon ? Hello, What about you Sumon ? Hello, What about you Sumon ?  </p>
            <small><i className="far fa-clock"></i>{ ' ' } 3/3/2021 8:35 am.</small>
        </div>
        <div className="msg-item outgoing">
            <p>Hello, What about you Sumon ? </p>
            <small><i className="far fa-clock"></i>{ ' ' } 3/3/2021 8:35 am.</small>
        </div>
        <div className="msg-item">
            <p>Hello, What about you Sumon ? </p>
            <small><i className="far fa-clock"></i>{ ' ' } 3/3/2021 8:35 am.</small>
        </div>
        <div className="msg-item outgoing">
            <p>Hello, What about you Sumon ?Hello, What about you Sumon ?Hello, What about you Sumon ?Hello, What about you Sumon ?Hello, What about you Sumon ?Hello, What about you Sumon ? </p>
            <small><i className="far fa-clock"></i>{ ' ' } 3/3/2021 8:35 am.</small>
        </div>
        <div className="msg-item">
            <p>Hello, What about you Sumon ? </p>
            <small><i className="far fa-clock"></i>{ ' ' } 3/3/2021 8:35 am.</small>
        </div>
        <div className="msg-item outgoing">
            <p>Hello, What about you Sumon ? </p>
            <small><i className="far fa-clock"></i>{ ' ' } 3/3/2021 8:35 am.</small>
        </div>
        <div className="msg-item">
            <p>Hello, What about you Sumon ? </p>
            <small><i className="far fa-clock"></i>{ ' ' } 3/3/2021 8:35 am.</small>
        </div>
        <div className="msg-item outgoing">
            <p>Hello, What about you Sumon ?Hello, What about you Sumon ?Hello, What about you Sumon ?Hello, What about you Sumon ?Hello, What about you Sumon ?Hello, What about you Sumon ? </p>
            <small><i className="far fa-clock"></i>{ ' ' } 3/3/2021 8:35 am.</small>
        </div>
        <div className="msg-item">
            <p>Hello, What about you Sumon ? </p>
            <small><i className="far fa-clock"></i>{ ' ' } 3/3/2021 8:35 am.</small>
        </div>
    </div>
    <div className="msg-footer">
        <div className="input">
            <input type="text" placeholder="Write you message here ...." />   
            <div className="input-icons">
                <button><i className="fas fa-microphone"></i></button>
                <button className="send--btn"><i className="fab fa-telegram-plane"></i></button>
            </div>
        </div>
    </div>
    </div>
</div>
}

export default MessageDetail