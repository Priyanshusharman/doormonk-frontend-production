import React, { useEffect, useState } from 'react'
import '../components/Searchbox.css'
/*import { useNavigate } from 'react-router-dom'*/
import { useContext } from 'react'
import AppointmentContext from '../context/appointmentContext';
import ServiceItemC from './ServiceItemC';
import AddedServiceCard from './AddedServiceCard';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from "react-router-dom";

function AlertDialog({ setInvalid }) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/home");
    }
    const handleClick2 = () => {
        navigate("/bookedappointments");
    }

    const [open, setOpen] = React.useState(true);

    //const handleClickOpen = () => {
    //    setOpen(true);
    //};

    const handleClose = () => {
        setOpen(false);
        setInvalid(false)
        handleClick2()
    };

    const handleClose2 = () => {
        setOpen(false);
        setInvalid(false)
        handleClick()
    };

    return (
        <div>

            <Dialog
                open={open}
                onClose={handleClose2}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Success"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Your booking is successfull.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose2}>Go to home</Button>
                    <Button onClick={handleClose} autoFocus>
                        View Bookings
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

const BookingDetails = ({ id }) => {
    const [invalid, setInvalid] = useState(false);
    const [details, setDetails] = useState({
        name: "",
        phone: "",
        services: [],
        email: "",
        address: "",
        time: "",
        date: new Date(),
        servicetype: ""
    })
    const context = useContext(AppointmentContext)
    const { addAppointment, added, total,setPrice,setSelectedServices } = context
    /*const navigate = useNavigate();*/
    /*const handleClick = () => {
        navigate("/barberhome");
    }*/
    const handelSubmit = async () => {

        if(added.length===0)
        {
            alert("Please select atleast one service")
            return
        }
        if (addAppointment(details.name, details.phone, details.services, details.email, details.address, details.time, details.date, details.servicetype, added, total)) {
            setInvalid(true)
        }
        /*const response = await fetch("https://doormonk-mongo.onrender.com/api/barberauth/createbarber", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(details)
        })
        const json = await response.json()
        console.log(json)
        if (json.success) {
            localStorage.setItem("token", json.authtoken)
            handleClick()
        }
        else {

        }*/
    }
    const onChange = (e) => {
        setDetails({
            ...details,
            [e.target.name]: e.target.value
        })
    }
    const [services, setServices] = useState([])
    const [page, setPage] = useState("Details");
    function validateEmail(email) { //Validates the email address
        var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return emailRegex.test(email);
    }
    
    function validatePhone(phone) { //Validates the phone number
        var phoneRegex = /^(\+91-|\+91|0)?\d{10}$/; // Change this regex based on requirement
        return phoneRegex.test(phone);
    }
    const onNext = () => {
        if(!details.name||!details.phone||!details.email||!details.address||!details.time||!details.date||!details.servicetype)
        {
            alert("Fill the required details.")
            return
        }
        if(!validateEmail(details.email)||!validatePhone(details.phone))
        {
            alert("Enter valid email or phone number.")
            return
        }
        setPage("Services")

    }
    const onPrev = () => {
        setPage("Details")
    }

    useEffect(() => {
        const onSearch = async () => {
            const response = await fetch(`https://doormonk-mongo.onrender.com/api/shops/fetchprices`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("token")
                },
                body: JSON.stringify({ id: localStorage.getItem("id") }),
            });
            const json = await response.json()
            setServices(json)

        }
        onSearch()
        return (()=>{
            setPrice(0)
            setSelectedServices([])
        })
    }, [])
    return (
        <>
            {invalid && <AlertDialog setInvalid={setInvalid}></AlertDialog>}
            <div className='container h-100'>
                <div className='row'>
                    <div className='col-md-4'>
                        <h1 className='text-light'>Enter the details below.</h1>
                        {page==="Services"&&<h1 className='text-light'>Total: {total}</h1>}
                    </div>

                </div>
                <div className='container my-3'>
                    {page === "Details" ?
                        <><div className="row g-3">
                            <div className="col-md-6">
                                <label htmlFor="name" className="d-flex form-label text-light">Name</label>
                                <input value={details.name} onChange={onChange} type="text" className="form-control" id="name" name='name' />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="phone" className="d-flex form-label text-light">Phone</label>
                                <input value={details.phone} onChange={onChange} name='phone' type="text" className="form-control" id="phone" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="email" className="d-flex form-label text-light">Email</label>
                                <input value={details.email} onChange={onChange} type="email" className="form-control" id="email" name='email' />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="address" className="form-label d-flex text-light">Address</label>
                                <input value={details.address} onChange={onChange} type="text" className="form-control" id="address" name='address' />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="time" className="d-flex form-label text-light">Time</label>
                                {/*<input onChange={onChange} type="text" className="form-control" id="time" name="time" />*/}
                                <input value={details.time} onChange={onChange} className="form-control" type="time" id="time" name="time"></input>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="date" className="d-flex form-label text-light">Date</label>
                                {/*<input onChange={onChange} type="text" className="form-control" id="time" name="time" />*/}
                                <input value={details.date} onChange={onChange} className="form-control" type="date" id="date" name="date"></input>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="state" className="form-label text-light d-flex">Service Type</label>
                                <select value={details.servicetype} onChange={onChange} id="servicetype" name='servicetype' className="form-select">
                                    <option value>Choose...</option>
                                    <option>Home Visit</option>
                                    <option>Store</option>
                                </select>
                            </div>
                            <div className="col-12">
                                <button onClick={onNext} type="submit" className="btn btn-primary grow">Next</button>
                            </div>
                        </div></> :
                        <>
                            <div className="row g-3">

                                <div>
                                    <div className='row my-3'>
                                        <h2 style={{ color: "white" }}>Selected Services</h2>
                                        <div className='container mx-2' style={{ color: "white" }}>
                                            {added.length === 0 && "No selected services"}
                                        </div>
                                        {added.map(service => {
                                            return (<AddedServiceCard service={service} style={{ color: "white" }}></AddedServiceCard>)
                                        })}</div>
                                </div>

                                <div className="col-6">
                                    <button onClick={onPrev} type="submit" className="btn btn-primary grow">Previous</button>
                                </div>
                                <div className="col-6">
                                    <button onClick={handelSubmit} type="submit" className="btn btn-primary grow">Book</button>
                                </div>
                            </div>
                            <div>
                                <div className='row my-3'>
                                    <h2 style={{ color: "white" }}>Available Services</h2>
                                    <div className='container mx-2' style={{ color: "white" }}>
                                        {services.length === 0 && "No added services"}
                                    </div>
                                    {services[0].services.map((service, i) => {
                                        return <ServiceItemC key={i} price={Object.values(service)} service={Object.keys(service)[0]} />
                                    })}</div>
                            </div>
                        </>}
                </div>
            </div>
        </>
    )
}

export default BookingDetails