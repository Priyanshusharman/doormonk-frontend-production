import React, { useEffect, useState, useRef } from 'react'
import { useContext } from 'react'
import AppointmentContext from '../context/appointmentContext';
import Appointment from './Appointment';
const MyAppointments = () => {
    const [modal, setModal] = useState("")
    const [status, setStatus] = useState("Pending")
    const [eappointment, setEappointment,] = useState({

        id: "",
        date: new Date(),
        time: "",
        services: ""
    })
    const [review, setReview] = useState({
        reviews: "",
        ratings: "",
        id: ""
    })
    const onStatusChange = (e) => {

        setStatus(e.target.value)
    }
    const updateAppointment = (currentAppointment) => {
        setModal("Update")
        ref.current.click()
        setEappointment({
            id: currentAppointment._id,
            date: currentAppointment.date,
            time: currentAppointment.time,
            services: currentAppointment.services[0]
        })


    }
    const reviewAppointment = (currentAppointment) => {
        setModal("Review")
        ref.current.click()

        setReview({
            reviews: "",
            ratings: "",
            id: currentAppointment.barber

        })


    }
    const onChange = (e) => {
        setEappointment({
            ...eappointment,
            [e.target.name]: e.target.value
        })
    }
    const onChange2 = (e) => {
        setReview({
            ...review,
            [e.target.name]: e.target.value
        })
    }
    const handelSubmit = () => {
        editAppointment(eappointment.id, eappointment.date, eappointment.time, eappointment.services)
        refClose.current.click()
        window.location.reload();
    }
    const handelSubmit2 = () => {


        reviewAppointment2(review.reviews, parseInt(review.ratings, 10), review.id)
        refClose.current.click()
    }
    const context = useContext(AppointmentContext)
    const { getAppointments, appointments, editAppointment, reviewAppointment2 } = context
    useEffect(() => {
        getAppointments()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const ref = useRef(null)
    const refClose = useRef(null)
    return (
        <>
            {
                modal === "Update" ?
                    <>
                        <button ref={ref} type="button" className="d-none btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Launch demo modal
                        </button>
                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Update Appointment</h1>
                                        <button ref={refClose} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <form className='my-3'>
                                            <div style={{ textAlign: "left" }} className="mb-3">
                                                <label htmlFor="title" className="form-label">Date</label>
                                                <input required value={eappointment.date} style={{ color: "black" }} onChange={onChange} className="form-control" type="date" id="date" name="date"></input>
                                            </div>
                                            <div style={{ textAlign: "left" }} className="mb-3">
                                                <label htmlFor="description" className="form-label">Time</label>
                                                <input required value={eappointment.time} style={{ color: "black" }} onChange={onChange} className="form-control" type="time" id="time" name="time"></input>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button data-bs-dismiss="modal" style={{ borderRadius: "0.375rem" }} className="price-btn btn btn-primary mx-2">Close</button>
                                        <button onClick={handelSubmit} style={{ borderRadius: "0.375rem" }} className="book-btn btn btn-primary ">Update</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </> :
                    <>
                        <button ref={ref} type="button" className="d-none btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Launch demo modal
                        </button>
                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Review Appointment</h1>
                                        <button ref={refClose} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <form className='my-3'>
                                            <div style={{ textAlign: "left" }} className="mb-3">
                                                <label htmlFor="ratings" className="form-label">Rate out of 5</label>
                                                <input style={{ color: "black" }} onChange={onChange2} type="text" className="form-control" id="ratings" name='ratings' />
                                            </div>
                                            <div style={{ textAlign: "left" }} className="mb-3">
                                                <label htmlFor="reviews" className="form-label">Review</label>
                                                <input onChange={onChange2} style={{ color: "black" }} type="text" className="form-control" id="reviews" name='reviews' />
                                            </div>
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button data-bs-dismiss="modal" style={{ borderRadius: "0.375rem" }} className="price-btn btn btn-primary mx-2">Close</button>
                                        <button onClick={handelSubmit2} style={{ borderRadius: "0.375rem" }} className="book-btn btn btn-primary ">Post</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
            }


            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <h1 className='text-light'>Booked appointments.</h1>
                    </div>

                </div>
                <div className='mad center'>
                    <div className="col-md-6">
                        <label htmlFor="state" className="form-label text-light d-flex">Status
                        </label>
                        <select onChange={onStatusChange} id="servicetype" name='servicetype' className="form-select">
                            <option >Pending</option>
                            <option>Completed</option>
                            <option>Canceled</option>
                        </select>
                    </div>
                </div>
                <div className='mad center'>

                    <div style={{ width: "700px" }}>
                        {appointments.length ? appointments.map((appointment) => {
                            return appointment.status === status && <><Appointment updateAppointment={updateAppointment} reviewAppointment={reviewAppointment} key={appointment._id} appointment={appointment} /></>
                        })
                            : <h2 style={{ color: "white" }}>No Appointments available</h2>}
                    </div>
                </div>

            </div>
        </>
    )
}

export default MyAppointments