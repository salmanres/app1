import React from 'react'
import { useSelector } from 'react-redux'

function HomePage2() {

  const count = useSelector((state)=>state.counter.value)

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-sm-10 col-12 navlogo m-5'>
          <h3>Counter Value: {count}</h3>
        </div>
      </div>
    </div>
  )
}

export default HomePage2