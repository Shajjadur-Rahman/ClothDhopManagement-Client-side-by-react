import React, {useEffect, useMemo, useState}  from 'react'
import ReactHtmlParser from 'react-html-parser'
import {SendMailModal} from '../../../../UI/Modal/SendMailModal'
import SentMailForm from './SentMailForm'
import {sentEmail, allSentMails} from '../../../../Services/Actions/MailActions'
import ReactLoading from 'react-loading'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import './SentMail.css'



const SentMail = ({
    mails,
    loading,
    sentEmail,
    allSentMails
}) => {

    const [click, setClick] = useState(false)
    const toggleClick = () => setClick(!click)
    const [selectAll, setSelectAll] = useState(false)
    const toggleAllSelect = () => setSelectAll(!selectAll)



    useEffect(() => {
        document.title = "Sent mail list"
    }, [])

    const [sentMail, setSentMail] = useState({
        id: null,
        receiver: '',
        subject: '',
        email_body: ''
    })

    useEffect(() => {
        allSentMails()
    }, [allSentMails])

    const onChangeHandler = e => {
        setSentMail({
            ...sentMail,
            [e.target.name]: e.target.value
        }) 
        
    }

    const handleChange = e => {
        setSentMail({
            ...sentMail,
            email_body: e
        })
      }

    const [show, setShow] = useState(false)
    const [fullScreen, setFullScreen] = useState(false)
    const [minimize, setMinimize] = useState(false)

    const toggleMinimize = () => {
        setMinimize(!minimize)
        setFullScreen(false)
    }
    const togglScreen = () => {
        setFullScreen(!fullScreen)
        setMinimize(false)
    }
    const modalHide = () => {
        setShow(false)
        setFullScreen(false)
        setMinimize(false)
    }
    const modalShow = () => {
        setShow(true)
    }
    const sentMailClear = () => {
        setSentMail({
            id: null,
            receiver: '',
            subject: '',
            email_body: ''
        })
    }
    let date = useMemo(() => new Date(), [])

    // const onSubmit = event => {
    //     event.preventDefault()
    //     const mail_obj = new FormData()
    //           mail_obj.append('receiver', sentMail.receiver)
    //           mail_obj.append('subject', sentMail.subject)
    //           mail_obj.append('email_body', sentMail.email_body)
    //           mailImages.forEach((image_file) => {
    //             mail_obj.append('mailImages', image_file)
    //           })
    //     sentEmail(mail_obj)
    //     modalHide()
    // }



    const onSubmit = event => {
        event.preventDefault()
        const mail_obj = new FormData()
              mail_obj.append('receiver', sentMail.receiver)
              mail_obj.append('subject', sentMail.subject)
              mail_obj.append('email_body', sentMail.email_body)
        sentEmail(mail_obj)
        modalHide()
        sentMailClear()
    }

    return <>
            <SendMailModal show={show} fullScreen={fullScreen} minimize={minimize}>
                <SentMailForm 
                sentMail={sentMail}
                onSubmit={onSubmit}
                modalHide={modalHide}              
                fullScreen={fullScreen}
                togglScreen={togglScreen}
                handleChange={handleChange}
                toggleMinimize={toggleMinimize}
                onChangeHandler={onChangeHandler}
                />
            </SendMailModal>
       
            <div className="page-header">
                <h2>Sent mail list</h2>
                <strong>{date.toLocaleDateString()}</strong>
            </div>
            <div className='sent_mail_action_wrapper'>
                <button className="compose_btn" onClick={() => modalShow()}>+ Compose</button>
                <div className={click ? "sent_mail_action" : "sent_mail_action toggleClick"}>   
                    <button><input type='checkbox' onClick={() => toggleAllSelect()}/> {" "} All</button>             
                    <button><i className="fas fa-trash"></i></button>
                </div>
            </div>
            <div className="sent_mail_wrapper">
                {
                    loading ?  <ReactLoading style={{ height: '100px', width: '80px', margin: '80px auto', display: 'block'}} type='spin'/>
                    : (
                    <ul>
                        {mails.map(mail => (
                            <li>
                            <input type='checkbox' checked={selectAll ? true : click ? true : false} onClick={() => toggleClick()}/>
                            <p>To : {mail.receiver}</p>
                            <Link>{ReactHtmlParser(mail.email_body)}</Link>
                        </li>
                        ))}
                    </ul>
                    )
                }
                
            </div>
    </>
}
const mapStateToProps = state => ({
    loading: state.emailReducer.loading,
    mails: state.emailReducer.mails
})
export default connect(mapStateToProps, {sentEmail, allSentMails})(SentMail)