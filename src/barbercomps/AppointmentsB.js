import React, { useState } from 'react'
import AppointmentItem from './AppointmentItem'
const AppointmentsB = () => {
    const[bookingId,setBookingId]=useState("")
    const[appointment,setAppointment]=useState([])
    const onChange=(e)=>{
        setBookingId(e.target.value)
    }
    const onSearch=async()=>{
        const response = await fetch(`http://localhost:5000/api/shops/appointmentbyid`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
            body: JSON.stringify({ bookingid:bookingId }),
        });
        const json = await response.json()

        setAppointment(json)
    }
  return (
    <>
    <div className='container'><div className='row'>
                    <div className='col-md-4'>
                        <h1 className='text-light'>Booking Tracker</h1>
                    </div>

                </div>
                <div className=' mad center'>

                    <div style={{ width: "700px" }}>
                        <div className="input-group mb-3">
                            <input onChange={onChange} type="text" className="form-control" placeholder="Enter booking ID" aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button onClick={onSearch} className="btn btn-outline-secondary" type="button" id="button-addon2">Check</button>
                        </div>
                    </div>
                </div>
                <div className='mad center'>
                    <div style={{ width: "700px" }}>
                        *{appointment.length ? appointment.map((shop, i) => {
                            return <><AppointmentItem  key={i}  appointment={appointment[0]} /></>
                        })
                            : <h2 style={{ color: "white" }}>No Booking available</h2>}
                    </div>
                </div>
                </div>
    </>
    
  )
}

export default AppointmentsB