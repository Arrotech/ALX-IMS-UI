import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import '../assets/css/DashboardHeader.css'
import Button from '@material-ui/core/Button'
import { getUser, removeUserSession } from '../Utils/Common';

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

            </div>
            <div className="dashboardHeader__right">
                <p>{user.username}</p>
                <Button className="dashboardHeader__logoutBtn" onClick={handleLogout}>Logout</Button>
            </div>
        </div>
    )
}

export default DashboardHeader
