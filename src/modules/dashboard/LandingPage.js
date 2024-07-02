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
                    <div className=' p-1'>
                        <div className='sidebar-logo'>
                            <Link to={"MainPage"}> DASHBOARD</Link>
                        </div>

                        {/* <!-- nav content --------------------> */}





                    </div>
                </aside>
                <div className='main'>
                    <nav className='navbar navbar-expand px-3 border-bottom'>
                        <button className='btn' id="sidebar-toggle" type='button'>
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
                                <Link to={"MainPage"}><h4>click here for main page</h4></Link>
                            </div>
                            <div className='row'>
                                <div className='col-12'>
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