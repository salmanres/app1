import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from 'react-router-dom';


function Login() {
    return (
        <Fragment>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-lg-4 col-10 border shadow p-4 rounded mt-5'>
                        <h4 className='text-center text-primary mb-4 mt-4'>LOGIN HERE</h4>
                        <label className='form-label' m-2><MdOutlineEmail/>Email</label>
                        <input type="text" className="form-control" placeholder="Enter Email" />
                        <label className='form-label'><RiLockPasswordLine/>Password</label>
                        <input type="password" className="form-control" placeholder="Enter Password" />
                        <label className='form-label'><input type='checkbox' className='form-check-input mt-2' />Remember me</label>
                        <button className='btn btn-primary w-100 mt-3 shadow'>Login</button>
                        <p className='mt-3'>Don't have an account? <Link to='/register'>Register</Link></p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Login