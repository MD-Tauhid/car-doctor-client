import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import OrderItem from './OrderItem';

const Orders = () => {
    const { user, logOut } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://car-doctor-server-kappa.vercel.app/orders?email=${user?.email}`, {
            headers:{
                authorization: `Bearer ${localStorage.getItem('CD-token')}`
            }
        })
            .then(res => {
                if(res.status === 403 || res.status === 401){
                    return logOut();
                }
                return res.json();
            })
            .then(data => { 
                setOrders(data);
            })
    }, [user?.email, logOut]);

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure you want to cancle the order?')
        if(proceed){
            fetch(`https://car-doctor-server-kappa.vercel.app/orders/${id}`, {
                method: 'DELETE',
                headers:{
                    authorization: `Bearer ${localStorage.getItem('CD-token')}`
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                    alert('Delete successfully');
                    const newOrder = orders.filter(odr => odr._id !== id);
                    setOrders(newOrder);
                }
            })
        }
    }

    const handleStatusUpdate = id =>{
        fetch(`https://car-doctor-server-kappa.vercel.app/orders/${id}`, {
            method: 'PATCH',
            headers:{
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('CD-token')}`
            },
            body: JSON.stringify({
                status: 'Approved'
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if( data.modifiedCount > 0 ){
                const remaining = orders.filter(odr => odr._id !== id);
                const approving = orders.find(odr => odr._id === id);
                approving.status = 'Approved';
                const newOrders = [...remaining, approving];
                setOrders(newOrders);
            }
        })
    }

    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Delete</th>
                        <th>Name</th>
                        <th>Service</th>
                        <th>Message</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => <OrderItem
                            key={order._id}
                            order={order}
                            handleDelete = {handleDelete}
                            handleStatusUpdate = {handleStatusUpdate}
                        ></OrderItem>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Orders;