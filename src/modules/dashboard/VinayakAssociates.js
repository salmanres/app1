import React, { Fragment, useState } from 'react'
import VehicleData from '../shared/VehicleData'
import { Link } from 'react-router-dom';

function VinayakAssociates() {

    const [data, setData] = useState([]);

    const searchHandler = (event) => {
        const searchData = event.target.value.toUpperCase();
        console.log(searchData);
        if (searchData.length > 2) {
            const newData = VehicleData.filter((d) => {
                return (
                    d.registration.includes(searchData)
                )
            })
            console.log(newData);
            setData(newData);
        }
        else {
            setData([]);
        }

    }

    return (
        <Fragment>
            <div className='container-fluid mt-5'>
                <div className='row d-flex justify-content-center'>
                    <div className='col-sm-5 col-12 text-center'>
                        <h5 className='navlogo'>ENTER VEHICLE NUMBER</h5>
                        <input type='text' className='form-control' placeholder='search here...' onChange={searchHandler} />
                        {data.length > 0 ? (
                            data.map((event) => {
                                return (
                                    <Link to={`VehicleDetails/` + event.id} className='form-control navlogo'>{event.registration}</Link>
                                )
                            })
                        ) : <div className='mt-2'> enter atleast 3 digits</div>}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default VinayakAssociates