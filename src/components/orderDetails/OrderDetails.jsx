import React from 'react'
import { FaRegClock, FaMapMarkerAlt, FaLock, FaRegCreditCard } from 'react-icons/fa';

function OrderDetails() {
    return (
        <>
            <section className='w-[1136px] bg-[#fff] p-6 mt-[68px] ml-6 rounded-2xl'>
                <div className="p-6 bg-white rounded-xl shadow-sm space-y-6">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                            <h2 className="text-xl font-semibold">Orders ID: #68543</h2>
                            <p className="flex items-center text-sm text-gray-500 mt-1">
                                <FaRegClock className="mr-1" /> Mon, Jan 28, 2022, 8:40AM
                            </p>
                            <p className="text-sm text-cyan-500 mt-1">Pending</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <select className="border border-gray-300 rounded-md px-3 py-2 text-sm">
                                <option>Change Status</option>
                                <option>Pending</option>
                                <option>Delivered</option>
                                <option>Canceled</option>
                            </select>
                            <button className="px-4 py-2 bg-cyan-500 text-white text-sm rounded-md">Save</button>
                            <button className="px-4 py-2 border rounded-md text-gray-500 text-sm">🖨️</button>
                        </div>
                    </div>

                    {/* Info Grid */}
                    <div className="grid md:grid-cols-4 gap-4">
                        <div className="border rounded-lg p-4 text-sm">
                            <p className="font-medium">Customer</p>
                            <p>Full name: Jane Cooper</p>
                            <p>E-mail: tim.jennings@example.com</p>
                            <p>Phone: +099 856 245</p>
                            <button className="mt-2 px-3 py-1 text-xs bg-indigo-100 text-indigo-600 rounded">View Profile</button>
                        </div>
                        <div className="border rounded-lg p-4 text-sm">
                            <p className="font-medium flex items-center gap-1"><FaLock /> Order Info</p>
                            <p>Shipping: Next express</p>
                            <p>Pay method: Paypal</p>
                            <p>Status: Pending</p>
                            <button className="mt-2 px-3 py-1 text-xs bg-blue-100 text-blue-600 rounded">Download info</button>
                        </div>
                        <div className="border rounded-lg p-4 text-sm">
                            <p className="font-medium flex items-center gap-1"><FaMapMarkerAlt /> Deliver to</p>
                            <p>Santa Ana, Illinois 85486</p>
                            <p>2972 Westheimer Rd.</p>
                            <p>Block 9A</p>
                            <button className="mt-2 px-3 py-1 text-xs bg-indigo-100 text-indigo-600 rounded">View profile</button>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-[421px] border rounded-lg p-4 text-sm">
                            <p className="font-medium flex items-center gap-1"><FaRegCreditCard /> Payment info</p>
                            <p>Master Card**** 6557</p>
                            <p>Fox Market LLC</p>
                            <p>+09985 6578 52</p>
                        </div>
                        <div className="w-[634px] border rounded-lg p-4 text-sm">
                            <label className="font-medium">Notes</label>
                            <input
                                type="text"
                                placeholder="Type some note"
                                className="mt-1 w-full border rounded-md px-2 pb-10 pt-2 text-sm"
                            />
                        </div>
                    </div>
                    {/* Products Table */}
                    <div className="border-t pt-4">
                        <h3 className="text-lg font-semibold mb-3">Products</h3>
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="text-left text-gray-500 border-b">
                                    <th><input type="checkbox" /></th>
                                    <th className="py-2">Product Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b hover:bg-gray-50">
                                    <td><input type="checkbox" /></td>
                                    <td className="py-2">🎧 Bose noise cancelling</td>
                                    <td>$948.55</td>
                                    <td>2</td>
                                    <td>$630.44</td>
                                </tr>
                                <tr className="border-b hover:bg-gray-50">
                                    <td><input type="checkbox" /></td>
                                    <td className="py-2">🎧 Philips wireless headphone</td>
                                    <td>$767.50</td>
                                    <td>3</td>
                                    <td>$767.50</td>
                                </tr>
                                <tr className="border-b hover:bg-gray-50">
                                    <td><input type="checkbox" /></td>
                                    <td className="py-2">⌚ Cumitt smart watch</td>
                                    <td>$396.84</td>
                                    <td>1</td>
                                    <td>$475.22</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td><input type="checkbox" /></td>
                                    <td className="py-2">🎮 Google Fixel Buds</td>
                                    <td>$778.35</td>
                                    <td>4</td>
                                    <td>$293.01</td>
                                </tr>
                            </tbody>
                        </table>

                        {/* Totals */}
                        <div className="mt-4 text-right text-sm space-y-1">
                            <p>Subtotal: <span className="ml-2">$630.44</span></p>
                            <p>Tax(20%): <span className="ml-2">$782.01</span></p>
                            <p>Discount: <span className="ml-2">$293.01</span></p>
                            <p className="text-lg font-bold">Total: <span className="ml-2 text-cyan-600">310,000</span></p>
                            <p>Status: <span className="ml-2 px-2 py-1 bg-cyan-100 text-cyan-600 rounded text-xs">Pending</span></p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OrderDetails