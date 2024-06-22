import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

function Errorpage() {
  return (
    <Fragment>
        <div className='error-page'>
            <h1>404</h1>
            <h4>page not found</h4>
            <Link to="/" className='btn btn-danger'>Back to Home</Link>
        </div>
    </Fragment>
  )
}

export default Errorpage