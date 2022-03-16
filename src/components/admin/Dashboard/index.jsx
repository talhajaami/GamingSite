import React from 'react'
import Balance from './Balance'
import Emissions from './Emissions'
import PreviousTrades from './PreviousTrades'
import Footer from './Footer'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

const Dashboard = () => {
    return (
        <div id='wrapper'>
            <Sidebar />
            <div id='content-wrapper' class='d-flex flex-column'>
                <div id='content'>
                    <Navbar />
                    <div class='container-fluid'>
                        <div class='d-sm-flex align-items-center justify-content-between mb-4'>
                            <h1 class='h3 mb-0 text-gray-800'>Dashboard</h1>
                        </div>
                        <Balance />
                        <Emissions />
                        <PreviousTrades />
                    </div>
                    <Footer />
                </div>
            </div>
            <a class='scroll-to-top rounded' href='#page-top'>
                <i class='fas fa-angle-up'></i>
            </a>
        </div>
    )
}

export default Dashboard
