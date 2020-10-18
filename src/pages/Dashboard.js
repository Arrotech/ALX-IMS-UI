import React from 'react'
import '../assets/css/Dashboard.css'
import Jokes from '../components/Jokes'
import DashboardHeader from '../components/DashboardHeader'
import AnimeCollection from '../components/AnimeCollection'
import Manga from '../pages/Manga'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Films from './Films'
import Categories from '../pages/Categories'

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
                                <AnimeCollection />
                            </div>
                            <div className="dashboard__right">
                                <Categories />
                                <Jokes />
                            </div>
                        </div>
                    </Route>
                    <Route path="/manga">
                        <div className="dashboard__content">
                            <div className="dashboard__left">
                                <Manga />
                            </div>
                            <div className="dashboard__right">
                                <Categories />
                                <Jokes />
                            </div>
                        </div>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Dashboard
