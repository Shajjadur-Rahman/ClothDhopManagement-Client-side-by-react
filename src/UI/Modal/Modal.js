import React from 'react'
import './Modal.css'
import BackDrop from './../BackDrop/BackDrop';


export const Modal = (props) => {
    return (
        <>
        <BackDrop show={props.show}/>
        <div className="modal" style={{
            transform: props.show ? 'scale(1)' : 'scale(0)',
            opacity: props.show ? '1' : '0'
        }}>
            {props.children}
        </div>
        </>
    )
}
