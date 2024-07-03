import React, { Fragment, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { FiSearch } from "react-icons/fi";
import LoginModal from '../dashboard/ModalLogin';

function NavbarH() {


  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top shadow">
        <div className="container-fluid">
          <Link to={"/"} className='navlogo'><span>PRACTICE</span></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-sm-3 col-12 d-flex align-items-center justify-content-center'>
                </div>
                <div className='col-sm-4 col-12 d-flex align-items-center justify-content-center'>
                  <input type='search' className='form-control rounded-end-0 btn-outline-danger navsearchbar' placeholder='search here' />
                  <button className='btn btn-primary rounded-start-0 searchbutton bg-light'><FiSearch className='searchicon' /></button>
                </div>
                <div className='col-sm-3 col-12 d-flex align-items-center justify-content-center'>
                </div>
                <div className='col-sm-2 col-12 d-flex align-items-center justify-content-center'>
                  <button type="button" class="btn btn-outline-secondary me-2" onClick={openModal} >LOGIN</button>
                  <Link to={'RegisterPage'}type="button" class="btn btn-outline-secondary">SIGNUP</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <LoginModal show={showModal} handleClose={closeModal} />
      </nav>
    </Fragment>
  )
}

export default NavbarH