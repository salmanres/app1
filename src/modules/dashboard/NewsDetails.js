import React from 'react'
import axios from 'axios';
import { Fragment, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';


function NewsDetails() {
    const { title } = useParams();
    const [newsData, setNewsData] = useState([]);

    const getNewsData = () => {
        axios.get("https://newsapi.org/v2/everything?q=tesla&from=2024-06-01&sortBy=publishedAt&apiKey=0556e36ff1f846618076fad808e81b7c")
            .then((response) => {
                setNewsData(response.data.articles);
            })
            .catch((error) => {
                console.error("Error fetching news data:", error);
            });
    }

    useEffect(() => {
        getNewsData();
    }, [])

    console.log(newsData);
    const article = newsData.find((event) => event.title === title);
    console.log(article);

    if (!article) {
        return <div className='m-5 text-danger'><h2>no data found...</h2></div>;
    }


    return (
        <Fragment>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-12 col-12'>
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