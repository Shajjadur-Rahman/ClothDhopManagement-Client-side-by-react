import React from 'react'

const InvoiceRelatedItem = ({
    index,
    invoiceProduct
}) => {
    return invoiceProduct && <tr>
    <td>{index + 1}</td>
    <td>{invoiceProduct.name}</td>
    <td>{invoiceProduct.price.toFixed(2)}</td>
    <td>{invoiceProduct.size ? invoiceProduct.size : "Null"}</td>
    <td>{invoiceProduct.p_type ? invoiceProduct.p_type : "Null"}</td>
    <td>{invoiceProduct.color ? invoiceProduct.color : "Null"}</td>
    <td>{invoiceProduct.company.company_name}</td>
    <td>{invoiceProduct.category.title}</td>
    <td>{invoiceProduct.gsm ? invoiceProduct.gsm : "Null"}</td>
    <td>{invoiceProduct.panna ? invoiceProduct.panna : "Null"}</td>
    <td>{invoiceProduct.quantity ? invoiceProduct.quantity : invoiceProduct.len_qty}</td>
    <td>{invoiceProduct.unit_tag}</td>
    <td>
        <div className="product-image">
                <img src={invoiceProduct.p_image ? invoiceProduct.p_image : invoiceProduct.p_image_url} alt={invoiceProduct.name}/> 
        </div>
    </td>
</tr>
}
export default InvoiceRelatedItem