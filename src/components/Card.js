import React from "react";
import './Card.css';
import { useNavigate } from "react-router-dom";
const Card = ({ link, service, route }) => {
    const navigate = useNavigate();
    const handleClick = (route) => {
        navigate(route)
    }
    return (
        <div onClick={() => handleClick(route)} className="tc bg-white dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="loading" src={`${link}`} />
            <div>
                <p>{service}</p>
            </div>
        </div>
    );
}

export default Card;