import React, { useState } from 'react'
import AppointmentItem2 from './AppointmentItem2'
const Bookingbyday = () => {
    const [date,setDate]=useState("")
    const onDateChange=async(e)=>{
        setDate(e.target.value)
        const response = await fetch("http://localhost:5000/api/shops/fetchappbyday", {
            method: "post",
            headers: { "Content-Type": "application/json",
        "auth-token":localStorage.getItem("token") },
            body: JSON.stringify({date:e.target.value })
        })
        const json = await response.json()
        setAppointments(json)
    }
    const [appointments,setAppointments]=useState([])
    const markStatus=async(date,status)=>{
        const response = await fetch("http://localhost:5000/api/shops/shopstatusday", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
            body:JSON.stringify({date:date,status:status},)
        });
        console.log("Updating an appointment")
        const appointment = response.json()
        console.log(appointment)
        alert("Status Updated")
        window.location.reload()
        
    }
  return (
    <>
        <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <h1 className='text-light'>Pending Bookings</h1>
                    </div>

                </div>
                <div className=' mad center'>

                    <div style={{ width: "700px" }}>
                    <div className='row my-3'>
                    <div className='col-md-12'>
                        <h2 className='text-light'>Enter day to see bookings</h2>
                    </div>

                </div>
                        <div className="input-group mb-3">
                            <input className="form-control" type="time" id="appt" name="appt"></input>
                            <input onChange={onDateChange} className="form-control" type="date" id="birthday" name="birthday"></input>
                            
                        </div>
                        <div className="input-group mb-3">
                            <button onClick={() => markStatus(date,"Confirmed")} className="form-control" >Confirm All</button>
                            <button onClick={() => markStatus(date,"Canceled")} className="form-control" >Cancel All</button>
                        </div>
                    </div>
                </div>
                <div className='mad center'>
                    <div style={{ width: "700px" }}>
                        {appointments.length ? appointments.map((appointment, i) => {
                            return <><AppointmentItem2 date={date} key={i} appointment={appointment} /></>
                        })
                            : <h2 style={{ color: "white" }}>No Bookings available</h2>}
                    </div>
                </div>
        </div>
    </>
  )
}

export default Bookingbyday