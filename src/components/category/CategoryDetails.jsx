import React, { useEffect, useState } from "react";
import { FiSearch, FiFilter, FiMoreVertical } from "react-icons/fi";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import { categoryServices } from "../../services/api";

function CategoryDetails() {
    const userData = useSelector((state) => state.authSlice.user);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        (async () => {
            const data = await categoryServices.categoryList();
            setCategories(data.cateagors);
            console.log(data.cateagors);
            

        })()
    }, [])

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


                    {/* Category Cards */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categories.map((item) => (
                            <div
                                key={item._id}
                                className="bg-white rounded-xl shadow hover:shadow-md transition p-3 relative"
                            >
                                <img src={item.category } alt={item.categoryName } />
                                <h2>{item.categoryName }</h2>
                                <button className="absolute top-3 right-3 bg-white rounded-full p-1 shadow hover:bg-gray-50">
                                    <FiMoreVertical />
                                </button>
                                <div className="mt-3">
                                    <h2 className="text-md font-semibold text-gray-800">
                                        {item?.categoryName}
                                    </h2>
                                    <p className="text-sm text-gray-500">{item?.desc}</p>
                                    <div className="flex justify-between items-center mt-2">
                                        <span
                                            className={`text-xs px-2 py-1 rounded-full ${item?.status === "active"
                                                ? "bg-green-100 text-green-600"
                                                : item?.status === "Inactive"
                                                    ? "bg-red-100 text-red-600"
                                                    : "bg-yellow-100 text-yellow-600"
                                                }`}
                                        >
                                            {item?.status}
                                        </span>
                                        <a
                                            href="#"
                                            className="text-blue-600 text-sm hover:underline"
                                        >
                                            View Details
                                        </a>
                                    </div>
                                    <p className="text-sm text-gray-500 mt-1">
                                        {item?.products} products
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Stats
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
                    </div> */}
                </div>
            </section>
        </>
    )
}

export default CategoryDetails