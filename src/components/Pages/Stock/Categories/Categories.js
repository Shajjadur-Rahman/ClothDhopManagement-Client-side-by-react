import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import ReactLoading from 'react-loading';
import { allCompanies } from './../../../../Services/Actions/CompanyActions';
import { allCategories, createCategory, updateCategory, deleteCategory } from './../../../../Services/Actions/CategoryActions';
import Category from './Category';
import { Modal } from '../../../../UI/Modal/Modal';
import AddCategory  from './AddCategory';








const Categories = ({
     loading,
     allCategories,
     createCategory,
     allCompanies,
     updateCategory,
     deleteCategory,
     companies,
     user,
     categories,
     access}) => {

    useEffect(() => {
        document.title = "Product Categories"
    })

    useEffect(() =>{
        allCategories(access)
    }, [allCategories, access])

    useEffect(() =>{
      allCompanies(access)
  }, [allCompanies, access])

    const [category, setCategory] = useState({
      id: null,
      company: null,
      title: ''
    })


    const clear = () => setCategory({
      id: null,
      company: null,
      title: ''
    })

    
    const [edit, setEdit] = useState(false)
    const [show, setShow] = useState(false)
    const modalOpen = () => setShow(true)
    const modalHide = () => {
      setShow(false)
      setEdit(false)
      clear()
    } 


    const onChangeHandler = event => {
      setCategory({
        ...category,
        [event.target.name]: event.target.value
      })
    }
    

  const onSubmitHandler = event => {
    event.preventDefault()
    let categoryObj = new FormData()
        categoryObj.append("company", category.company)
        categoryObj.append("title", category.title)
        if(edit){
          updateCategory(category, access)
          setShow(false)
          clear()
        }else{
          createCategory(categoryObj, access)
          setShow(false)
          clear()
        }
  }


  const editCategory = category => {
    setCategory({
      id: category.id,
      company: category.company.id,
      title: category.title
    })
    setEdit(true)
    modalOpen()
  }

  let role = user.user_type === "Admin"
return <>
    <Modal show={show}>
      <AddCategory 
        category={category} 
        onSubmitHandler={onSubmitHandler}
        onChangeHandler={onChangeHandler}
        modalHide={modalHide}
        edit={edit}
        companies={companies}
         />
    </Modal>

    <div className="page-header">
        <h2>All product <span>Category</span> </h2>
        <strong>{ new Date().toLocaleDateString()}</strong>
    </div>
    {loading ? (
      <ReactLoading style={{ height: '100px', width: '80px', margin: '80px auto', display: 'block'}} type='spin'/>
    ) : (
      <table className="data-table">
        <thead>
          <tr>
          <th scope="col">Category</th>
          <th scope="col">Company</th>
            <th scope="col">
              {
                role ? <button className="employee--btn btn--info" onClick={modalOpen}>Add</button> : <button className="employee--btn btn--info" disabled={true} style={{cursor: 'not-allowed'}} title="You are not authorised to create !">Add</button>
              }
                
              </th>
          </tr>
        </thead>
        <tbody>
         
         {
           categories && categories.map(category => (
            <Category key={category.id} category={category} editCategory={editCategory} role={role} access={access} deleteCategory={deleteCategory}/>
           ))
         }
          <tr>
            <th style={{ textAlign: 'center' }}>Total category : 3</th>
            <th colSpan="2" style={{textAlign: 'center'}}></th>
          </tr>
        </tbody>
      </table> 
    )}
    
     
</>
}

const mapStateToProps = state => ({
    categories: state.CategoryReducer.categories,
    loading: state.CategoryReducer.loading,
    companies: state.CompanyReducer.companies,
    user: state.AuthReducer.user,
    access: state.AuthReducer.access
})
export default connect(mapStateToProps, {allCompanies, allCategories, createCategory, updateCategory, deleteCategory})(Categories)