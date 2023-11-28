import React, { useEffect, useState } from 'react'
import ReviewItem from './ReviewItem'
const Reviews = () => {
    const [user, setUser] = useState({})
    useEffect(() => {
        const getUser = async () => {
            const response = await fetch("http://localhost:5000/api/barberauth/getUser", {
                method: "post",
                headers: { "Content-Type": "application/json", "auth-token": localStorage.getItem("token") },

            })
            const json = await response.json()
            setUser(json)
            console.log(json)
        }
        getUser()
    }, [])
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <h1 className='text-light'>Ratings and Reviews</h1>
                    </div>

                </div>
                <div className='mad center'>

                    <div style={{ width: "700px" }}>
                        {/*{appointments.length ? appointments.map((appointment) => {
                            return appointment.status === status && <><Appointment updateAppointment={updateAppointment} reviewAppointment={reviewAppointment} key={appointment._id} appointment={appointment} /></>
                        })
                            : <h2 style={{ color: "white" }}>No Reviews available</h2>}*/}
                        {user.reviews?.map(item => {
                            return (<ReviewItem review={item}></ReviewItem>)
                        })}
                    </div>
                </div>
            </div>
        </>

    )
}

export default Reviews