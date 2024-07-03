import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function NowPlaying() {

    const [data, setData] = useState("");

    const getData = () => {

        axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=0010364e3ce6d7a1d9099771b61cba0d").then((response) => {
            setData(response.data.results);
            console.log(response.data.results);
        })

    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <Fragment>
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
        </Fragment>
    )
}

export default NowPlaying