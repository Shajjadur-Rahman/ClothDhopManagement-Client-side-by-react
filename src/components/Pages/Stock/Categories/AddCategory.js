import React from 'react'




const AddCategory = ({
        onSubmitHandler,
        onChangeHandler,
        category,
        edit,
        modalHide,
        companies}) => {


    const {company} = category

    return <div className="custom-form">
                <div className="page-header">
                    <h2>Create category</h2>
                    <strong>{new Date().toLocaleDateString()}</strong>
                </div>
                <form onSubmit={onSubmitHandler}>
                        <div className="form--input--wrapper">
                            <div className="form--input">
                                <select name="company" value={category.comapny}  onChange={onChangeHandler}>
                                    <option disabled={true} selected={edit ? false : true} >Select Company{category.comapny}</option>
                                    {companies && 
                                       companies.map(comapny => (
                                        <option value={comapny.id} key={comapny.id} selected={comapny.id === company ? true : false}>{comapny.company_name}</option> 
                                       ))
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="form--input--wrapper">
                            <div className="form--input">
                                <input type="text" name="title" value={category.title} onChange={onChangeHandler} placeholder="Input product category"/>
                            </div>
                        </div>
                        <div className="form--footer">
                            <button type="button" className="back" onClick={() => modalHide()}>Back</button>
                            <button type="submit" className="submit">Create</button>
                        </div>
                </form>
            </div>
}

export default AddCategory