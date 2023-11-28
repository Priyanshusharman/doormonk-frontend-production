import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./Navigation.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const fun = () => {
    const dropDownMenu = document.querySelector('.dropdown_menu');
    const toggleBtnIcon = document.querySelector('.toggle_btn i');
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');
    toggleBtnIcon.classList = isOpen ?
        'fa-solid fa-xmark'
        : 'fa-solid fa-bars'

}
const NavigationLBT = () => {


    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/barberlogin");
    }
    const onLogOut=()=>{
        localStorage.removeItem("token")
        handleClick()
    }
    return (
        <header className="view">
            <div className="navbar">
                <div className="logo"><Link to="/barberhome" >DoormonK</Link></div>
                <ul className="links">
                    <li><Link to="/dashboardb">Shop Details</Link></li>
                    <li onClick={onLogOut}><Link>Log out</Link></li>
                    <li><Link to="/bookingtracker">Booking Tracker</Link></li>
                </ul>
                <div className="toggle_btn" onClick={fun}>
                    <i className="fa-solid fa-bars"></i>
                </div>

            </div>
            <div className="dropdown_menu">
                <li><Link to="/dashboardb">Shop Details</Link></li>
                <li onClick={onLogOut}><Link>Log out</Link></li>
                <li><Link to="/bookingtracker">Booking Tracker</Link></li>
            </div>
        </header>
    );


}

export default NavigationLBT;