import React from 'react'
import { FaEllipsisV } from "react-icons/fa";

function Orders() {
    return (
        <>
            <section className='w-[1145px] bg-[#fff] p-6 mt-[68px] ml-6 rounded-2xl'>
                <div className="p-6 ">
                    <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
                    <table className="w-full text-sm text-left">
                        <thead>
                            <tr className="border-b">
                                <th className="py-3 px-4">
                                    <input type="checkbox" className="form-checkbox" />
                                </th>
                                <th className="py-3 px-4">Order ID</th>
                                <th className="py-3 px-4">Customer name</th>
                                <th className="py-3 px-4">Payment Method</th>
                                <th className="py-3 px-4">Date</th>
                                <th className="py-3 px-4">Status</th>
                                <th className="py-3 px-4">Total</th>
                                <th className="py-3 px-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr className="border-b hover:bg-gray-50">
                                <td className="py-3 px-4">
                                    <input type="checkbox" className="form-checkbox" />
                                </td>
                                <td className="py-3 px-4">54521</td>
                                <td className="py-3 px-4">John Doe</td>
                                <td className="py-3 px-4">Credit Card</td>
                                <td className="py-3 px-4">2023-03-15</td>
                                <td className="py-3 px-4">Completed</td>
                                <td className="py-3 px-4">$100.00</td>
                                <td className="py-3 px-4 text-right">
                                    <button className="text-gray-500 hover:text-black"><FaEllipsisV /></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}

export default Orders