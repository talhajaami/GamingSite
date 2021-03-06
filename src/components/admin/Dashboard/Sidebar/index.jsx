import React from 'react'

const index = () => {
    return (
        <ul
            class='navbar-nav bg-gradient-primary sidebar sidebar-dark accordion'
            id='accordionSidebar'
        >
            <a
                class='sidebar-brand d-flex align-items-center justify-content-center'
                href='index.html'
            >
                <div class='sidebar-brand-icon rotate-n-15'>
                    <i class='fas fa-laugh-wink'></i>
                </div>
                <div class='sidebar-brand-text mx-3'></div>
            </a>

            <hr class='sidebar-divider my-0' />

            <li class='nav-item active'>
                <a class='nav-link' href='index.html'>
                    <i class='fas fa-fw fa-tachometer-alt'></i>
                    <span>Dashboard</span>
                </a>
            </li>

            <hr class='sidebar-divider' />

            <li class='nav-item'>
                <a class='nav-link' href='charts.html'>
                    <i class='fas fa-fw fa-user'></i>
                    <span>Profile</span>
                </a>
            </li>

            <li class='nav-item'>
                <a class='nav-link' href='charts.html'>
                    <i class='fas fa-fw fa-chart-area'></i>
                    <span>Ads</span>
                </a>
            </li>

            <li class='nav-item'>
                <a class='nav-link' href='tables.html'>
                    <i class='fas fa-fw fa-table'></i>
                    <span>Help</span>
                </a>
            </li>

            {/* <div class='text-center d-none d-md-inline'>
          <button class='rounded-circle border-0' id='sidebarToggle'></button>
        </div> */}
        </ul>
    )
}

export default index
