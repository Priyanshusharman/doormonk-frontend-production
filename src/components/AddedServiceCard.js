import React from 'react'
import { useContext } from 'react'
import AppointmentContext from '../context/appointmentContext';
const AddedServiceCard = ({ service, price }) => {
    const context = useContext(AppointmentContext)
    const { removeService } = context
    return (
        <>
            <div className="card col-md-3  my-3">
                <div className="card-body ">
                    <div className='d-flex align-items-center'>
                        <h5 className="card-title">Service</h5>
                    </div>

                    <p className="card-text">{service}</p>
                </div>

            </div >
        </>
    )
}

export default AddedServiceCard