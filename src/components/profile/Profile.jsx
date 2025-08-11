import React, { useState } from 'react'
import { BiCalendar, BiCamera, BiEdit, BiMapPin, BiSave } from 'react-icons/bi'
import { RiMvAiLine } from 'react-icons/ri'
import { FaUserShield, FaUser } from 'react-icons/fa'
import { BsEye, BsEyeSlash } from 'react-icons/bs' // <-- Add this import

function Profile() {
    const [isEditing, setIsEditing] = useState(false);
    const [activeTab, setActiveTab] = useState('personal');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        department: "",
        location: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSave = (e) => {
        e.preventDefault();
        setIsEditing(false);
        // Save logic here
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    return (
        <section className='w-[1145px] bg-[#fff] p-6 mt-[68px] ml-6 rounded-2xl'>
            <div className="container space-y-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
                        <p className="text-gray-600">Manage your account information and preferences</p>
                    </div>
                </div>

                <div className='flex justify-between items-start gap-6'>
                    {/* Profile card */}
                    <div className="grid grid-cols-1 gap-6">
                        <div className="w-[400px] bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                            <div className="text-center">
                                <div className="relative inline-block">
                                    <img
                                        src=""
                                        alt="Profile"
                                        className="h-24 w-24 rounded-full object-cover mx-auto mb-4"
                                    />
                                    <label className="absolute bottom-0 right-0 bg-primary-600 text-white p-2 rounded-full cursor-pointer hover:bg-primary-700 transition-colors">
                                        <BiCamera className="h-4 w-4" />
                                        <input type="file" accept="image/*" className="hidden" />
                                    </label>
                                </div>

                                <h2 className="text-xl font-bold text-gray-900 mb-1">
                                    {form.Name || " Name"}
                                </h2>
                                <p className="text-gray-600 mb-2">Role</p>
                                <p className="text-sm text-gray-500 mb-4">{form.department || "Department"}</p>

                                <div className="space-y-2 text-sm">
                                    <div className="flex items-center justify-center space-x-2">
                                        <RiMvAiLine className="h-4 w-4 text-gray-400" />
                                        <span className="text-gray-600">{form.email || "email"}</span>
                                    </div>
                                    <div className="flex items-center justify-center space-x-2">
                                        <BiMapPin className="h-4 w-4 text-gray-400" />
                                        <span className="text-gray-600">{form.location || "location"}</span>
                                    </div>
                                    <div className="flex items-center justify-center space-x-2">
                                        <BiCalendar className="h-4 w-4 text-gray-400" />
                                        <span className="text-gray-600">Joined</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right section */}
                    <div>
                        {/* Tabs */}
                        <div className="border-b border-gray-200">
                            <nav className="-mb-px flex space-x-8">
                                {[
                                    { id: 'personal', label: 'Personal Info', icon: FaUser },
                                    { id: 'security', label: 'Security', icon: FaUserShield },
                                ].map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`flex items-center space-x-2 py-2 px-1 border-b-2 font-medium text-sm ${activeTab === tab.id
                                            ? 'border-blue-500 text-blue-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                            }`}
                                    >
                                        <tab.icon className="h-4 w-4" />
                                        <span>{tab.label}</span>
                                    </button>
                                ))}
                            </nav>
                        </div>

                        {/* Personal Info Form */}
                        {activeTab === 'personal' && (
                            <form className="flex flex-col space-y-6">
                                <div className="w-[600px] grid grid-cols-1 gap-6 sm:grid-cols-2 border border-gray-200 p-6">
                                    {["firstName", "lastName", "email", "phone", "department", "location"].map((field, idx) => (
                                        <div key={idx}>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                {field.charAt(0).toUpperCase() + field.slice(1)}
                                            </label>
                                            <input
                                                type={field === "email" ? "email" : "text"}
                                                name={field}
                                                value={form[field]}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none"
                                                required={field === "firstName" || field === "lastName" || field === "email"}
                                                disabled={!isEditing}
                                            />
                                        </div>
                                    ))}
                                    <div className="sm:col-span-2 flex justify-end mt-4">
                                        {!isEditing ? (
                                            <button
                                                type="button"
                                                className="flex items-center bg-blue-500 text-white py-2 px-4 rounded-lg active:scale-95 hover:bg-blue-600 transition-colors"
                                                onClick={handleEdit}
                                            >
                                                <BiEdit className="h-4 w-4 mr-2" />
                                                Edit
                                            </button>
                                        ) : (
                                            <button
                                                type="submit"
                                                className="flex items-center bg-blue-500 text-white py-2 px-4 rounded-lg active:scale-95 hover:bg-blue-600 transition-colors"
                                                onClick={handleSave}
                                            >
                                                <BiSave className="h-4 w-4 mr-2" />
                                                Save
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </form>
                        )}

                        {/* Security Tab */}
                        {activeTab === 'security' && (
                            <div className="w-[600px] border border-gray-200 p-6 mt-6 rounded-lg">
                                <h2 className="text-lg font-semibold mb-4">Security Settings</h2>
                                <div className="mb-4 relative">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Change Password</label>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="New Password"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none"
                                    />
                                    <span
                                        className="absolute right-3 top-[38px] cursor-pointer text-gray-500"
                                        onClick={() => setShowPassword((prev) => !prev)}
                                    >
                                        {showPassword ? <BsEyeSlash size={20} /> : <BsEye size={20} />}
                                    </span>
                                </div>
                                <div className="mb-4 relative">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        placeholder="Confirm Password"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none"
                                    />
                                    <span
                                        className="absolute right-3 top-[38px] cursor-pointer text-gray-500"
                                        onClick={() => setShowConfirmPassword((prev) => !prev)}
                                    >
                                        {showConfirmPassword ? <BsEyeSlash size={20} /> : <BsEye size={20} />}
                                    </span>
                                </div>
                                <div className="flex justify-end">
                                    <button type="button" className="flex items-center bg-blue-500 text-white py-2 px-4 rounded-lg active:scale-95 hover:bg-blue-600 transition-colors">
                                        <BiSave className="h-4 w-4 mr-2" />
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile;
