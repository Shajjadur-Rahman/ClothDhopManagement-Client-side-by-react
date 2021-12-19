import React from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import './SentMailForm.css'







const SentMailForm = ({
    onSubmit,
    sentMail,
    modalHide,
    fullScreen,
    togglScreen, 
    handleChange,
    toggleMinimize,
    onChangeHandler,
    
}) => {


    return <>
    
            <div className='mail__form__container'>
                    <div className='form_header'>
                        <div className='header__text'>
                            <p>New Message</p>
                        </div>
                        <div className='form_action'>
                            <button type='button' title='Minimize' onClick={toggleMinimize}>--</button>
                            {fullScreen ? <button type='button' onClick={() => togglScreen()} title='Exit full screen'><i className="fas fa-compress-alt"></i></button> : <button  title='Full screen' type='button' onClick={() => togglScreen()}><i className="fas fa-expand-alt"></i></button>}
                            <button type='button' title='Close' onClick={modalHide}>X</button>
                        </div>
                    </div>
                <form className='mail__form' onSubmit={onSubmit} encType='multipart/form-data'>        
                    <input type='text' placeholder='Recipients' name='receiver' value={sentMail.receiver} onChange={onChangeHandler} style={{width: fullScreen ? '97%' : ''}}/>
                    <input type='text' placeholder='Subject' name='subject' value={sentMail.subject} onChange={onChangeHandler} style={{width: fullScreen ? '97%' : ''}}/>
                   
                    <div className='textarea'>
                    <ReactQuill
                        modules={SentMailForm.modules}
                        formats={SentMailForm.formats}
                        onChange={handleChange}
                        value={sentMail.email_body}
                    />
                    </div>  
              
                    <div className='send_mail_action'>
                        <button type='submit' className='mail_btn mail_submit_btn'>Send</button>
                    </div> 
                    
                </form>
            </div>
           
        </>
}
export  default SentMailForm

SentMailForm.modules = {
    toolbar: [
        [{header: '1'}, {header: '2'}, {header: [3, 4, 5, 6]}, {font: []}],
        [{size: []}],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{list: 'ordered'}, {list: 'bullet'}],
        ['link', 'image', 'video'],
        ['clean'],
        ['code-block']
    ]
}
SentMailForm.formats = [
            'header',
            'font',
            'size',
            'bold',
            'italic',
            'underline',
            'strike',
            'blockquote',
            'list',
            'bullet',
            'link',
            'image',
            'video',
            'code-block',
        ]
