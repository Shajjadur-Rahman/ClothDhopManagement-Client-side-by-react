import React from 'react'
import ContentWrapper from './ContentWrapper/ContentWrapper'
import Sidebar from './Sidebar/SideBar'
import Articles from './Article/Article'

const Main = (props) => {

   return <ContentWrapper hide={props.hide}>
            <Sidebar
                togglehide={props.togglehide}
                hide={props.hide}
            />
            <Articles/>
         </ContentWrapper>
}
export default Main