import React from 'react'
import { Link } from 'react-router-dom';


export default function CardItem({
    link,
    heading,
    amount
}) {
    return <div className='card--header'>
                <div className='card--top'>
                    <div className='card-top-header'>
                        <h2>{heading}</h2>
                        <h2 className='sale--icon'><i className="far fa-gem"></i></h2>
                    </div>
                    <p style={{color: 'rgb(233, 134, 5)'}}><i className="fas fa-dollar-sign"></i> {amount.toFixed(2)}</p>
                </div>
                <div className='card--bottom'>
                    <Link to={link}>See more <i className="fas fa-arrow-circle-right"></i></Link>
                </div>
            </div> 
}
