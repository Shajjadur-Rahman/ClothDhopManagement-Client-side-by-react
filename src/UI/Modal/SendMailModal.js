import React from 'react'
import './sendMailModal.css'

export const SendMailModal = (props) => {
    return (
        <div className={props.fullScreen ? 'mail_modal expand_modal' : props.minimize ? 'mail_modal minimize_modal' : 'mail_modal'} style={{
            transform: props.show ? 'scale(1)' : 'scale(0)',
            opacity: props.show ? '1' : '0'
        }}>
            {props.children}
        </div>
    )
}
