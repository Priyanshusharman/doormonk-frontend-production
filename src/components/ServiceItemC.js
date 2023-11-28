import React from 'react'
import { useContext } from 'react'
import AppointmentContext from '../context/appointmentContext';
const ServiceItemC = ({ service, price }) => {
    const context = useContext(AppointmentContext)
    const { addService, removeService } = context
    return (
        <>
            <div className="card col-md-3  my-3">
                <div className="card-body ">
                    <div className='d-flex align-items-center'>
                        <h5 className="card-title">Service</h5>
                    </div>

                    <p className="card-text">{service}: {price}</p>
                    <i onClick={() => addService(service, price)} class="mx-3 fa-solid fa-cart-plus"></i>
                    <i onClick={() => removeService(service, price)} class=" mx-3 fa-solid fa-trash"></i>
                </div>

            </div >
        </>
    )
}

export default ServiceItemC