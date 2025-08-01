import React from 'react'
import { FiMoreVertical, FiFilter, FiSearch } from "react-icons/fi";
import { BsDot } from "react-icons/bs";

function Clients() {
    return (
        <>
            <section className='w-[1136px] bg-[#fff] p-6 mt-[68px] ml-6 rounded-2xl'>
                <div >
                    {/* Header Filters */}
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-bold">Customers List</h2>
                        <div className="flex gap-2">
                            <select className="p-2 border rounded-md">
                                <option>All Category</option>
                            </select>
                            <input type="date" className="p-2 border rounded-md" />
                            <select className="p-2 border rounded-md">
                                <option>Status</option>
                            </select>
                            <button className="p-2 border rounded-md flex items-center gap-2">
                                <FiFilter /> Filters
                            </button>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="bg-white rounded-lg shadow">
                        <div className="overflow-x-auto">
                            <table className="min-w-full table-auto text-sm text-left">
                                <thead className="bg-gray-100 border-b text-gray-600">
                                    <tr>
                                        <th className="p-4">
                                            <input type="checkbox" />
                                        </th>
                                        <th className="p-4">Name</th>
                                        <th className="p-4">E-mail</th>
                                        <th className="p-4">Phone</th>
                                        <th className="p-4">Billing Address</th>
                                        <th className="p-4">Status</th>
                                        <th className="p-4">Joined</th>
                                        <th className="p-4">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                        <tr className="hover:bg-gray-50">
                                            <td className="p-4">
                                                <input type="checkbox" />
                                            </td>
                                            <td className="p-4 flex items-center gap-2">
                                                <img src="" alt="cust img" className="w-8 h-8 rounded-full" />
                                                <span className="font-semibold">cust.name</span>
                                            </td>
                                            <td className="p-4">cust.email</td>
                                            <td className="p-4">cust.phone</td>
                                            <td className="p-4">cust.address</td>
                                            <td className="p-4">
                                                <span className="flex items-center text-green-500">
                                                    <BsDot className="text-2xl" />
                                                    cust.status
                                                </span>
                                            </td>
                                            <td className="p-4">cust.joined</td>
                                            <td className="p-4 relative">
                                                <button className="p-2 rounded hover:bg-gray-200">
                                                    <FiMoreVertical />
                                                </button>
                                                {/* Dropdown actions - You can expand this logic */}
                                            </td>
                                        </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Clients