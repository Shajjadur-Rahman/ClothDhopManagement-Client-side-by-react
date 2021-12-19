import React from 'react'

// import UseEmployeeForm from './UseEmployeeForm'
import './AddEmployee.css'


const AddEmployee = ({
    click,
    errors,
    employee,
    addImage,
    modalHide,
    addImageUrl,
    imageHandler,
    onChangeHandler,
    onSubmitHandler}) => {

    const genders = ["Male", "Female", "Others"]


    return <div className="custom-form">
                    <div className="page-header">
                        <h2>Add new employee</h2>
                        <strong>{ new Date().toLocaleDateString()}</strong>
                    </div>
                <form onSubmit={onSubmitHandler} encType='multipart/form-data'>
                    <div className="form--input--wrapper">
                        <div className="form--input">
                            <label htmlFor="first_name">Input Employee First Name *</label>
                            {errors.first_name && <span style={{color: 'red', paddingBottom: '10px', display: 'block'}}>{errors.first_name}</span>}
                            <input type="text" name="first_name" id="first_name" value={employee.first_name} onChange={onChangeHandler} placeholder='First name'/>
                        </div>
                        <div className="form--input">
                            <label htmlFor="last_name">Input Employee Last Name *</label>
                            {errors.last_name && <span style={{color: 'red', paddingBottom: '10px', display: 'block'}}>{errors.last_name}</span>}
                            <input type="text" name="last_name" id="last_name" value={employee.last_name} onChange={onChangeHandler} placeholder='Last name'/>
                        </div>
                    </div>
                    <div className="form--input--wrapper">
                        <div className="form--input">
                            <label htmlFor="username">Input Employee Username *</label>
                            {errors.username && <span style={{color: 'red', paddingBottom: '10px', display: 'block'}}>{errors.username}</span>}
                            <input type="text" name="username" id="username" value={employee.username} onChange={onChangeHandler} placeholder='Username'/>
                        </div>
                        <div className="form--input">
                            <label htmlFor="email">Input Employee  Valid Email *</label>
                            {errors.email && <span style={{color: 'red', paddingBottom: '10px', display: 'block'}}>{errors.email}</span>}
                            <input type="email" name="email" id="email" value={employee.email} onChange={onChangeHandler} placeholder='Email'/>
                        </div>
                    
                    </div>
                    <div className="form--input--wrapper">
                        <div className="form--input">
                            <label htmlFor="password">Input Password  *</label>
                            {errors.password && <span style={{color: 'red', paddingBottom: '10px', display: 'block'}}>{errors.password}</span>}
                            <input type="password" name="password" id="password" autoComplete="off" value={employee.password} onChange={onChangeHandler} placeholder='Password'/>
                        </div>
                        <div className="form--input">
                            <label htmlFor="password2">Password confirm *</label>
                            {errors.password2 && <span style={{color: 'red', paddingBottom: '10px', display: 'block'}}>{errors.password2}</span>}
                            <input type="password" name="password2" id="password2" autoComplete="off" value={employee.password2} onChange={onChangeHandler} placeholder='Password confirm'/>
                        </div>
                    </div>

                    <div className="form--input--wrapper">
                        <div className="form--input">
                            <label htmlFor="phone">Input Employee Phone *</label>
                            {errors.phone && <span style={{color: 'red', paddingBottom: '10px', display: 'block'}}>{errors.phone}</span>}
                            <input type="text" name="phone" id="phone" value={employee.phone} onChange={onChangeHandler} placeholder='Phone no'/>
                        </div>
                        <div className="form--input">
                            <label htmlFor="nid_no">Input Employee NID No (Optional)</label>
                            <input type="text" name="nid_no" id="nid_no" value={employee.nid_no} onChange={onChangeHandler} placeholder='National ID (Optional)'/>
                        </div>
                    </div>
                    <div className="form--input--wrapper">
                        <div className="form--input">
                            <label htmlFor="facebook_link">Input Employee Facebook Link (Optional)</label>
                            <input type="text" name="facebook_link" id="facebook_link" value={employee.facebook_link} required={false} onChange={onChangeHandler} placeholder='Facebook link (Optional)'/>
                        </div>
                        <div className="form--input image__or__image_url">
                            <div className="file_input">
                                {
                                    click ? 
                                    <>
                                    <label htmlFor="profile_image_url">Input Image URL (Optional) </label>
                                    <input type="text" name="profile_image_url" id="profile_image_url" value={employee.profile_image_url} onChange={onChangeHandler} placeholder='https://......'/>
                                    </>
                                    :
                                    <>
                                    <label htmlFor="profile_image">Choose Profile Image (Optional) </label>
                                    <input type="file" name="profile_image" id="profile_image" onChange={imageHandler} placeholder='Profile image'/>
                                    </>
                            
                                }
                            </div>
                            <button type="button" className="action--btn add__url__btn" onClick={() => click ? addImage() : addImageUrl()}>{click ? "Image" : "Image url"}</button>
                        </div>
                    </div>

                    <div className="form--input--wrapper">
                        <div className="form--input">
                            <label htmlFor="gender">Select Gender </label>
                            {errors.gender && <span style={{color: 'red', paddingBottom: '10px', display: 'block'}}>{errors.gender}</span>}
                            <select name="gender"  value={employee.gender} id="gender"  onChange={onChangeHandler} >
                                <option disabled={true} value="">Select gender</option>
                                {genders.map((gender, index) => (
                                    <option value={gender} key={index}>{gender}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form--input">
                            <label htmlFor="salary">Input Employee Monthly Salary </label>
                            {errors.salary && <span style={{color: 'red', paddingBottom: '10px', display: 'block'}}>{errors.salary}</span>}
                            <input type="text" name="salary" id="salary" value={employee.salary} onChange={onChangeHandler} placeholder='Salary'/>
                        </div>
                    </div>
                    
                    <div className="form--input--wrapper">
                        <div className="form--input">
                            <label htmlFor="address">Input Employee Address </label>
                            {errors.address && <span style={{color: 'red', paddingBottom: '10px', display: 'block'}}>{errors.address}</span>}
                            <textarea className='textarea' cols='10' rows='5' name="address" id="address" value={employee.address} onChange={onChangeHandler} placeholder='Input employee address'></textarea>
                        </div>
                        
                    </div>
                    <div className="form--footer">
                        <button type="button" className="back" onClick={() => modalHide()}>Back</button>
                        <button type="submit" className="submit">Submit</button>
                    </div>
                </form>
    </div>
   

}
export default AddEmployee