import React from "react";
import "./Dashboard.css";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import Orders from "./Components/Orders";

const Dashboard = () => {
    return (
        <Container className="p-5">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={12} lg={2}>
                        <Nav variant="pills" className="flex-column" >
                            <Nav.Item>
                                <Nav.Link className="nav_link" eventKey="first">
                                    Orders
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={12} lg={10}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Orders />
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    );
};

export default Dashboard;