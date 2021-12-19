import React from 'react'
import { Link } from 'react-router-dom'
import userImage from '../../../../media/employee2.jpg'


 const Employee = ({employee, toggleHold, deleteEmployee, role, user_id}) => {
    return <tr key={employee.id} style={{ background : !employee.user.is_active && "rgb(39, 5, 39)"}}>
    <td style={{color: !employee.user.is_active && "#fff"}}>{employee.employee_no}</td>
    <td style={{color: !employee.user.is_active && "#fff"}}>{employee.user.username}</td>
    <td style={{color: !employee.user.is_active && "#fff"}}>{employee.phone}</td>
    <td style={{color: !employee.user.is_active && "#fff"}}>{employee.salary.toFixed(2)}</td>
    <td style={{color: !employee.user.is_active && "#fff"}}>
      <div className="product-image">
      {employee.profile_image ? 
        <img src={employee.profile_image} alt={employee.user.username} />
        : employee.profile_image_url ? <img src={employee.profile_image_url} alt={employee.user.username} /> : <img src={userImage} alt='Employee' />
      }
      </div>
      </td>
    <td className="employee-action">
      {role ? (
      <button className="employee--btn btn--info" onClick={() => toggleHold(employee.user, employee.id)}>{!employee.user.is_active ? "Enable": "Disable"}</button>
      ) : (<button className="employee--btn btn--info" disabled={true} style={{ cursor: 'not-allowed'}}>Disable</button>)}
        
      {role ? (
        <button className="employee--btn btn--warning" onClick={() => deleteEmployee(employee.user.id, employee)}>Delete</button>
      ) : (
        <button className="employee--btn btn--warning" disabled={true} style={{ cursor: 'not-allowed'}}>Delete</button>
      )}
        {
          user_id === employee.user.id || role ? (
            <Link className="employee--btn btn--success" to={`/employee-detail/${employee.user.username}}/${employee.id}`}>Detail</Link>
          ) : (
            <button className="employee--btn btn--success" disabled={true} style={{cursor: 'not-allowed', color: '#fff'}}>Detail</button>
          )
        }
          
    </td>
</tr>
}

export default Employee