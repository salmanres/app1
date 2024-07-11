import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import VehicleData from '../shared/VehicleData';

function VehicleDetails() {

    const {id} = useParams();
    console.log(id);
    
    const [vehicledetails, setVehicleDetails] = useState([]);
    
    const getVehicleDetails = () => {
       const data = VehicleData.find((vehicle)=>{
        return(
            vehicle.id === id
        )
       })
       console.log(data);
       setVehicleDetails(data);
    }

    useEffect(()=>{
        getVehicleDetails();
    }, [])


  return (
    <Fragment>
                    <div>
                        <p>{vehicledetails.engine}</p>
                        <p>{vehicledetails.chassis}</p>
                        <p>{vehicledetails.vehicle}</p>
                        <p>{vehicledetails.registration}</p>
                    </div>
    </Fragment>
  )
}

export default VehicleDetails