import React from 'react'


 const AddStockItem = (props) => {
    
    const sizes = ["XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL"]
    const types = ["Ladies", "Gents", "Kids", "Others"]


    

    return <div className="custom-form">
                    <div className="page-header">
                        <h2>{props.edit ? `Updating ${props.product.name}` : "Add product"}</h2>
                        <strong>{ new Date().toLocaleDateString()}</strong>
                    </div>
         <form onSubmit={(event) => props.onSubmitHandler(event)} encType='multipart/form-data'>
         <div className="form--input--wrapper">
                <div className="form--input">
                    <label htmlFor="invoice">Select Import Invoice </label>
                    <select name="invoice" id="invoice" value={props.product.invoice ? props.product.invoice : ''} required={true} onChange={props.onChangeHandler} >
                        <option disabled={true}  value=''>Select Invoice</option>
                        {props.invoices && props.invoices.map(invoice => (
                            <option key={invoice.id} value={invoice.id}>{invoice.invoice_no}</option>
                        ))
                        }
                        
                    </select>
                </div>
                <div className="form--input">
                    <label htmlFor="company">Select Company </label>
                    <select name="company" id="company" value={props.product.company ? props.product.company : ''} required={true} onChange={props.onChangeHandler} >
                        <option disabled={true} value=''>Select Comapny</option>
                        {props.companies && props.companies.map(company => (
                            <option key={company.id} value={company.id}>{company.company_name}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="form--input--wrapper">
                <div className="form--input">
                    <label htmlFor="category">Select Product Category </label>
                    <select name="category" id="category" value={props.product.category ? props.product.category : ''} required={true} onChange={props.onChangeHandler} >
                        <option  disabled={true} value=''>Select Category</option>
                        {props.categories && props.categories.map(category => (
                            <option key={category.id} value={category.id}>{category.title}</option>
                        ))}
                    </select>
                </div>
                <div className="form--input">
                    <label htmlFor="size">Select Product Type </label>
                    <select name="p_type" id="p_type" value={props.product.p_type} required={true} onChange={props.onChangeHandler} >
                        <option disabled={true} value=''>Select Product Type</option>
                        {types.map((type, index) => (
                            <option value={type} key={index}>{type}</option>
                        ))}
                    </select> 
                     
                </div>
            </div>
            <div className="form--input--wrapper">
                <div className="form--input">
                    <label htmlFor="size">Select Product Size </label>
                    <select name="size" id="size" value={props.product.size}  required={false} onChange={props.onChangeHandler} >
                        <option disabled={true} value=''>Select Size</option>
                        {sizes.map((size, index) => (
                            <option value={size} key={index}>{size}</option>
                        ))}
                    </select>
                </div>
                <div className="form--input">
                    <label htmlFor="product_name">Input Product/Fabric Name </label>
                    <input type="text" name="name" id="product_name" value={props.product.name} required={true} onChange={props.onChangeHandler} placeholder='Product name'/>
                </div>
            </div>
            

            <div className="form--input--wrapper">
                <div className="form--input image__or__image_url">
                    <div className="file_input">
                        {
                            props.click ? 
                            <>
                            <label htmlFor="image_url">Input Image URL from another sources </label>
                            <input type="text" name="p_image_url" id="image_url" value={props.product.p_image_url} onChange={props.onChangeHandler} placeholder='https://......'/>
                            </>
                            :
                            <>
                            <label htmlFor="product_image">Choose Product Image </label>
                            <input type="file" name="p_image" id="product_image" onChange={props.imageHandler}/>
                            </>
                    
                        }
                    </div>
                    <button type="button" className="action--btn add__url__btn" onClick={() => props.toggleAdd()}>{props.click ? "Image" : "Image url"}</button>
                </div>
                <div className="form--input">
                    <label htmlFor="product_gsm">Input Fabric GSM </label>
                    <input type="text" name="gsm" id="product_gsm" value={props.product.gsm} required={false} onChange={props.onChangeHandler} placeholder='Fabric GSM'/>
                </div>
            </div>
            <div className="form--input--wrapper">
                <div className="form--input">
                    <label htmlFor="product_color">Input Product/Fabric Color </label>
                    <input type="text" name="product_color" id="product_color" value={props.product.product_color} required={false} onChange={props.onChangeHandler} placeholder='Product color'/>
                </div>
            </div>
            <div className="form--input--wrapper">
                <div className="form--input">
                    <label htmlFor="product_panna">Input Fabric panna/width </label>
                    <input type="text" name="panna" id="product_panna" value={props.product.panna} required={false} onChange={props.onChangeHandler} placeholder='Fabric panna/width'/>
                </div>
                <div className="form--input image__or__image_url">
                    <div className="file_input">
                        {
                            props.qtyConvert ? (
                                <>
                                <label htmlFor="product_len_qty">Input Fabric length in <span style={{color: 'red'}}>meter</span> </label>
                                <input type="number" name="len_qty" id="product_len_qty" value={props.product.len_qty_in_meter} required={false} onChange={props.qtyHandler} placeholder='Fabric length in meter'/>
                                </>
                            ) : (
                                <>
                                <label htmlFor="product_len_qty">Input Fabric length in <span style={{color: 'red'}}>yard</span> </label>
                                <input type="number" name="len_qty" id="product_len_qty" value={props.product.len_qty_in_yard} required={false} onChange={props.onChangeHandler} placeholder='Fabric length in yard'/>
                                </>
                            )
                        }
            
                    </div>   
                    <button type="button" className="action--btn add__url__btn" onClick={() => props.toggleConvert()}>{props.qtyConvert ? "Yard" : "Meter"}</button> 
                </div>   
            </div>
            <div className="form--input--wrapper">
                <div className="form--input">
                    <label htmlFor="product_quantity">Input Product quantity </label>
                    <input type="number" name="quantity" id="product_quantity" value={props.product.quantity} required={false} onChange={props.onChangeHandler} placeholder='00'/>
                </div>

                <div className="form--input">
                    <label htmlFor="product_unit_tag">Input product unit tag like <span style={{color: 'red'}}>"pieces"</span><span style={{color: 'red'}}>"inches"</span><span style={{color: 'red'}}>"meter"</span> etc </label>
                    <input type="text" name="unit_tag" id="product_unit_tag" value={props.product.unit_tag} onChange={props.onChangeHandler} required={true} placeholder='product unit tag like "pieces" "inches" "meter" etc'/>
                </div>
            </div>

            <div className="form--input--wrapper">
                <div className="form--input">
                    <label htmlFor="product_price">Input Product purchasing price per unit </label>
                    <input type="number" name="price" id="product_price" value={props.product.price} onChange={props.onChangeHandler} required={true} placeholder='0.00'/>
                </div>
                <div className="form--input">
                    <label htmlFor="product_min_sale_price">Input minimum sale price per unit </label>
                    <input type="number" name="min_sale_price" id="product_min_sale_price" value={props.product.min_sale_price} onChange={props.onChangeHandler} required={true} placeholder='0.00'/>
                </div>
            </div>
            <div className="form--footer">
                <button type="button" className="back" onClick={() => props.modalHide()}>Back</button>
                <button type="submit" className="submit">{props.edit ? "Update" : "Submit"}</button>
            </div>
         </form>
    </div>
}

export default AddStockItem