import React, { useContext } from 'react'
import "./ShopItem.css"
import AppointmentContext from '../context/appointmentContext';

const ShopItem = ({ shop, onBook, onViewSwitch }) => {
    const context = useContext(AppointmentContext)
    const { setId } = context
    const onViewPrices = (id) => {
        setId(id)
        onViewSwitch()

    }
    return (
        <>
            <div style={{ textAlign: "left" }} className="card my-3">
                <h5 className="card-header"><i className="fa-solid fa-shop head-icon"> Shop</i></h5>
                <div className="card-body">
                    <h5 className="card-title">{shop.name}</h5>
                    <p className="card-text"><i className="fa-solid fa-star rating-icon"></i><span className='b'>Ratings</span>{": " + Math.round(shop.ratings * 10) / 10}</p>
                    <p className="card-text"><span className='b'>Address</span>{": " + shop.address}</p>
                    <p className="card-text"><span className='b'>Type</span>{": " + shop.type}</p>
                    <p className="card-text"><span className='b'>Phone</span>{": " + shop.phone}</p>
                    <p className="card-text"><span className='b'>Website</span>{": " + shop.website}</p>
                    <p className="card-text"><span className='b'>Email</span>{": " + shop.email}</p>
                    <p className="card-text"><span className='b'>Working hours</span>{": " + shop.workinghoursfrom+"-"+shop.workinghoursto}</p>
                    <button onClick={() => onBook(shop._id)} style={{ borderRadius: "0.375rem" }} className="book-btn btn btn-primary ">Book</button>
                    <button data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => onViewPrices(shop._id)} style={{ borderRadius: "0.375rem" }} className="price-btn btn btn-primary mx-2">View Prices</button>
                </div>
            </div>





        </>
    )
}

export default ShopItem