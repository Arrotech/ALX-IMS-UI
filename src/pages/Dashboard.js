import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import '../assets/css/Dashboard.css'
import Button from '@material-ui/core/Button'

function Dashboard() {

    const history = useHistory()

    const handleLogout = () =>{
        history.push('/login')
    }

    return (
        <div className="dashboard">
            <Button className="dashboard__logoutBtn" onClick={handleLogout}>Logout</Button>
        </div>
    )
}

export default Dashboard
