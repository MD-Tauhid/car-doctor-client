import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import OrderItem from './OrderItem';

const Orders = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);
    console.log(user);

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => { setOrders(data) })
    }, [user?.email]);

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure you want to cancle the order?')
        if(proceed){
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE'
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

    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Delete</th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => <OrderItem
                            key={order._id}
                            order={order}
                            handleDelete = {handleDelete}
                        ></OrderItem>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Orders;