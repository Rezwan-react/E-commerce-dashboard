import React, { useState } from 'react';
import { BiPlus, BiTrash } from 'react-icons/bi';

function AddCategory() {
    const [categoryName, setCategoryName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [variants, setVariants] = useState([{ name: '', price: '' }]);
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleVariantChange = (index, field, value) => {
        const updated = [...variants];
        updated[index][field] = value;
        setVariants(updated);
    };

    const addVariant = () => {
        setVariants([...variants, { name: '', price: '' }]);
    };

    const removeVariant = (index) => {
        const updated = variants.filter((_, i) => i !== index);
        setVariants(updated);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to submit category data
        console.log({ categoryName, description, price, variants, image });
        setCategoryName('');
        setDescription('');
        setPrice('');
        setVariants([{ name: '', price: '' }]);
        setImage(null);
    };

    return (
        <section className="w-[1145px] bg-white p-6 mt-[68px] ml-6 rounded-2xl shadow-sm">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Add New Category</h1>
            <p className="text-gray-600 mb-6">
                Fill in the details below to add a new category to your system.
            </p>

            <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Category Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Category Name
                    </label>
                    <input
                        type="text"
                        value={categoryName}
                        onChange={(e) => setCategoryName(e.target.value)}
                        placeholder="Enter category name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-blue-500"
                        required
                    />
                </div>

                {/* Description */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Description
                    </label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter category description"
                        rows="3"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-blue-500"
                    />
                </div>

                {/* Price */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Price
                    </label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="Enter price"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-blue-500"
                        required
                    />
                </div>

                {/* Product Variants */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                        Product Variants
                    </label>
                    {variants.map((variant, index) => (
                        <div key={index} className="flex gap-3 mb-3">
                            <input
                                type="text"
                                value={variant.name}
                                onChange={(e) => handleVariantChange(index, 'name', e.target.value)}
                                placeholder="Variant Name"
                                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-blue-500"
                            />
                            <input
                                type="number"
                                value={variant.price}
                                onChange={(e) => handleVariantChange(index, 'price', e.target.value)}
                                placeholder="Price"
                                className="w-32 px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-blue-500"
                            />
                            {variants.length > 1 && (
                                <button
                                    type="button"
                                    onClick={() => removeVariant(index)}
                                    className="bg-red-500 text-white px-3 rounded-lg hover:bg-red-600"
                                >
                                    <BiTrash />
                                </button>
                            )}
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={addVariant}
                        className="flex items-center text-blue-500 font-medium hover:underline"
                    >
                        <BiPlus className="mr-1" /> Add Variant
                    </button>
                </div>

                {/* Image Upload */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Category Image
                    </label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
              file:rounded-lg file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100"
                    />
                    {image && (
                        <div className="mt-2">
                            <img
                                src={URL.createObjectURL(image)}
                                alt="Preview"
                                className="h-24 w-24 object-cover rounded-lg border"
                            />
                        </div>
                    )}
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
