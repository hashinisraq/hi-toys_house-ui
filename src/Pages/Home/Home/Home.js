import React from "react";
import Banner from "../Banner/Banner";
import Reviews from "../Reviews/Reviews";
import Contact from "../Contact/Contact";
import SelectedToys from "../SelectedToys/SelectedToys";

const Home = () => {
    return (
        <div style={{ fontFamily: 'Roboto' }}>
            <Banner />
            <SelectedToys />
            <Reviews />
            <Contact />
        </div>
    );
};

export default Home;