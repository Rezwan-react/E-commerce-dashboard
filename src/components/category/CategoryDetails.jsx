import React, { useEffect, useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import { categoryServices } from "../../services/api";

function CategoryDetails() {
    const userData = useSelector((state) => state.authSlice.user);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        (async () => {
            const data = await categoryServices.categoryList();
            setCategories(data?.cateagors || []);
        })();
    }, []);

    return (
        <section className="w-[1145px] bg-white p-6 mt-[68px] ml-6 rounded-2xl shadow">
            <div className="min-h-screen">
                {/* Top Section */}
                <div className="flex justify-end items-center mb-8 ">
                    {userData?.role === "admin" && (
                        <Link
                            to="/AddCategory"
                            className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition flex items-center gap-2"
                        >
                            + Add Category
                        </Link>
                    )}
                </div>

                {/* Category Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((item) => (
                        <div
                            key={item._id}
                            className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow hover:shadow-lg transition p-4 relative border"
                        >

                            {/* Category Image */}
                            <div className="w-full h-70 rounded-lg overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.categoryName}
                                    className="w-full h-full object-cover object-top flex justify-center items-center"
                                />
                            </div>

                            {/* Info */}
                            <div className="mt-4">
                                <h2 className="text-lg font-semibold text-gray-800">
                                    {item?.categoryName}
                                </h2>
                                <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                                    {item?.desc}
                                </p>

                                {/* Status & Details */}
                                <div className="flex justify-between items-center mt-3">
                                    <span
                                        className={`text-xs px-2 py-1 rounded-full font-medium ${item?.status === "active"
                                                ? "bg-green-100 text-green-600"
                                                : item?.status === "Inactive"
                                                    ? "bg-red-100 text-red-600"
                                                    : "bg-yellow-100 text-yellow-600"
                                            }`}
                                    >
                                        {item?.status}
                                    </span>
                                    <Link
                                        to={`/categories/${item._id}`}
                                        className="text-blue-600 text-sm hover:underline"
                                    >
                                        View Details
                                    </Link>
                                </div>

                                {/* Product Count */}
                                <p className="text-sm text-gray-500 mt-2">
                                    {item?.products} products
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CategoryDetails;
