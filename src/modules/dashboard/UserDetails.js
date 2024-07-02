import React, { Fragment, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

function UserDetails() {
    const { id } = useParams();
    const [userData, setUserData] = useState([]);
    const [city, setCity] = useState([]);

    const getUserData = () => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then((response) => {
            console.log(response.data);
            setUserData(response.data);
            setCity(response.data.address.city);
        })
    }
    useEffect(() => {
        getUserData();
    }, [])


    return (

        <Fragment>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-12 col-12 p-5'>
                        <h1 className=' pb-5'>USER DETAILS</h1>
                        <h4>Sr No: {id} </h4>
                        <h4>Name: {userData.name}</h4>
                        <h4>Email: {userData.email}</h4>
                        <h4>Phone: {userData.phone}</h4>
                        <h4>Address: {city}</h4>
                        <Link to='/MainPage/Axios' className='btn btn-primary w-20 mt-3 shadow'>Back</Link>
                    </div>
                </div>
            </div>
        </Fragment>

    )
}

export default UserDetails