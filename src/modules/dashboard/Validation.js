import React, { Fragment } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { json } from 'react-router-dom';

const data = JSON.parse(localStorage.getItem("userData")) || [];

function Validation() {

  const { register, handleSubmit, watch, formState: { errors }, } = useForm()
  const onSubmit = (event) => {
    data.push(event);
    console.log(data);
    localStorage.setItem("userData", JSON.stringify(data));
    alert("registration successful");
  }


  return (
    <Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='container-fluid p-5 rounded'>
          <div className='row '>
            <div className='col-sm-6 col-12'>
              <img className='h-100' src='https://img.freepik.com/free-photo/blue-office-stationery-set-with-laptop_23-2147843325.jpg' alt="register..." />
            </div>
            <div className='col-sm-6 col-12'>
              <input type='text' className='form-control mt-4' placeholder='Full Name' {...register("name", { required: true })} />
              {errors.name && <p className='text-danger '>full name is required</p>}
              <input type='email' className='form-control mt-4' placeholder='Email ID' {...register("email", { required: true })} />
              {errors.email && <p className='text-danger'>email is required</p>}
              <input type='number' className='form-control mt-4' placeholder='Mobile number' {...register("mobile", { required: true })} />
              {errors.mobile && <p className='text-danger'>mobile number is required</p>}
              <input type='password' className='form-control mt-4' placeholder='Password' {...register("password", { required: true })} />
              {errors.password && <p className='text-danger mt-4'>password is required</p>}
              <label className='form-label mt-2'>Date of Birth</label>
              <input type='date' className='form-control ' {...register("dob", { required: true })} />
              {errors.dob && <p className='text-danger mt-4'>dob is required</p>}
              <input type='text' className='form-control mt-4' placeholder='Address' {...register("address", { required: true })} />
              {errors.address && <p className='text-danger'>address is required</p>}
              <button className='btn btn-secondary w-100 my-4'>REGISTER</button>
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  )
}

export default Validation