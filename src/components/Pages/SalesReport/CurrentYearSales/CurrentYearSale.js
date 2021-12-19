import React from 'react'
import {useHistory} from 'react-router-dom'


export const CurrentYearSale = ({sale, index}) => {

    const history = useHistory()
    const goSaleDetail = (month, year) => {
        history.push(`/sales/${month}/${year}/`)
    }

    return <tr style={{background: sale.sold_qty.toFixed(2) <= 0 ? 'rgb(39, 5, 39)' : null}}>
            <td style={{color: sale.sold_qty.toFixed(2) <= 0 ? '#fff': null}}>{index+1}</td>
            <td style={{color: sale.sold_qty.toFixed(2) <= 0 ? '#fff': null}}> {sale.month}</td>
            <td style={{color: sale.sold_qty.toFixed(2) <= 0 ? '#fff': null}}>{sale.sold_qty.toFixed(2)}</td>
            <td style={{color: sale.sold_qty.toFixed(2) <= 0 ? '#fff': null}}>{sale.purchasing_price.toFixed(2)}</td>
            <td style={{color: sale.sold_qty.toFixed(2) <= 0 ? '#fff': null}}>{sale.discount.toFixed(2)}</td>
            <td style={{color: sale.sold_qty.toFixed(2) <= 0 ? '#fff': null}}>{sale.sub_total.toFixed(2)}</td>
            <td style={{color: sale.sold_qty.toFixed(2) <= 0 ? '#fff': null}}>{sale.profit.toFixed(2)}</td>
            <td className="action">
                {
                    sale.sold_qty.toFixed(2) <= 0 ? (
                        <button className="action--btn btn--success" style={{cursor: 'not-allowed'}}>View</button> 
                    ) : (
                    <button className="action--btn btn--success" onClick={() => goSaleDetail(sale.month, sale.year)}>View</button> 
                 
                    
                    )
                }
                
            </td>
        </tr>
}
