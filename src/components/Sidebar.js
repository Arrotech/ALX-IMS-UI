import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SidebarOption from './SidebarOption'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import '../assets/css/Sidebar.css'


function Sidebar() {

    return (
        <div className="sidebar">
            <Link className="sidebar__links" to="/animations"><SidebarOption title="Animations" Icon={DoubleArrowIcon} /></Link>
            <Link className="sidebar__links" to="/manga"><SidebarOption title="Manga" Icon={CardTravelIcon} /></Link>
        </div>
    )
}

export default Sidebar
