import React, { useState } from 'react'
import "./Searchbox.css";
import "./Shop.css"
import ShopItem from './ShopItem';
import { useContext } from 'react'
import AppointmentContext from '../context/appointmentContext';
import { useNavigate } from 'react-router-dom'
import ViewPrices from './ViewPrices';
const Shops = () => {
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",

    ];
    const context = useContext(AppointmentContext)
    const { setId } = context
    const [view, setView] = useState(false)
    const onViewSwitch = () => {
        view ? setView(false) : setView(true)
    }
    const [date, setDate] = useState("")
    const [city, setCity] = useState("")
    const [shops, setShops] = useState([])
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/bookingdetails");
    }
    function titleCase(str) {
        return str.toLowerCase().split(' ').map(function (word) {
            return (word.charAt(0).toUpperCase() + word.slice(1));
        }).join(' ');
    }
    const onChange = (e) => {
        const str=titleCase(e.target.value)
        setCity(str)
    }
    const onDateChange = (e) => {
        const date = new Date(e.target.value)
        const day = date.getDay();
        setDate(days[day])
    }
    const onBook = (id) => {
        setId(id)
        handleClick()
    }
    const onSearch = async () => {
        const response = await fetch(`https://doormonk-mongo.onrender.com/api/shops/fetchallshops`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
            body: JSON.stringify({ city: city, date: date }),
        });
        const json = await response.json()
        setShops(json)
    }
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <h1 className='text-light'>Search for Shops</h1>
                    </div>

                </div>
                <div className=' mad center'>

                    <div style={{ width: "700px" }}>
                        <div className="input-group mb-3">
                            <input onChange={onChange} type="text" className="form-control" placeholder="Search your City" aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button onClick={onSearch} className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                        </div>
                        <div className="input-group mb-3">
                            <input className="form-control" type="time" id="appt" name="appt"></input>
                            <input onChange={onDateChange} className="form-control" type="date" id="birthday" name="birthday"></input>
                        </div>
                    </div>
                </div>
                <div className='mad center'>
                    <div style={{ width: "700px" }}>
                        {shops.length ? shops.map((shop, i) => {
                            return <><ShopItem onViewSwitch={onViewSwitch} key={i} onBook={onBook} shop={shop} /></>
                        })
                            : <h2 style={{ color: "white" }}>No Shops available</h2>}
                    </div>
                </div>

            </div>
            {<ViewPrices />}
        </>
    )
}

export default Shops