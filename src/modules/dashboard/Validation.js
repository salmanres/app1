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
        <div className='container-fluid p-5'>
          <div className='row'>
            <div className='col-sm-6 col-12'>
              <input type='text' className='form-control' placeholder='Name' {...register("name", { required: true })} />
              {errors.name && <p className='text-danger'>name is required</p>}
            </div>
            <div className='col-sm-6 col-12'>
              <input type='email' className='form-control' placeholder='Email' {...register("email", { required: true })} />
              {errors.email && <p className='text-danger'>email is required</p>}
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-6 col-12'>
              <input type='password' className='form-control' placeholder='Password' {...register("password",{required:true})}/>
              {errors.password && <p className='text-danger'>password is required</p>}
            </div>
            <div className='col-sm-6 col-12'>
              <button className='btn btn-primary w-100'>REGISTER</button>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-6 col-12'>

            </div>
            <div className='col-sm-6 col-12'>

            </div>
          </div>
        </div>
      </form>
    </Fragment>
  )
}

export default Validation