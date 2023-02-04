import React from 'react';
import './BannerItems.css';

const BannerItems = ({ slide }) => {
    const { image, id, next, prev } = slide;
    return (
        <div id="slide1" className="carousel-item relative w-full">
            <div className='carusel-img'>
                <img src={image} className="w-full" alt='' />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                <h1 className='text-6xl font-bold text-white'>Affordable <br />
                    Price For Car <br />
                    Servicing</h1>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/2 w-2/5">
                <p className='text-white text-xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-3/4">
                <button className="btn btn-error rounded-lg mr-5">Error</button>
                <button className="btn btn-outline btn-error rounded-lg">Error</button>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItems;