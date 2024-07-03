import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios';
import { RxDividerVertical } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import UserDetails from './UserDetails';


function NewsApi() {
    const [newsData, setNewsData] = useState([]);

    const getNewsData = () => {
        axios.get("https://newsapi.org/v2/everything?q=india&from=2024-06-03&sortBy=publishedAt&apiKey=0556e36ff1f846618076fad808e81b7c")
            .then((response) => {
                setNewsData(response.data.articles); 
                console.log(response.data.articles);
            })
            .catch((error) => {
                console.error("Error fetching news data:", error);
            });
    }

    useEffect(() => {
        getNewsData();
    }, [])

    return (
        <Fragment>
            <div className='container-fluid'>
                <div className='row'>
                    {newsData.length > 0 ? (
                        newsData.map((article) => (
                            <div className='col-sm-3 col-12 mt-4'>
                                <div className="card">
                                    <img src={article.urlToImage} className="card-img-top g-0" alt={article.title} />
                                    <div className="card-body">
                                        <h5 className="card-title">{article.title}</h5>
                                        <p className="card-text">{article.description}</p>
                                        <Link to={`NewsDetails/` + article.title} className="btn btn-secondary">read more...</Link>
                                    </div>
                                </div>
                            </div>

                        ))
                    ) : <div>no data</div>}
                </div>
            </div>
        </Fragment>
    )
}

export default NewsApi