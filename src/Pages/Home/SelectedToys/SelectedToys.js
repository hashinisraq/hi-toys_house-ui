import React from "react";
import { Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Toy from "../../Toys/Toy/Toy";
import useToys from "../../../hooks/useToys";

const SelectedToys = () => {
    const [toys] = useToys();
    let selectedToys = [];

    for (const toy of toys) {
        if (selectedToys.length < 6) {
            selectedToys.push(toy);
        }
    }

    return (
        <div style={{ textAlign: 'center', fontFamily: 'Roboto', padding: '80px 0', backgroundColor: 'rgb(58, 93, 127)' }}>
            <h2> Toys Collections</h2>
            <Row className="g-4 m-0" style={{ padding: "10px 40px" }}>
                {
                    selectedToys?.map(toy => <Toy
                        key={toy.name}
                        toy={toy}
                    ></Toy>)
                }
            </Row>
            <div style={{ padding: "40px 0" }}>
                <Link to="/toys" ><Button variant="dark">Show More</Button></Link>
            </div>
        </div>
    );
};

export default SelectedToys;