import React from "react";
import { FiSearch, FiFilter, FiMoreVertical } from "react-icons/fi";
import { MdOutlineCategory } from "react-icons/md";
import { FaBoxOpen } from "react-icons/fa";
import { BsBoxes } from "react-icons/bs";
import { Link } from "react-router";
import { useSelector } from "react-redux";


function CategoryDetails() {
    const userData = useSelector((state) => state.authSlice.user);
    const categories = [
        {
            id: 1,
            name: "Electronics",
            desc: "Electronic devices and gadgets",
            status: "Active",
            products: 45,
            image:
                "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80",
        },
        {
            id: 2,
            name: "Accessories",
            desc: "Phone and computer accessories",
            status: "Active",
            products: 32,
            image:
                "https://images.unsplash.com/photo-1580910051074-6c07a84b7d1f?w=500&q=80",
        },
        {
            id: 3,
            name: "Clothing",
            desc: "Fashion and apparel items",
            status: "Active",
            products: 78,
            image:
                "https://images.unsplash.com/photo-1521335629791-ce4aec67dd47?w=500&q=80",
        },
        {
            id: 4,
            name: "Home & Garden",
            desc: "Home improvement and garden supplies",
            status: "Inactive",
            products: 23,
            image:
                "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500&q=80",
        },
        {
            id: 5,
            name: "Sports",
            desc: "Sports equipment and gear",
            status: "Active",
            products: 15,
            image:
                "https://images.unsplash.com/photo-1599058917212-d750089bc07f?w=500&q=80",
        },
        {
            id: 6,
            name: "Books",
            desc: "Books and educational materials",
            status: "Draft",
            products: 0,
            image:
                "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&q=80",
        },
    ];

    return (
        <>
            <section className="w-[1145px] bg-white p-6 mt-[68px] ml-6 rounded-2xl shadow-sm">
                <div className="p-6 min-h-screen">
                    {/* button */}
                    {
                        userData?.role === "admin" && 
                            <div className="flex justify-end mb-6">
                                <Link to="/AddCategory" className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700">
                                    + Add Category
                                </Link>
                            </div>
                        
                    }


                    {/* Search and Filters */}
                    <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
                        <div className="relative flex-1 w-full">
                            <FiSearch className="absolute left-3 top-3 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search categories..."
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                            />
                        </div>
                        <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                            <option>All Status</option>
                            <option>Active</option>
                            <option>Inactive</option>
                            <option>Draft</option>
                        </select>
                        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
                            <FiFilter /> More Filters
                        </button>
                    </div>

                    {/* Category Cards */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categories.map((cat) => (
                            <div
                                key={cat.id}
                                className="bg-white rounded-xl shadow hover:shadow-md transition p-3 relative"
                            >
                                <img
                                    src={cat.image}
                                    alt={cat.name}
                                    className="w-full h-40 object-cover rounded-lg"
                                />
                                <button className="absolute top-3 right-3 bg-white rounded-full p-1 shadow hover:bg-gray-50">
                                    <FiMoreVertical />
                                </button>
                                <div className="mt-3">
                                    <h2 className="text-md font-semibold text-gray-800">
                                        {cat.name}
                                    </h2>
                                    <p className="text-sm text-gray-500">{cat.desc}</p>
                                    <div className="flex justify-between items-center mt-2">
                                        <span
                                            className={`text-xs px-2 py-1 rounded-full ${cat.status === "Active"
                                                ? "bg-green-100 text-green-600"
                                                : cat.status === "Inactive"
                                                    ? "bg-red-100 text-red-600"
                                                    : "bg-yellow-100 text-yellow-600"
                                                }`}
                                        >
                                            {cat.status}
                                        </span>
                                        <a
                                            href="#"
                                            className="text-blue-600 text-sm hover:underline"
                                        >
                                            View Details
                                        </a>
                                    </div>
                                    <p className="text-sm text-gray-500 mt-1">
                                        {cat.products} products
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Stats */}
                    <div className="grid sm:grid-cols-3 gap-6 mt-6">
                        <div className="bg-white shadow rounded-xl p-4 flex items-center gap-3">
                            <MdOutlineCategory className="text-blue-600 text-2xl" />
                            <div>
                                <p className="text-gray-500 text-sm">Total Categories</p>
                                <h3 className="font-bold text-lg">6</h3>
                            </div>
                        </div>
                        <div className="bg-white shadow rounded-xl p-4 flex items-center gap-3">
                            <FaBoxOpen className="text-green-600 text-2xl" />
                            <div>
                                <p className="text-gray-500 text-sm">Active Categories</p>
                                <h3 className="font-bold text-lg">4</h3>
                            </div>
                        </div>
                        <div className="bg-white shadow rounded-xl p-4 flex items-center gap-3">
                            <BsBoxes className="text-blue-600 text-2xl" />
                            <div>
                                <p className="text-gray-500 text-sm">Total Products</p>
                                <h3 className="font-bold text-lg">193</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CategoryDetails