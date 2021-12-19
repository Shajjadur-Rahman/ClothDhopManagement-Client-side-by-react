import React from 'react'
import { Link } from 'react-router-dom';

const DeactivatedProduct = ({
    product,
    activateProduct
}) => {
    return (
        <tr key={product.id} style={{background: product.quantity ? product.quantity : product.len_qty === 0 ? "rgb(39, 5, 39)": ""}}>
            <td style={{color: product.quantity ? product.quantity : product.len_qty === 0 ? "#fff" : ""}}>{product.product_id}</td>
            <td style={{color: product.quantity ? product.quantity : product.len_qty === 0 ? "#fff" : ""}}>{product.name}</td>
            <td style={{color: product.quantity ? product.quantity : product.len_qty === 0 ? "#fff" : ""}}>{product.category.title}</td>
            <td style={{color: product.quantity ? product.quantity : product.len_qty === 0 ? "#fff" : ""}}>{product.company.brand_name}</td>
            <td style={{color: product.quantity ? product.quantity : product.len_qty === 0 ? "#fff" : ""}}>{product.quantity ? product.quantity : product.len_qty}</td>
            {
                product.quantity ? (
                <td style={{color: product.quantity ? product.quantity : product.len_qty === 0 ? "#fff" : ""}}>{product.quantity === 1 ? `${product.unit_tag}` : `${product.unit_tag}s`}</td>
                ) : (
                <td style={{color: product.quantity ? product.quantity : product.len_qty === 0 ? "#fff" : ""}}>{product.len_qty === 1 ? `${product.unit_tag}` : `${product.unit_tag}s`}</td>
                )

            }
            <td style={{color: product.quantity ? product.quantity : product.len_qty === 0 ? "#fff" : ""}} title={`Company Contact Number ${product.company.contact_no}`}>{product.company.company_name}</td>
            <td>
                <div className="product-image">
                    <img src={product.p_image ? product.p_image : product.p_image_url} alt={product.name}/> 
                </div>
            </td>
            <td className='action'>   
                <button className="action--btn btn--warning" onClick={() => activateProduct(product)}>Activate</button>
                <Link to={`/stock/${product.name}/${product.id}`} className="action--btn btn--success">Detail</Link>
            </td>
    </tr> 

    )
}
export default DeactivatedProduct