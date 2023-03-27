import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import img from '../../assets/images/checkout/checkout.png';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import './Checkout.css';

const Checkout = () => {
    const { _id, title, price } = useLoaderData();
    const { user } = useContext(AuthContext)

    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const phone = form.phone.value;
        const email = user?.email || 'unregistered';
        const message = form.message.value;

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message
        }

        fetch('https://car-doctor-server-kappa.vercel.app/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('CD-token')}`
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                alert("Order placed successfully");
                form.reset();
            }
        })
        .catch(err => console.error(err))

    }
    return (
        <div className='my-10'>
            <div className='checkout-img'>
                <img src={img} alt="checkout" className='w-full mb-6' />
            </div>
            <div className="absolute transform -translate-y-1/2 left-24 top-64">
                <h1 className='text-5xl font-bold text-white'>Checkout</h1>
            </div>
            <h1 className='text-5xl font-bold text-center'>{title}</h1>
            <h1 className='mt-5 text-3xl font-bold text-center'>Price:{price}</h1>
            <form onSubmit={handlePlaceOrder} className='my-10 bg-base-200 p-20 rounded-xl'>
                <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-5'>
                    <input name='firstName' type="text" placeholder="First Name" className="input w-full" />
                    <input name='lastName' type="text" placeholder="Last Name" className="input w-full" />
                    <input name='phone' type="text" placeholder="Your Phone" className="input w-full" />
                    <input name='email' type="text" placeholder="Your Email" defaultValue={user?.email} className="input w-full" readOnly />
                </div>
                <div className='mt-5'>
                    <textarea name='message' placeholder="Your Message" className="textarea textarea-lg w-full h-52" ></textarea>
                    <input type="submit" value="Confirm Order" className="btn btn-error w-full mt-5 text-base-200 text-base" />
                </div>
            </form>
        </div>
    );
};

export default Checkout;