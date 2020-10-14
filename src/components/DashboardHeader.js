import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import '../assets/css/DashboardHeader.css'
import Button from '@material-ui/core/Button'
import { getUser, removeUserSession } from '../Utils/Common';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import { Link } from 'react-router-dom'
import CloseIcon from '@material-ui/icons/Close';
import Sidebar from '../components/Sidebar'

function DashboardHeader() {
    const user = getUser();

    const history = useHistory()

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    const handleLogout = () => {
        removeUserSession();
        history.push('/login')
    }

    return (
        <div>
            <div className="dashboardHeader">
                <div className="dashboardHeader__left">
                    <Link className="dashboardHeader__menuIcon" to="#"><MenuIcon onClick={showSidebar} /></Link>
                    <p>ALXIMS</p>
                </div>
                <div className="dashboardHeader__center">
                    <input type="text" placeholder="Search..." />
                    <SearchIcon className="dashboardHeader__searchIcon" />
                </div>
                <div className="dashboardHeader__right">
                    <p>Animations</p>
                    <p>Manga</p>
                    <p>Categories</p>
                    <div className="dashboardHeader__user">
                        <span className="dashboardHeader__active"><RadioButtonCheckedIcon /></span>
                        <p>{user.username}</p>
                    </div>
                    <Button className="dashboardHeader__logoutBtn" onClick={handleLogout}>Logout</Button>
                </div>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul onClick={showSidebar}>
                    <Link className="dashboardHeader__close" to="#"><CloseIcon /></Link>
                    <Sidebar />
                </ul>
            </nav>
        </div>
    )
}

export default DashboardHeader
