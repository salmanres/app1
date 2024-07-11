import React, { Fragment } from 'react'
import { useForm } from 'react-hook-form';
import { MdOutlineEmail } from 'react-icons/md'
import { RiLockPasswordLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'





function RegisterPage() {
    return (
        <Fragment>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-lg-8 col-10 border shadow p-4 rounded mt-5'>
                        <form>
                            <h4 className='text-center text-primary'>REGISTER HERE</h4>
                            <div className='row mt-4'>
                                <div className='col-lg-6 col-12'>
                                    <label className='form-label'>Full Name</label>
                                    <input type='text' className='form-control' />
                                </div>
                                <div className='col-lg-6 col-12'>
                                    <label className='form-label'>Email</label>
                                    <input type='email' className='form-control' />
                                </div>
                            </div>
                            <div className='row mt-2'>
                                <div className='col-lg-6 col-12'>
                                    <label className='form-label'>Mobile</label>
                                    <input type='number' className='form-control' />
                                </div>
                                <div className='col-lg-6 col-12'>
                                    <label className='form-label'>Password</label>
                                    <input type='password' className='form-control' />
                                </div>
                            </div>
                            <div className='row mt-2'>
                                <div className='col-lg-6 col-12'>
                                    <label className='form-label'>Date of Birth</label>
                                    <input type='date' className='form-control' />
                                </div>

                                <div className='col-lg-6 col-12'>
                                    <label className='form-label'>Gender</label><br />
                                    <div className="form-check form-check-inline mt-1">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" value="male" />
                                        <label className="form-check-label">Male</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" value="female" />
                                        <label className="form-check-label">Female</label>
                                    </div>
                                </div>
                            </div>
                            <div className='row mt-2 justify-content-center text-center'>
                                <div className='col-lg-4 col-12'>
                                    <button type='submit' className='btn btn-primary w-100 mt-3 shadow'>REGISTER</button>
                                </div>
                                <p className='mt-3'>Already have an account? <Link to='/'>Login</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default RegisterPage