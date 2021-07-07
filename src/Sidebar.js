import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import './sidebar.css'

const Sidebar = () => {
    const user = useSelector(selectUser)
    const recentItem = (topic) => ( <
        div className = "sidebar__recentItem" >
        <
        span className = "sidebar__hash" > # < /span> <
        p > { topic } < /p> <
        /div>
    )

    return ( <
        div className = "sidebar" >
        <
        div className = "sidebar__top" >
        <
        img src = "https://image.freepik.com/free-photo/abstract-color-powder-explosion-white-background-freeze-motion-dust-splash_36326-1805.jpg"
        alt = "backgroundpicture" / >
        <
        Avatar src = { user.photoURL }
        className = "sidebar__avatar" > { user.email[0] } < /Avatar> <
        h2 > { user.displayName } < /h2> <
        h4 > { user.email } < /h4> <
        /div> <
        div className = "sidebar__stats" >
        <
        div className = "sidebar__stat" >
        <
        p > who viewed you < /p> <
        p className = "sidebar__statNumber" > 2, 344 < /p> <
        /div> <
        div className = "sidebar__stat" >
        <
        p > who viewed you < /p> <
        p className = "sidebar__statNumber" > 2, 344 < /p> <
        /div> <
        /div> <
        div className = "sidebar__bottom" >
        <
        p > Recent < /p> { recentItem('reactJS') } { recentItem('programming') } { recentItem('softwareEngineering') } { recentItem('softwareDesign') } <
        /div> <
        /div>
    )
}

export default Sidebar