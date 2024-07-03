import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Axios() {

    const [userData, setUserData] = useState([]);

    const getUserData = () => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
            setUserData(response.data);
        })
    }

    useEffect(() => {
        getUserData();
    }, [])


    return (
        <Fragment>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-12 col-12 mt-5 mb-2'>
                        <h5 className='catbar'>USER LIST</h5>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-12 col-12'>
                        <table class="table caption-top tabled">
                            <thead>
                                <tr>
                                    <th scope="col">SR NO</th>
                                    <th scope="col">NAME</th>
                                    <th scope="col">EMAIL</th>
                                    <th scope="col">PHONE</th>
                                    <th scope="col">ADDRESS</th>
                                    <th scope="col">ACTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userData.map((data) => {
                                    return (
                                        <tr>
                                            <th scope="row">{data.id}</th>
                                            <td>{data.name}</td>
                                            <td>{data.email}</td>
                                            <td>{data.phone}</td>
                                            <td>{data.address.city}</td>
                                            <td>
                                                <Link to={`UserDetails/` + data.id} className='btn btn-sm btn-secondary'>VIEW</Link>
                                                <button className='btn btn-sm btn-warning mx-2'>EDIT</button>
                                                <button className='btn btn-sm btn-danger'>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Axios