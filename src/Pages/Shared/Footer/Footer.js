import React from "react";
import { Col, Row } from "react-bootstrap";

const Footer = () => {
    return (
        <div style={{ backgroundColor: 'rgb(91, 74, 102)' }}>
            <Row xs={1} md={1} lg={1} className="g-4 m-0" style={{ textAlign: 'center', fontFamily: 'Roboto' }}>
                <Col>
                    <div>
                        <p style={{ padding: '4px 3px 4px 3px', color: 'black', fontWeight: "500" }}>© TOYS HOUSE</p>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Footer;