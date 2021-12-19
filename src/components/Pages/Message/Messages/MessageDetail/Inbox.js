import React from 'react'
import {useParams} from 'react-router-dom'

const Inbox = (props) =>
{
    let { topicId } = useParams();
    return <div className="messages">
        Inbox{ '  '}{topicId}
    </div>
}
export default Inbox