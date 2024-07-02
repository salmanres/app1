import React from 'react'
import axios from 'axios';
import { Fragment, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';


function NewsDetails() {
    const { title } = useParams();
    const [newsData, setNewsData] = useState();

    const getNewsData = () => {
        axios.get("https://newsapi.org/v2/everything?q=tesla&from=2024-06-02&sortBy=publishedAt&apiKey=0556e36ff1f846618076fad808e81b7c")
            .then((response) => {
                setNewsData(response.data.articles);
                console.log(newsData);
            })
    }

    useEffect(() => {
        getNewsData();
    }, [])


    const newsDetails = newsData.find((article)=> article.title === title);


    return (
        <Fragment>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-12 col-12'>
                       <h4>{newsDetails.title}</h4>                        
                        {/* <div class="card">
                            <img src={article.urlToImage} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">{article.title}</h5>
                                <p class="card-text">{article.description}</p>
                                <Link to={""} class="btn btn-primary">Homepage</Link>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default NewsDetails