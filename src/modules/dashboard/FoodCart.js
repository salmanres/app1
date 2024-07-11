import React, { Fragment } from 'react'
import FoodData from '../shared/FoodData'

function FoodCart() {
  return (
    <Fragment>
      <div className='container-fluid mt-2'>
        <div className='row'>
          {
            FoodData.map((event) => {
              return (
                <div className='col-sm-3 col-12 px-2 pt-3'>
                  <div className="card">
                    <img src={event.imgdata} className="card-img-top foodcartimg" alt="..."/>
                      <div className="card-body">
                        <h5 className="card-title">{event.rname}</h5>
                        <p className="card-text my-0 py-0"><b>Price : </b> {event.price}/-</p>
                        <p className="card-text"><b>Rating :<span className='starfontcol'> {event.rating}</span></b></p>
                        <input type='button' className='btn btn-secondary my-0' value='ADD TO CART'/>
                      </div>
                  </div>
                </div>
              )
            })
          }

        </div>
      </div>
    </Fragment>
  )
}

export default FoodCart