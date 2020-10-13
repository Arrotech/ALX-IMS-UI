import React from 'react'
import '../assets/css/Dashboard.css'
import Jokes from '../components/Jokes'
import DashboardHeader from '../components/DashboardHeader'
import AnimeCollection from '../components/AnimeCollection'

function Dashboard() {

    return (
        <div className="dashboard">
            <DashboardHeader />
            <div className="dashboard__content">
                <div className="dashboard__left">
                    <h1>Animations</h1>
                    <AnimeCollection/>
                </div>
                <div className="dashboard__right">
                    <Jokes />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
