import React from 'react'


const Category = ({
      category,
      editCategory,
      role,
      deleteCategory,
      access}) => {

 

    return <tr key={category.id}>
    <td>{category.title}</td>
    <td>{category.company.company_name}</td>
    <td className="employee-action">
        {
          role ? (
          <button className="employee--btn btn--info" onClick={() => editCategory(category)}>Update</button>
          ) : (
            <button className="employee--btn btn--info" disabled={true} style={{cursor: 'not-allowed'}} title="You are not authorised to update!">Update</button>
          )
        }
        {
          role ? (
          <button className="employee--btn btn--warning" onClick={() => deleteCategory(category.id, access)}>Delete</button>
          ) : (
          <button className="employee--btn btn--warning" disabled={true} style={{cursor: 'not-allowed'}} title="You are not authorised to delete!">Delete</button>
          )
        }
    </td>
</tr>
}

export default Category