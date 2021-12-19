import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux';
import ReactLoading from 'react-loading'
import { Modal } from '../../../../UI/Modal/Modal';
import { allCompanies, createCompany, updateComapny, deleteCompany } from './../../../../Services/Actions/CompanyActions';
import Company from './Company';
import { AddCompany } from './AddCompany';




const SupplierCompany = ({
     loading,
     companies,
     createCompany,
     updateComapny,
     deleteCompany,
     user,
     access,
     allCompanies}) => {

    useEffect(() => {
        document.title = "Supplier Companies"
    })

    useEffect(() => {
        allCompanies(access)
    }, [allCompanies, access])

    const [company, setCompany] = useState({
      id: null,
      company_name: '',
      brand_name: '',
      contact_no: '',
      address: '',
      authorised_man: '',
      auth_man_phone: ''
    })

    const clear = () => setCompany({
      id: null,
      company_name: '',
      brand_name: '',
      contact_no: '',
      address: '',
      authorised_man: '',
      auth_man_phone: ''
    })
    const [show, setShow] = useState(false)
    const [edit, setEdit] = useState(false)

    const modalShow = () => setShow(true)
    const modalHide = () => {
      setShow(false)
      setEdit(false)
      clear()
    }


    const onChangeHandler = event => {
        setCompany({
          ...company,
          [event.target.name]: event.target.value
        })
    }

    const onSubmitHandler = event => {
      event.preventDefault()
          if(edit){
            updateComapny(company, access)
            modalHide()
            clear()
            setEdit(false)
          }else{
            createCompany(company, access)
            modalHide()
            clear()

          }

    }

    const editCompany = company => {
      setCompany({
        id: company.id,
        company_name: company.company_name,
        brand_name: company.brand_name,
        contact_no: company.contact_no,
        address: company.address,
        authorised_man: company.authorised_man,
        auth_man_phone: company.auth_man_phone
      })
      setEdit(true)
      modalShow()
    }

    let role = user.user_type === "Admin"
    return <>
            <Modal show={show}>
                <AddCompany 
                modalHide={modalHide}
                edit={edit} 
                company={company} 
                onChangeHandler={onChangeHandler} 
                onSubmitHandler={onSubmitHandler}/>
            </Modal>
            <div className="page-header">
                <h2>All <span>Supplier Comapny</span> </h2>
                <strong>{ new Date().toLocaleDateString()}</strong>
            </div>
            {loading ? (
              <ReactLoading style={{ height: '100px', width: '80px', margin: '80px auto', display: 'block'}} type='spin'/>
            ) : (
              <table className="data-table">
                <thead>
                  <tr>
                  <th scope="col">Company Name</th>
                    <th scope="col">Brand Name</th>
                    <th scope="col">Contact Number</th>
                    <th scope="col">Company Address</th>
                    <th scope="col">Company Staff</th>
                    <th scope="col">Company Staff Phone</th>
                    <th scope="col">
                      {
                        role ? (
                            <button className="employee--btn btn--info" onClick={modalShow}>Add</button>
                        ) : (
                            <button className="employee--btn btn--info" disabled={true} style={{cursor: 'not-allowed'}}>Add</button>
                        )
                      }
                        
                      
                      </th>
                  </tr>
                </thead>
                <tbody>
                
                {
                  companies && companies.map(company => (
                    <Company key={company.id} company={company} editCompany={editCompany} role={role} deleteCompany={deleteCompany} access={access}/>
                  ))
                }
                  <tr>
                    <th colSpan="2" style={{ textAlign: 'center' }}>Total employee : 3</th>
                    <th>Total monthly salary</th>
                    <th style={{textAlign: 'center'}}></th>
                    <th colSpan="3"></th>
                  </tr>
                </tbody>
              </table> 
            )}   
</>
}

const mapStateToProps = state => ({
    companies: state.CompanyReducer.companies,
    loading: state.CompanyReducer.loading,
    user: state.AuthReducer.user,
    access: state.AuthReducer.access
})
export default connect(mapStateToProps, {allCompanies, createCompany, updateComapny, deleteCompany})(SupplierCompany)