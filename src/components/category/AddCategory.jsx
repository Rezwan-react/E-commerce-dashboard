import React, { useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import { categoryServices } from '../../services/api';
import { toast } from 'react-toastify';

function AddCategory() {
    const [categoryData, setCategoryData] = useState({
        categoryName: '',
        category: null,
    });

    const [categoryPreview, setCategoryPreview] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await categoryServices.createCategory(categoryData);
            console.log(categoryData);
            toast.success(res.message);
            // Reset form after success
            setCategoryData({ categoryName: '', category: null });
            setCategoryPreview('');
        } catch (error) {
            console.log(error.response?.data || error.message);
            toast.error(error.response?.data?.message || error.message);
        }
    };

    return (
        <section className="w-[1145px] bg-white p-6 mt-[68px] ml-6 rounded-2xl shadow-sm">
            <div className='mb-6'>
                <h2 className='text-2xl font-semibold'>Add New Category</h2>
            </div>
            <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Category Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Category Name
                    </label>
                    <input
                        type="text"
                        value={categoryData.categoryName}
                        onChange={(e) =>
                            setCategoryData((prev) => ({
                                ...prev,
                                categoryName: e.target.value,
                            }))
                        }
                        placeholder="Enter category name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-blue-500"
                        required
                    />
                </div>

                {/* Image Upload */}
                <div className="flex flex-col items-center justify-center w-[483px] h-[320px] border-2 border-dashed border-[#07070C] rounded-md bg-[#F9F9FB] mt-[48px] overflow-hidden ">
                    <label
                        htmlFor="product-image-upload"
                        className="cursor-pointer flex flex-col items-center"
                    >
                        {categoryPreview ? (
                            <img
                                src={categoryPreview}
                                alt="Category Preview"
                                className="w-full h-full overflow-hidden object-cover object-top rounded-md mb-3"
                            />
                        ) : (
                            <img
                                src="/images/upload-icon.png"
                                alt="Upload Icon"
                                className="w-12 h-12 mb-2"
                            />
                        )}
                        <span className="text-[16px] font-medium font-poppins text-[#07070C] mb-2">
                            Upload Product Image
                        </span>
                        <span className="text-[14px] text-[#9A9AAF] mb-2">
                            PNG, JPG, JPEG up to 5MB
                        </span>
                        <input
                            name="category"
                            onChange={(e) => {
                                const file = e.target.files[0];
                                if (file) {
                                    setCategoryData((prev) => ({
                                        ...prev,
                                        category: file,
                                    }));
                                    setCategoryPreview(URL.createObjectURL(file)); // ✅ Preview
                                }
                            }}
                            id="product-image-upload"
                            type="file"
                            accept="image/png, image/jpeg, image/jpg"
                            required
                            className="hidden"
                        />
                    </label>
                </div>

                {/* Submit Button */}
                <div>
                    <button
                        type="submit"
                        className="flex items-center bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 active:scale-95 transition-transform"
                    >
                        <BiPlus className="h-5 w-5 mr-2" />
                        Category Save
                    </button>
                </div>
            </form>
        </section>
    );
}

export default AddCategory;
