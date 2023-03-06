import React from 'react';

const OrderItem = ({ order }) => {
    const { email, price, customer, phone, serviceName } = order;
    return (
        <tr>
            <th>
                <button className='btn btn-outline btn-error' type="submit">x</button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
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