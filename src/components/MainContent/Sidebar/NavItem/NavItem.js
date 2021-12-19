import { NavLink } from 'react-router-dom';

export const NavItem = (props) => {

    let {navMenuText, subNav} = props.item

    return (
        <>
            {
                subNav ? 
                (
                <>    
                <li className = 'nav__item toggle__nav__icon' onClick = {() => props.toggleClick(props.index)} style = {{ backgroundColor: props.click[props.index] ? '#538695' : '' }} title = {props.item.title}> <i className={props.item.icon}></i>{props.hide ? null : `${props.item.navMenuText}`} {props.click[props.index] ? <i className="fas fa-caret-up up__arrow"></i> : <i className="fas fa-caret-down down__arrow"></i>}</li>
                <div className = {props.click[props.index] ? 'dropdown_sidebar_nav_items show' : 'dropdown_sidebar_nav_items'}>
                        {
                            subNav.map((item, index1) => (
                                <NavLink key={index1} title={item.title} to={item.path} activeStyle={{backgroundColor: '#5cbfdd'}}> < i className = {item.icon}> </i>{item.navMenuText}</NavLink>
                            ))
                        }      
                </div>
                </>
                ) : ( 
                <li className = 'nav__item' >
                     < NavLink 
                     exact to = {props.item.path} 
                     activeStyle={{ backgroundColor: '#538695'}} 
                     title={props.item.title}><i className ={props.item.icon}> </i> 
                     {props.hide ? null : navMenuText} 
                     {props.item.nav_info_class && <span className={props.item.nav_info_class}>{props.total_employee ? props.total_employee : '0'}</span> }
                     </NavLink >
                </li> 
                )
            }
 

        </>
    )
}
