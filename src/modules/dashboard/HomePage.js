import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios';
import { Await, Link } from 'react-router-dom';
import NowPlaying from '../shared/NowPlaying';
import TopRated from '../shared/TopRated';

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
          <div className='col-sm-12 col-12 mt-4 mb-2'>
            <h5 className='catbar'>UPCOMING MOVIES</h5>
          </div>
        </div>
        <div className='row  overflow-hidden'>
          {data.length > 0 ? (
            data.map((e) => {
              return (
                <div className='col-sm-2 col-12 mt-2'>
                  <div class="card">
                    <img src={"https://image.tmdb.org/t/p/w500" + e.poster_path} height={200} className='rounded-top' />
                    <Link to={`MovieDetails/` + e.id} className="card-body carddetails">
                      <h6 class="card-title">{e.original_title}</h6>
                      <p class="card-text"><small class="text-body-secondary">{e.release_date}</small></p>

                    </Link>
                  </div>
                </div>
              )
            })
          ) : <div>no data</div>}
        </div>
        <div className='row'>
          <div className='col-sm-12 col-12 mt-4 mb-2'>
            <h5 className='catbar'>MOVIES PLAYING NOW</h5>
          </div>
        </div>
        <NowPlaying />
        <div className='row'>
          <div className='col-sm-12 col-12 mt-4 mb-2'>
            <h5 className='catbar'>TOP RATED MOVIES</h5>
          </div>
        </div>
        <TopRated />
      </div>
    </Fragment>
  )
}

export default HomePage