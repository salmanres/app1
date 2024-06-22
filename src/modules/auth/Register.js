import React, { Fragment } from 'react'
import { MdOutlineEmail } from 'react-icons/md'
import { RiLockPasswordLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

function Register() {
    return (
        <Fragment>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-lg-8 col-10 border shadow p-4 rounded mt-5'>
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
                                <input type='number' className='form-control' />
                            </div>
                        </div>
                        <div className='row mt-2'>
                            <div className='col-lg-6 col-12'>
                                <label className='form-label'>Date of Birth</label>
                                <input type='date' className='form-control' />
                            </div>

                            <div className='col-lg-6 col-12'>
                                <label className='form-label'>Gender</label><br />
                                <div class="form-check form-check-inline mt-1">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" value="male" />
                                    <label class="form-check-label">Male</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" value="female" />
                                    <label class="form-check-label">Female</label>
                                </div>
                            </div>
                        </div>
                        <div className='row mt-2'>
                            <div className='col-lg-6 col-12'>
                                <label className='form-label'>Fitness Goals</label>
                                <select className='form-select'>
                                    <option>lose weight</option>
                                    <option>lose fat, get toned</option>
                                    <option>lose postpartum weight</option>
                                    <option>deal with medical issues</option>
                                    <option>improve fitness level</option>
                                </select>
                            </div>

                            <div className='col-lg-6 col-12'>
                                <label className='form-label'>Activity Level</label>
                                <select className='form-select'>
                                    <option>I hardly do anything</option>
                                    <option>walks and exercise sometimes</option>
                                    <option>don't have any strategy</option>
                                    <option>Rockstar at my gym</option>
                                    <option>other activities</option>
                                </select>
                            </div>
                        </div>
                        <div className='row mt-2 justify-content-center text-center'>
                            <div className='col-lg-4 col-12'>
                                <button className='btn btn-primary w-100 mt-3 shadow'>REGISTER</button>
                                </div>
                                <p className='mt-3'>Already have an account? <Link to='/'>Login</Link></p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Register