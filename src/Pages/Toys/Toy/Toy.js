import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Toy = ({ toy }) => {
    const { _id, name, price, details, img } = toy;
    return (
        <Col sm={12} md={6} lg={4}>
            <Card className="h-100">
                <Card.Img src={img} variant="top" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text><b>Description:</b> {details}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <div className="d-flex justify-content-between align-items-center">
                        <h6>Price: {price}</h6>
                        <Link to={`/addToCart/${_id}`} ><Button variant="dark">Add To Cart</Button></Link>
                    </div>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Toy;