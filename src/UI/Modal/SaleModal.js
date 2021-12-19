import React from 'react'
import BackDrop from './../BackDrop/BackDrop';

export const SaleModal = (props) => {
    return (
        <>
        <BackDrop show={props.show}/>
        <div className="modal" style={{
                        transform: props.show ? 'translatex(0)' : 'translatex(200%)',
                        opacity: props.show ? '1' : '0'
        }}>
            {props.children}
        </div>
        </>
    )
}
