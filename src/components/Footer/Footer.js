import React from 'react'
import TextLoop from "react-text-loop";
import './Footer.css'


function Footer() {
    let date = new Date()
        return <footer className="footer">
                    <div className="footer-left">
                        <p>&copy;  All rights reserved Python delevoper Shajjad {date.toLocaleDateString()}</p>
                    </div>
                    <div className="footer-right">
                        <TextLoop springConfig={{ stiffness: 18, }} fade={true} adjustingSpeed={500}>
                           <p>For any kind of consultetion </p>
                           <p>contact with developer SR. Shajjad</p>
                           <p>Email: shaturngbd@gmail.com</p>
                           <p>Mobile: +8801785259895</p>
                           <a href='https://www.facebook.com/Shajjad143' >https://www.facebook.com/Shajjad143</a>
                        </TextLoop>
                    </div>
                </footer> 
}


export default Footer