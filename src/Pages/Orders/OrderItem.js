import React, { useEffect, useState } from 'react';

const OrderItem = ({ order, handleDelete }) => {
    const { _id, email, price, customer, phone, serviceName, service } = order;
    const [orderService, setOrderService] = useState({});

    useEffect(()=>{
        fetch(`http://localhost:5000/services/${service}`)
        .then(res => res.json())
        .then(data => setOrderService(data))
    }, [service]);

    return (
        <tr>
            <th>
                <button onClick={ ()=>handleDelete(_id) } className='btn btn-outline btn-error'>x</button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded-lg w-28 h-24">
                            {
                                orderService?.img &&
                                <img src={orderService.img} alt="Avatar Tailwind CSS Component" />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>
                        <div className="text-sm opacity-50">{email}</div>
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
                <br />
                <span className="badge badge-ghost badge-sm">{price}</span>
            </td>
            <td>Purple</td>
            <th>
                <button className="btn btn-ghost btn-xs">{phone}</button>
            </th>
        </tr>
    );
};

export default OrderItem;