import React from 'react'
import '../assets/css/Home.css'
import NavBar from '../components/NavBar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

function Home() {
    return (
        <div className="home">
            <NavBar/>
            <Banner/>
            <Footer/>
        </div>
    )
}

export default Home
