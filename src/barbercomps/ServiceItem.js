import React from 'react'
const ServiceItem = ({ service, price }) => {
    return (
        <>
            <div className="card col-md-3  my-3">
                <div className="card-body ">
                    <div className='d-flex align-items-center'>
                        <h5 className="card-title">Service</h5>
                    </div>

                    <p className="card-text">{service}: {price}</p>
                </div>

            </div >
        </>
    )
}

export default ServiceItem