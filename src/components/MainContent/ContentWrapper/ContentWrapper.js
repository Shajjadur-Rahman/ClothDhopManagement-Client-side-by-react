import React, {memo} from 'react'
import './ContentWrapper.css'

const contentWrapper = (props) => (
    <main className={props.hide ? "container-body toggle" : "container-body"}>
        {props.children}
    </main>
)

export default memo(contentWrapper)