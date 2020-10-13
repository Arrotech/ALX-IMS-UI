import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import '../assets/css/DashboardHeader.css'
import Button from '@material-ui/core/Button'
import { getUser, removeUserSession } from '../Utils/Common';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';

function DashboardHeader() {
    const user = getUser();

    const history = useHistory()

    const handleLogout = () => {
        removeUserSession();
        history.push('/login')
    }

    return (
        <div className="dashboardHeader">
            <div className="dashboardHeader__left">
                <MenuIcon/>
                <p>ALXIMS</p>
            </div>
            <div className="dashboardHeader__center">
                <input type="text" placeholder="Search..."/>
                <SearchIcon className="dashboardHeader__searchIcon"/>
            </div>
            <div className="dashboardHeader__right">
                <p>Animations</p>
                <p>Manga</p>
                <p>Categories</p>
                <div className="dashboardHeader__user">
                    <span className="dashboardHeader__active"><RadioButtonCheckedIcon/></span>
                    <p>{user.username}</p>
                </div>
                <Button className="dashboardHeader__logoutBtn" onClick={handleLogout}>Logout</Button>
            </div>
        </div>
    )
}

export default DashboardHeader
