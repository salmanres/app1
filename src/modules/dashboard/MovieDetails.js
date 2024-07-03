import React, { Fragment, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { IoMdArrowRoundBack } from "react-icons/io";


function MovieDetails() {
    const { id } = useParams();

    const [movieData, setMovieData] = useState({});

    const getData = () => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=0010364e3ce6d7a1d9099771b61cba0d`)
            .then((response) => {
                setMovieData(response.data);
                console.log(response.data);
            })
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <Fragment>
            <div className="card mb-3 mx-3 mt-4">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={"https://image.tmdb.org/t/p/w500" + movieData.poster_path} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{movieData.title}</h5>
                            <p className="card-text">{movieData.overview}</p>
                            <p className="card-text">Release date : {movieData.release_date}</p>
                            <p className="card-text">Original language : {movieData.original_language}</p>
                            <p className="card-text">Budget / Revenue : ${movieData.budget} / ${movieData.revenue}</p>
                            <p className="card-text">Runtime : {movieData.runtime}</p>
                            <p className="card-text">Popularity: {movieData.popularity}</p>
                            <p className="card-text">IMDB ID : {movieData.imdb_id}</p>
                            <br/>
                            <br/>
                            <Link to={"/MainPage/HomePage"} className='backbutton'><IoMdArrowRoundBack className='backicon'/> </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default MovieDetails;
