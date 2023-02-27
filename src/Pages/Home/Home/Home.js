import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Product from '../Product/Product';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Service></Service>
            <Product></Product>
        </div>
    );
};

export default Home;