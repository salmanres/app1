import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios';

function Filter() {

    const [userData, setUserData] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [finalData, setFinalData] = useState([]);

    const getUserData = () => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
            setUserData(response.data);
            console.log(response.data);
        })
    }

    useEffect(() => {
        getUserData();
    }, [])

    const searchHandler = (event) => {
        const inputValue = event.target.value.toLowerCase();
        setSearchInput(inputValue);
        const filteredData = userData.filter((data)=>{
            return(
                data.name.toLowerCase().includes(inputValue)
            )
        })
        console.log(filteredData);
        setFinalData(filteredData);
    }

    return (
        <Fragment>
            <div className='container-fluid mt-3'>
                <div className='row p-3 d-flex justify-content-center'>
                    <input type='text' className='form-control' placeholder='search here' onChange={searchHandler} />
                </div>
                <div className='row'>
                    <div className='col-sm-12 col-12'>
                        {finalData.length > 0 ? (
                            finalData.map((event)=>{
                                return(
                                    <div>
                                        <p>{event.name}</p>
                                    </div>
                                )
                            })
                        ) : <div>no data</div>}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Filter