import React, {useEffect} from 'react'
import './404-notFount.css'


function NotFound (){
    useEffect(() => {
        document.title = '404 - page not found !'
    })
    return <div className="not-found">
        <div className="not-found-message">
            <h1>Oops!</h1>
            <h2>404 - Page not found !</h2>
            <h3>The page you are looking for might have been removed or it's temporarily unavailable right now !</h3>
        </div>
    </div>
}
export default NotFound