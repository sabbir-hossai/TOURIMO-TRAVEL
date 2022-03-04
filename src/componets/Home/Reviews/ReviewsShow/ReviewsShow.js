import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Review from '../Review/Review';

const ReviewsShow = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://scary-treat-11337.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='container'>
            <h2 className="text-primary mt-5 mb-5">Recent <span className='text-warning '>Reviews</span></h2>
            <Row xs={1} md={3} lg={4} className="g-4">
                {
                    reviews.map(review => <Review
                        review={review}
                    ></Review>)
                }
            </Row>
        </div>
    );
};

export default ReviewsShow;