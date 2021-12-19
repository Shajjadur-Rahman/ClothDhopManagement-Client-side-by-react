import React from 'react'

export const AddCompany = ({
     onChangeHandler,
     onSubmitHandler,
     company,
     edit,
     modalHide}) => {

    return <div className="custom-form">
                    <div className="page-header">
                        <h2>{edit ? "Upadte company" : "Add company"}</h2>
                        <strong>{ new Date().toLocaleDateString()}</strong>
                    </div>
         <form onSubmit={(event) => onSubmitHandler(event)} encType='multipart/form-data'>
            <div className="form--input--wrapper">
                <div className="form--input">
                    <input type="text" name="company_name" required={true} value={company.company_name} onChange={onChangeHandler} placeholder='Input company name'/>
                </div>
                <div className="form--input">
                    <input type="text" name="brand_name" required={true} value={company.brand_name} onChange={onChangeHandler} placeholder="Input company's branding name"/>
                </div>
            </div>
            <div className="form--input--wrapper">
                <div className="form--input">
                    <input type="text" name="contact_no" required={true} value={company.contact_no} onChange={onChangeHandler} placeholder="Input company's contact number"/>
                </div>
                <div className="form--input">
                    <input type="text" name="authorised_man" required={false} value={company.authorised_man} onChange={onChangeHandler} placeholder="Input company's authorized staff"/>
                </div>
            </div>
            <div className="form--input--wrapper">
                <div className="form--input">
                    <input type="text" name="auth_man_phone" required={false} value={company.auth_man_phone} onChange={onChangeHandler} placeholder="Input company's authorized staff contact number"/>
                </div>
            </div>

            <div className="form--input--wrapper">
                <div className="form--input">
                    <textarea rows="5" cols="10" name="address" className="textarea" value={company.address} required={false} onChange={onChangeHandler}placeholder="Input company address"></textarea>
                </div>
            </div>
            
            <div className="form--footer">
                <button type="button" className="back" onClick={modalHide}>Back</button>
                <button type="submit" className="submit">{edit ? "Update" : "Create"}</button>
            </div>
         </form>
    </div>
}
