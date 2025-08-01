import React, { useState } from 'react'
import { FaEllipsisV, FaCcVisa, FaCcMastercard, FaPaypal } from 'react-icons/fa';

function CompletedTransactions() {
     const [dropdownIndex, setDropdownIndex] = useState(null);
    return (
        <>
            <section className='w-[1136px] bg-[#fff] p-6 mt-[68px] ml-6 rounded-2xl'>
                <div >
                    <h2 className="text-lg font-semibold mb-4">Completed transactions</h2>

                    <table className="w-full text-sm text-left">
                        <thead>
                            <tr className="text-gray-500 border-b">
                                <th><input type="checkbox" /></th>
                                <th className="py-2">Order ID</th>
                                <th>Paid</th>
                                <th>Payment Method</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr className="border-b hover:bg-gray-50">
                                <td><input type="checkbox" /></td>
                                <td className="py-2">id</td>
                                <td>paid</td>
                                <td className="flex items-center gap-2">icon method</td>
                                <td>date</td>
                                <td>
                                    <span className="text-orange-500 text-sm font-medium flex items-center gap-1">
                                        <span className="h-2 w-2 rounded-full bg-orange-500"></span>
                                        status
                                    </span>
                                </td>
                                <td className="relative">
                                    <button
                                        className="text-gray-500 hover:text-black"
                                        onClick={() => setDropdownIndex(dropdownIndex === 0 ? null : 0)}
                                    >
                                        <FaEllipsisV />
                                    </button>
                                    {dropdownIndex === 0 && (
                                        <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md z-10 p-2 text-sm">
                                            <ul className="space-y-1">
                                                <li className="hover:text-black cursor-pointer">View details</li>
                                                <li className="hover:text-black cursor-pointer">Edit transaction</li>
                                                <li className="hover:text-black cursor-pointer">Completed</li>
                                                <li className="text-red-500 hover:text-red-700 cursor-pointer">Cancel</li>
                                            </ul>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    {/* Pagination */}
                    <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center space-x-2">
                            {[1, 2, 3, 4, 5].map((n) => (
                                <button
                                    key={n}
                                    className={`px-3 py-1 rounded-full text-sm ${n === 1 ? 'bg-violet-600 text-white' : 'text-gray-600 bg-gray-100 hover:bg-gray-200'}`}
                                >
                                    {n}
                                </button>
                            ))}
                        </div>
                        <button className="text-sm px-4 py-1 border rounded-md text-gray-400">Next →</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CompletedTransactions