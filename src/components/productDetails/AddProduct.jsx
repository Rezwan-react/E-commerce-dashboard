import React, { useState } from "react";
import { CiCircleRemove } from "react-icons/ci";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { productServices } from "../../services/api";

function AddProduct() {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        price: "",
        stock: "",
        category: "",
        mainImg: null,
        images: [],
        variants: [],
    });

    const [variants, setVariants] = useState([
        {
            name: "",
            options: [{ name: "", additionalPrice: 0 }],
        },
    ]);

    const navigate = useNavigate();
    const categoriesData = useSelector(
        (state) => state.categorySlice.categories
    );
    console.log(categoriesData);

    // --- INPUT HANDLERS ---
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    // const handleInputChanges = (e) => {
    //         const { categoryName, value } = e.target;
    //         setFormData((prev) => ({ ...prev, [categoryName]: value }));
    //     };
    // --- MAIN IMAGE ---
    const handleMainImageUpload = (e) => {
        setFormData((prev) => ({ ...prev, mainImg: e.target.files[0] }));
    };

    // --- MULTIPLE IMAGES ---
    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        setFormData((prev) => ({ ...prev, images: [...prev.images, ...files] }));
    };

    const removeImage = (index) => {
        setFormData((prev) => ({
            ...prev,
            images: prev.images.filter((_, i) => i !== index),
        }));
    };

    // --- VARIANTS ---
    const handleVariantNameChange = (index, value) => {
        const newVariants = [...variants];
        newVariants[index].name = value;
        setVariants(newVariants);
    };

    const handleOptionChange = (variantIndex, optionIndex, field, value) => {
        const newVariants = [...variants];
        newVariants[variantIndex].options[optionIndex][field] =
            field === "additionalPrice" ? +value : value;
        setVariants(newVariants);
    };

    const addVariant = () => {
        setVariants([
            ...variants,
            { name: "", options: [{ name: "", additionalPrice: 0 }] },
        ]);
    };

    const addOption = (variantIndex) => {
        const newVariants = [...variants];
        newVariants[variantIndex].options.push({ name: "", additionalPrice: 0 });
        setVariants(newVariants);
    };

    // --- FORM SUBMIT ---
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.title || !formData.price || !formData.category) {
            toast.error("Please fill in all required fields");
            return;
        }

        const payload = new FormData();
        payload.append("title", formData.title);
        payload.append("description", formData.description);
        payload.append("price", formData.price);
        payload.append("stock", formData.stock);
        payload.append("category", formData.category);

        if (formData.mainImg) payload.append("mainImg", formData.mainImg);
        formData.images.forEach((file) => payload.append("images", file));

        payload.append("variants", JSON.stringify(variants));

        try {
            const res = await productServices.createProduct(payload);
            toast.success("Product added successfully!");
            navigate("/products");
        } catch (error) {
            toast.error("Failed to save product");
            console.error(error);
        }
    };

    return (
        <section className="w-[1136px] bg-white p-6 mt-[68px] ml-6 rounded-2xl">
            <form onSubmit={handleSubmit}>
                <div className="flex justify-between gap-6">
                    {/* LEFT SIDE */}
                    <div className="flex-1">
                        {/* Product Title */}
                        <div className="flex flex-col gap-2">
                            <label className="font-medium text-[#07070C]">Product Name</label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleInputChange}
                                placeholder="Enter product name"
                                className="w-full px-4 py-3 border rounded-md"
                            />
                        </div>

                        {/* Description */}
                        <div className="flex flex-col gap-2 mt-6">
                            <label className="font-medium text-[#07070C]">Product Description</label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                placeholder="Enter product description"
                                className="w-full px-4 py-3 border rounded-md"
                            />
                        </div>

                        {/* Category */}
                        <div className="flex flex-col gap-2 mt-6">
                            <label className="font-medium text-[#07070C]">Category</label>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border rounded-md"
                            >
                                <option value="">Select category</option>
                                {categoriesData?.length > 0 ? (
                                    categoriesData.map((item) => (
                                        <option key={item._id} value={item._id}>
                                            {item.name}
                                        </option>
                                    ))
                                ) : (
                                    <option disabled>No categories available</option>
                                )}
                            </select>
                        </div>

                        {/* Variants */}
                        <div className="flex flex-col gap-4 mt-6">
                            <h3 className="font-medium text-[#07070C]">Variants</h3>
                            {variants.map((variant, vIndex) => (
                                <div key={vIndex} className="border p-4 rounded-md">
                                    <select
                                        value={variant.name}
                                        onChange={(e) =>
                                            handleVariantNameChange(vIndex, e.target.value)
                                        }
                                        className="w-full px-3 py-2 border rounded-md"
                                    >
                                        <option hidden>Variant type</option>
                                        <option value="color">Color</option>
                                        <option value="size">Size</option>
                                    </select>

                                    {variant.options.map((option, oIndex) => (
                                        <div key={oIndex} className="mt-2 flex gap-2 items-center">
                                            <input
                                                type="text"
                                                placeholder="Option name"
                                                value={option.name}
                                                onChange={(e) =>
                                                    handleOptionChange(vIndex, oIndex, "name", e.target.value)
                                                }
                                                className="flex-1 px-3 py-2 border rounded-md"
                                            />
                                            {variant.name === "size" && (
                                                <input
                                                    type="number"
                                                    placeholder="Additional Price"
                                                    value={option.additionalPrice}
                                                    onChange={(e) =>
                                                        handleOptionChange(vIndex, oIndex, "additionalPrice", e.target.value)
                                                    }
                                                    className="w-32 px-3 py-2 border rounded-md"
                                                />
                                            )}
                                        </div>
                                    ))}
                                    <button
                                        type="button"
                                        onClick={() => addOption(vIndex)}
                                        className="mt-2 bg-slate-200 px-2 py-1 rounded-md"
                                    >
                                        + Add Option
                                    </button>
                                </div>
                            ))}
                            <button
                                type="button"
                                onClick={addVariant}
                                className="mt-2 bg-blue-500 text-white px-3 py-1 rounded-md w-40"
                            >
                                + Add Variant
                            </button>
                        </div>

                        {/* Stock & Price */}
                        <div className="flex gap-6 mt-6">
                            <div className="flex-1 flex flex-col gap-2">
                                <label className="font-medium text-[#07070C]">Stock Quantity</label>
                                <input
                                    type="number"
                                    name="stock"
                                    value={formData.stock}
                                    onChange={handleInputChange}
                                    placeholder="Enter stock quantity"
                                    className="w-full px-4 py-3 border rounded-md"
                                />
                            </div>
                            <div className="flex-1 flex flex-col gap-2">
                                <label className="font-medium text-[#07070C]">Regular Price</label>
                                <input
                                    type="number"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleInputChange}
                                    placeholder="Enter regular price"
                                    className="w-full px-4 py-3 border rounded-md"
                                />
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE IMAGES */}
                    <div className="flex flex-col gap-6 w-[483px]">
                        {/* Main Image */}
                        <div className="border-2 border-dashed border-[#07070C] rounded-md bg-[#F9F9FB] p-4">
                            <label className="cursor-pointer flex flex-col items-center">
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={handleMainImageUpload}
                                />
                                <span className="font-medium text-[#07070C]">Upload Main Image</span>
                            </label>
                        </div>

                        {/* Extra Images */}
                        <div className="border-2 border-dashed border-[#07070C] rounded-md bg-[#F9F9FB] p-4">
                            <label className="cursor-pointer flex flex-col items-center">
                                <input
                                    type="file"
                                    accept="image/*"
                                    multiple
                                    className="hidden"
                                    onChange={handleImageUpload}
                                />
                                <span className="font-medium text-[#07070C]">Upload Images</span>
                                <span className="text-sm text-[#9A9AAF]">PNG, JPG, JPEG up to 5MB</span>
                            </label>
                        </div>

                        {/* Preview */}
                        {formData.images.length > 0 && (
                            <div className="grid grid-cols-3 gap-3">
                                {formData.images.map((file, index) => {
                                    const imgUrl = typeof file === "string" ? file : URL.createObjectURL(file);
                                    return (
                                        <div key={index} className="relative w-full h-24 border rounded-md overflow-hidden">
                                            <img src={imgUrl} alt="preview" className="w-full h-full object-cover" />
                                            <button
                                                type="button"
                                                onClick={() => removeImage(index)}
                                                className="absolute top-1 right-1 text-red-600 bg-white rounded-full"
                                            >
                                                <CiCircleRemove size={20} />
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>
                        )}

                        {/* Actions */}
                        <div className="flex justify-center items-center gap-4 mt-6">
                            <button type="submit" className="flex-1 h-[48px] bg-[#7364DB] text-white rounded-md hover:opacity-90">
                                Save Product
                            </button>
                            <button type="button" className="flex-1 h-[48px] bg-[#F5F5F5] rounded-md hover:bg-[#e23737c9]">
                                Cancel
                            </button>
                            <button type="button" className="flex-1 h-[48px] bg-[#E23738] text-white rounded-md hover:opacity-90">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    );
}

export default AddProduct;
