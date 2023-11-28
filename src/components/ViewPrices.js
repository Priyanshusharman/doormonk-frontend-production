import React, { useEffect, useState, useContext } from 'react'
import AppointmentContext from '../context/appointmentContext';
const ViewPrices = () => {
    const context = useContext(AppointmentContext)
    const { shopId } = context
    const [prices, setPrices] = useState([])
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
            setPrices(json)

        }
        onSearch()
    }, [shopId])
    return (
        <>
            {/*<button  type="button" className="btn btn-primary" >
                Launch demo modal
    </button>*/}
            <div div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">

                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Services/Prices</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                {prices.map((service, i) => {
                                    return <div key={i}>{service.services.map((item, j) => {
                                        return (<p key={j}>{Object.keys(item)}:{Object.values(item)}</p>)
                                    })}</div>
                                })}
                            </div>
                            <div className="modal-footer">
                                <button data-bs-dismiss="modal" style={{ borderRadius: "0.375rem" }} className="price-btn btn btn-primary mx-2">Close</button>


                            </div>
                        </div>
                    </div>
                </div>

            </div></>
    )
}

export default ViewPrices