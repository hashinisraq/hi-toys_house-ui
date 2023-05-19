import React from "react";
import useToys from "../../../hooks/useToys";
import Toy from "../Toy/Toy";
import { Row } from "react-bootstrap";

const Toys = () => {
    const [toys] = useToys();
    return (
        <>
            <div className="text-center" style={{ fontFamily: 'Roboto', padding: '80px 0', backgroundColor: 'rgb(58, 93, 127)' }}>
                <h2>Available Toys: {toys.length}</h2>
                <Row className="g-4 m-0" style={{ padding: "10px 40px" }}>
                    {
                        toys?.map(toy => <Toy
                            key={toy._id}
                            toy={toy}
                        ></Toy>)
                    }
                </Row>
            </div>
        </>
    );
};

export default Toys;