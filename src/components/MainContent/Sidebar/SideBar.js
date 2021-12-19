import React, { useState } from 'react'
import navData from './NavData/NavData'
import {NavItem} from './NavItem/NavItem'
import {MobileNavItem} from './NavItem/MobileNavItem'
import {connect} from 'react-redux'
import './SideBar.css'




const SideBar = ({
    user,
    hide,
    togglehide,
    total_employee
}) => {


    const [click, setClick] = useState({
        append: false
    })

    const toggleClick = index => setClick({

        [index]: !click[index]
    })


    return <>
            <aside className = "side-bar" >
                <div className = "toggle-icon" ><i className = "fas fa-bars" onClick = {togglehide} > </i> </div> 
                <div className = "side-bar-menu" >
                    <ul>  
                        {
                            navData.map((item, index) => {
                                return (
                                    <NavItem 
                                    key={index}
                                    hide={hide}
                                    item={item} 
                                    click={click} 
                                    index={index}
                                    toggleClick={toggleClick}
                                    total_employee={total_employee}/>
                                )
                            })
                        }
                    </ul>
                </div>  
            </aside>
            
            {/* For mobile navigation */}
            <aside className = { hide ? "mobile_sisebar toggle__hide" : "mobile_sisebar" }>
                <div className = "toggle-icon" ><i className = "fas fa-bars" onClick = {() => togglehide() } > </i> </div>
                 <div className = "side-bar-menu" >
                    <ul>  
                        {
                            navData.map((item, index) => {
                                return (
                                    <MobileNavItem 
                                    key={index}
                                    hide={hide}
                                    item={item} 
                                    click={click} 
                                    index={index}
                                    toggleClick={toggleClick}
                                    total_employee={total_employee}/>
                                )
                            })
                        }
                    </ul>
                </div>  
            </aside>
          </>  
}
const mapStateToProps = state => ({
    total_employee: state.employeeReducer.total_employee
})
export default connect(mapStateToProps, {})(SideBar)