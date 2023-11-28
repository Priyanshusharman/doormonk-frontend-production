import { useState } from "react";
import AppointmentContext from "./appointmentContext";

const AppointmentState = (props) => {
    const host = "http://localhost:5000"
    const [shopId, setShopId] = useState("")
    const [appointmentId, setAppointmentId] = useState("")
    const [added, setAdded] = useState([])
    const [total, setTotal] = useState(0)
    const setPrice=(value)=>
    {
        setTotal(value)
    }
    const setSelectedServices=(value)=>{
        setAdded(value)
    }
    const addService = (service, price) => {
        if (!added.includes(service)) {
            setAdded(added.concat(service))
            setTotal(total + parseInt(price, 10))
        }

    }
    const removeService = (service, price) => {
        if (added.includes(service)) {
            setAdded(added.filter(function (item) {
                return item !== service;
            }))
            setTotal(total - parseInt(price, 10))
        }


    }
    const setId = (id) => {
        setShopId(id)
        localStorage.setItem("id", id)
    }
    const setAppId = (id) => {
        setAppointmentId(id)
        localStorage.setItem("appid", id)
    }
    const [appointments, setAppointments] = useState([])

    const getAppointments = async () => {
        const response = await fetch(`${host}/api/shops/fetchallappointments`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            }
        });
        const json = await response.json()
        setAppointments(json)
    }

    const addAppointment = async (name, phone, services, email, address, time, date, servicetype, added, total) => {
        const response = await fetch(`${host}/api/shops/addappointment/${localStorage.getItem("id")}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
            body: JSON.stringify({ name, phone, services, email, address, time, date, servicetype, added, total }),
        });

        const appointment = response.json()
        setAppointments(appointments.concat(appointment))
        return true
    }

    const deleteAppointment = async () => {
        const response = await fetch(`${host}/api/shops/deleteappointment/${localStorage.getItem("appid")}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
        });

        const appointment = response.json()

    }

    const editAppointment = async (id, date, time, services) => {
        
        await fetch(`${host}/api/shops/updateappointment/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
            body: JSON.stringify({ date, time, services }),
        });
        alert("Your appointment was updated successfully.")
    }

    const reviewAppointment2 = async (reviews, ratings, id) => {
        if(!reviews||!ratings)
        {
            alert("Please fill the enteries.")
            return
        }
        if(ratings>5||ratings<1)
        {
            alert("Review must be in range 1 to 5")
            return
        }
        await fetch(`${host}/api/shops/postreview`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
            body: JSON.stringify({ reviews, ratings, id }),
        });
        alert("Thanks for providing your feedback..")
        
        
        
    }



    return (
        <AppointmentContext.Provider value={{setSelectedServices,setPrice,reviewAppointment2, removeService, total, addService, added, shopId, appointmentId, deleteAppointment, setAppId, appointments, setId, addAppointment, getAppointments, editAppointment }}>
            {props.children}
        </AppointmentContext.Provider>
    )
}

export default AppointmentState