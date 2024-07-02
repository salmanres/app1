import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaListUl } from "react-icons/fa";
import { MdContactPage } from "react-icons/md";


function LandingPage() {
    const sidebarToggle = document.querySelector("#sidebar-toggle");
    function sideToggle() {
        document.querySelector("#sidebar").classList.toggle("collapsed");
    }
    return (
        <Fragment>
            <div className='wrapper'>
                <aside id="sidebar">
                    <div className='h-100 p-1'>
                        <div className='sidebar-logo'>
                            <Link to={"MainPage"}><FaListUl className='icond' /> DASHBOARD</Link>
                        </div>

                        {/* <!-- nav content --------------------> */}





                    </div>
                </aside>
                <div className='main'>
                    <nav className='navbar navbar-expand px-3 border-bottom'>
                        <button className='btn' id="sidebar-toggle" type='button' onClick={sideToggle}>
                            <span className='navbar-toggler-icon'></span>
                        </button>

                        <div className='navbar-collapse navbar'>
                            <ul className='navbar-nav'>
                                <li className='nav-item dropdown'>
                                    <Link to={"/"} data-bs-toggle="dropdown" className='nav-icon pe-md-0'>
                                        <img src='https://i.pinimg.com/564x/f9/4e/7f/f94e7f79e78d20d8dc8487e3b6a19984.jpg' className='avatar image-fluid rounded' />
                                    </Link>
                                    <div className='dropdown-menu dropdown-menu-end'>
                                        <Link to={"/"} className='dropdown-item'>Profile</Link>
                                        <Link to={"/"} className='dropdown-item'>Settings</Link>
                                        <Link to={"/"} className='dropdown-item'>Logout</Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <main className='content px-3 py-2'>
                        <div className='container-fluid'>
                            <div className='mb-3'>
                                <h4>admin dashboard</h4>
                            </div>
                            <div className='row'>
                                <div className='col-12'>
salman
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </Fragment>
    )
}

export default LandingPage