import React, {Fragment, useEffect, useState, useMemo} from 'react'
import {Link} from 'react-router-dom'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default function CurrentMonthSale() {
    const monthName = [
        "January", "February", "March",
        "April", "May", "June",
        "July", "August", "September",
        "October", "November", "December"
    ];
    const [startDate, setStartDate] = useState(new Date());
    let date = useMemo(() => new Date(), [])
    useEffect(() => {
        document.title = 'Sales report'
    }, [])



    return (
        <Fragment>
            <div className="page-header">
                <h2>Sales report in {monthName[date.getMonth()]} {date.getFullYear()}</h2>
                <strong>{date.toLocaleDateString()}</strong>
            </div>
            <table className="data-table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col"><DatePicker selected={startDate} onChange={date => setStartDate(date)}/></th>
                        <th scope="col">SKU / Store Qty</th>
                        <th scope="col">Product</th>
                        <th scope="col">Sold</th>
                        <th scope="col">Price</th>
                        <th scope="col">Profit</th>
                        <th scope="col"><button className="employee--btn btn--info add--btn">Add</button></th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>05/02/2021 1:30 pm</td>
                    <td>1000 pcs</td>
                    <td>T-Shirt</td>
                    <td>20</td>
                    <td>10500.00</td>
                    <td>1500.00</td>
                    <td className="action">
                        <button className="action--btn btn--success">
                            <Link to='./sales-detail'>View</Link>
                        </button> 
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>05/02/2021 1:30 pm</td>
                    <td>1000 pcs</td>
                    <td>T-Shirt</td>
                    <td>20</td>
                    <td>10500.00</td>
                    <td>1500.00</td>
    
                    <td className="action">
                    <button className="action--btn btn--success">View</button>
                    </td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>05/02/2021 1:30 pm</td>
                    <td>1000 pcs</td>
                    <td>T-Shirt</td>
                    <td>20</td>
                    <td>10500.00</td>
                    <td>1500.00</td>
                    <td className="action">
                    <button className="action--btn btn--success">View</button>   
                    </td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>05/02/2021 1:30 pm</td>
                    <td>1000 pcs</td>
                    <td>T-Shirt</td>
                    <td>20</td>
                    <td>10500.00</td>
                    <td>1500.00</td>
                    <td className="action">
                    <button className="action--btn btn--success">View</button>   
                    </td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>05/02/2021 1:30 pm</td>
                    <td>1000 pcs</td>
                    <td>T-Shirt</td>
                    <td>20</td>
                    <td>10500.00</td>
                    <td>1500.00</td>
                    <td className="action">
                    <button className="action--btn btn--success">View</button>  
                    </td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>05/02/2021 1:30 pm</td>
                    <td>1000 pcs</td>
                    <td>T-Shirt</td>
                    <td>20</td>
                    <td>10500.00</td>
                    <td>1500.00</td>
                    <td className="action">
                    <button className="action--btn btn--success">View</button>  
                    </td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>05/02/2021 1:30 pm</td>
                    <td>1000 pcs</td>
                    <td>T-Shirt</td>
                    <td>20</td>
                    <td>10500.00</td>
                    <td>1500.00</td>
                    <td className="action">
                    <button className="action--btn btn--success">View</button>  
                    </td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>05/02/2021 1:30 pm</td>
                    <td>1000 pcs</td>
                    <td>T-Shirt</td>
                    <td>20</td>
                    <td>10500.00</td>
                    <td>1500.00</td>
                    <td className="action">
                    <button className="action--btn btn--success">View</button> 
                    </td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>05/02/2021 1:30 pm</td>
                    <td>1000 pcs</td>
                    <td>T-Shirt</td>
                    <td>20</td>
                    <td>10500.00</td>
                    <td>1500.00</td>
                    <td className="action">
                    <button className="action--btn btn--success">View</button>  
                    </td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>05/02/2021 1:30 pm</td>
                    <td>1000 pcs</td>
                    <td>T-Shirt</td>
                    <td>20</td>
                    <td>10500.00</td>
                    <td>1500.00</td>
                    <td className="action">
                    <button className="action--btn btn--success">View</button> 
                    </td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>05/02/2021 1:30 pm</td>
                    <td>1000 pcs</td>
                    <td>T-Shirt</td>
                    <td>20</td>
                    <td>10500.00</td>
                    <td>1500.00</td>
                    <td className="action">
                    <button className="action--btn btn--success">View</button> 
                    </td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>05/02/2021 1:30 pm</td>
                    <td>1000 pcs</td>
                    <td>T-Shirt</td>
                    <td>20</td>
                    <td>10500.00</td>
                    <td>1500.00</td>
                    <td className="action">
                    <button className="action--btn btn--success">View</button>
                    </td>
                </tr>
                <tr>
                    <th colSpan='4'>Total expense in this month</th>
                    <th></th>
                    <th>30000.00</th>
                    <th></th>
                    <th></th>
                </tr>
                </tbody>
            </table>
        </Fragment>
    )
}
