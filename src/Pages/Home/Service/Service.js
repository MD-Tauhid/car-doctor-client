import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Service = () => {
    const [services, setServices] = useState([]);
    useEffect( () =>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div className='mb-20'>
            <div className='text-center mb-5'>
                <h2 className='text-xl font-bold text-red-500'>Service</h2>
                <h1 className='text-5xl font-bold mb-5'>Our Service Area</h1>
                <p className='w-1/2 mx-auto'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>
            <div className='my-5 grid gap-6 grid-cols-1 md:grid-col-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard 
                        key={service._id} 
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Service;