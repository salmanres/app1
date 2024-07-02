import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios';
import { Await, Link } from 'react-router-dom';

function HomePage() {

  const [data, setData] = useState("");

  const getData = () => {

    axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=0010364e3ce6d7a1d9099771b61cba0d").then((response) => {
      setData(response.data.results);
      console.log(response.data.results);
    })

  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <Fragment>
      <div className='container-fluid'>
        <div className='row'>
          {data.length > 0 ? (
            data.map((e) => {
              return (
                <div className='col-sm-2 col-12 mt-5'>
                  <div class="card">
                    <img src={"https://image.tmdb.org/t/p/w500" + e.poster_path} height={200} className='rounded-top' />
                    <div class="card-body">
                      <h6 class="card-title">{e.original_title}</h6>
                      <p class="card-text"><small class="text-body-secondary">{e.release_date}</small></p>
                    </div>
                  </div>
                </div>
              )
            })
          ) : <div>no data</div>}
        </div>
      </div>
    </Fragment>
  )
}

export default HomePage