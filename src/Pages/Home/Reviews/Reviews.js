import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import useReviews from '../../../hooks/useReviews';

const Reviews = () => {
    const [reviews] = useReviews();

    return (
        <div style={{ textAlign: 'center', fontFamily: 'Roboto', padding: '80px 0', backgroundColor: 'rgb(69, 155, 129)' }}>
            <h2>Reviews</h2>
            <Row className="g-4 m-0" style={{ padding: "0 40px" }}>
                {
                    reviews?.map(review => <Col sm={12} md={6} lg={4} key={review._id}>
                        <Card className="h-100">
                            <Card.Body>
                                <Card.Text className="card-text">{review.comment}</Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <div className="d-flex justify-content-between align-items-center">
                                    <h6><small>Review By</small> {review.displayName}</h6>
                                    <h6><small>Ratings: {review.ratings} ☪ (out off 5)</small></h6>
                                </div>
                            </Card.Footer>
                        </Card>
                    </Col>)
                }
            </Row>
        </div>
    );
};

export default Reviews;