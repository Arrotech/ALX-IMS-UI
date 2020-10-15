import React from 'react'
import '../assets/css/Dashboard.css'
import Jokes from '../components/Jokes'
import DashboardHeader from '../components/DashboardHeader'
import AnimeCollection from '../components/AnimeCollection'
import Manga from '../pages/Manga'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Films from './Films'

function Dashboard() {

    return (
        <div className="dashboard">
            <Router>
                <DashboardHeader />
                <Switch>
                    <Route path="/dashboard"><Films /></Route>
                    <Route path="/animations">
                        <div className="dashboard__content">
                            <div className="dashboard__left">
                                <h1>Animations</h1>
                                <AnimeCollection />
                            </div>
                            <div className="dashboard__right">
                                <Jokes />
                            </div>
                        </div>
                    </Route>
                    <Route path="/manga"><Manga /></Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Dashboard
