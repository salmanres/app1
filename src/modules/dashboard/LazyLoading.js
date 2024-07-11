import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios';


function LazyLoading() {

  const [photoData, setPhotoData] = useState();

  const getVideoData = () => {
    axios.get("https://jsonplaceholder.typicode.com/photos").then((response) => {
      console.log(response.data);
      setPhotoData(response.data);
    })
  }

  useEffect(() => {
    getVideoData();
  }, [])

  return (
    <Fragment>
      <div className='container-fluid'>
        <div className='row'>
          {photoData && photoData.length > 0 ? (
            photoData.map((e) => {
              return (
                <div className='col-sm-4 col-12'>
                </div>
              )
            })
          ) : <div>no data</div>}
        </div>
      </div>
    </Fragment>
  )
}

export default LazyLoading