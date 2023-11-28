import React from 'react'

const ReviewItem = ({ review }) => {
    return (
        <div style={{ textAlign: "left" }} className="card my-3">
            <h5 className="card-header"><i class="fa-solid fa-shop head-icon"> Review Details</i></h5>
            <div className="card-body">
                <h5 className="card-title">{review.name}</h5>
                <p className="card-text"><span className='b'>Date</span>{": " + review.date}</p>
                <p className="card-text"><span className='b'>Rating</span>{": " + review.rating}</p>
                <p className="card-text"><span className='b'>Review</span>{": " + review.review}</p>









            </div>
        </div>
    )
}

export default ReviewItem