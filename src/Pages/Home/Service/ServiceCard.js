import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, title, price, img } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl py-5">
            <figure><img className='h-52 w-11/12 rounded-lg' src={img} alt={title} /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-2xl">{title}</h2>
                <div className='flex justify-between items-center'>
                    <h2 className='text-xl font-semibold text-red-500'>Price: ${price}</h2>
                    <div className="card-actions justify-end">
                        <Link to={`/checkout/${_id}`} className="btn btn-outline btn-error"> <FaArrowRight/></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;