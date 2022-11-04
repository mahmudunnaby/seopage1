import React from 'react';
import Brands from '../Brands/Brands';
import Footer from '../Footer/Footer';
import Hero from '../Hero/Hero';
import Navigation from '../Navigation/Navigation';
import Services from '../Services/Services';
import Specility from '../Specility/Specility';
import Wehave from '../Wehave/Wehave';
import Whyus from '../Whyus/Whyus';


const Home = () => {
    return (
        <div>

            <Navigation />
            <Hero />
            <Specility />
            <Whyus />
            <Services />
            <Brands />
            <Wehave />
            <Footer />

        </div>
    );
};

export default Home;