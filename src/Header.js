import React from 'react'
import './header.css'
import SearchIcon from '@material-ui/icons/Search'
import HeaderOption from './HeaderOption'
import HomeIcon from '@material-ui/icons/Home'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat'
import NotificationsIcon from '@material-ui/icons/Notifications'
import AppsIcon from '@material-ui/icons/Apps'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import { useDispatch } from 'react-redux'
import { auth } from './firebase'
import { logout } from './features/userSlice'

const Header = () => {
    const dispatch = useDispatch()
    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut()
    }
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://cdn.freelogovectors.net/wp-content/uploads/2020/01/linkedin-logo.png" alt=""/>
                <div className="header__search">
                    <SearchIcon/>
                    <input type="text" placeholder="Search"/>
                </div>
            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <HeaderOption avatar={true} title="Me" onClick={logoutOfApp} />
                <HeaderOption Icon = {AppsIcon} title="Apps"  ArrowDown={ArrowDropDownIcon} />
            </div>
        </div>
    )
}

export default Header
