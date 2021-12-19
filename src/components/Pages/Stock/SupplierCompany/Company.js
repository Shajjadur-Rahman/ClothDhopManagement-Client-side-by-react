import React from 'react'
import {connect} from 'react-redux'


const Company = ({
  company, 
  editCompany, 
  deleteCompany,
  access,
  role}) => {


    return <tr key={company.id}>
    <td>{company.company_name}</td>
    <td>{company.brand_name}</td>
    <td>{company.contact_no}</td>
    <td>{company.address}</td>
    <td>{company.authorised_man}</td>
    <td>{company.auth_man_phone}</td>
    <td className="employee-action">
        {
          role ? (
            <button className="employee--btn btn--info" onClick={() => editCompany(company)}>Update</button>
          ) : (
            <button className="employee--btn btn--info" disabled={true} style={{cursor: 'not-allowed'}}>Update</button>
          )
        }
        {
          role ? (
            <button className="employee--btn btn--warning" onClick={() => deleteCompany(company.id, access)}>Delete</button>
          ) : (
            <button className="employee--btn btn--warning" disabled={true} style={{cursor: 'not-allowed'}}>Delete</button>
          )
        }
        
    </td>
</tr>
}
const mapStateToProps = state => ({
  user: state.AuthReducer.user
})
export default connect(mapStateToProps)(Company)