import React from 'react'
import "../components/ShopItem.css"

const AppointmentItem2 = ({ appointment,date }) => {
    
    const markStatus=async(id,status)=>{
        const response = await fetch("https://doormonk-mongo.onrender.com/api/shops/shopstatusitem", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
            body:JSON.stringify({id:id,status:status},)
        });

        const appointment = response.json()

        alert("Status Updated")
        window.location.reload()
        
    }
    return (
        <>
            <div style={{ textAlign: "left" }} className="card my-3">
                <h5 className="card-header"><i class="fa-solid fa-shop head-icon"> Appointment Details</i></h5>
                <div className="card-body">
                    <h5 className="card-title">{appointment.name}</h5>
                    <p style={{
                        color: `${appointment
                            .status === "Canceled" ? "red" : appointment
                                .status === "Pending" ? "blue" : "green"}`
                    }} className="card-text"><span className='b'>Booking Status</span>{": " + appointment.status}</p>
                    <p className="card-text"><span className='b'>Address</span>{": " + appointment.address}</p>
                    <p className="card-text"><span className='b'>Services</span>{": " + appointment.services}</p>
                    <p className="card-text"><span className='b'>Total</span>{": " + appointment.total}</p>
                    <p className="card-text"><span className='b'>Phone</span>{": " + appointment.phone}</p>
                    <p className="card-text"><span className='b'>Email</span>{": " + appointment.email}</p>

                    <p className="card-text"><span className='b'>Slot Date</span>{": " + new Date(appointment.date).toLocaleDateString()}</p>
                    <p className="card-text"><span className='b'>Slot Time</span>{": " + appointment.time}</p>
                    <p className="card-text"><span className='b'>Unique Booking Id</span>{": " + appointment.bookingid}</p>
                    <p className="card-text"><span className='b'>Barber's Name</span>{": " + appointment.barbername}</p>
                    <p className="card-text"><span className='b'>Barber's Phone</span>{": " + appointment.barberphone}</p>
                    <p className="card-text"><span className='b'>Website</span>{": " + appointment.barberwebsite}</p>
                    <p className="card-text"><span className='b'>Barber's Email</span>{": " + appointment.barberemail}</p>
                    <p className="card-text"><span className='b'>Barber's Address</span>{": " + appointment.barberaddress}</p>
                    <p className="card-text"><span className='b'>Service Type</span>{": " + appointment.servicetype}</p>
                    <p className="card-text"><span className='b'>StatusByShop</span>{": " + appointment.shopconfirmation}</p>
                    {appointment.status==="Pending"&&<><button onClick={() => markStatus(appointment._id,"Confirmed")}  style={{ borderRadius: "0.375rem" }} className="book-btn btn btn-primary ">Mark Confirmed</button>
                    <button onClick={() => markStatus(appointment._id,"Canceled")}  style={{ borderRadius: "0.375rem" }} className="book-btn btn btn-primary mx-2 ">Cancel</button></>}

                    





                </div>
            </div>





        </>
    )
}

export default AppointmentItem2