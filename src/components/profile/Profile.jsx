import React from 'react'
import { BiCalendar, BiCamera, BiMapPin, BiSave } from 'react-icons/bi'
import { RiMvAiLine } from 'react-icons/ri'

function Profile() {
    return (
        <>
            <section className='w-[1145px] bg-[#fff] p-6 mt-[68px] ml-6 rounded-2xl'>
                <div className="container space-y-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">Profile Settings</h1>
                            <p className="text-gray-600">Manage your account information and preferences</p>
                        </div>
                    </div>
                    <div className='flex justify-between items-start gap-6'>
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
                                            <input
                                                type="file"
                                                accept="image/*"

                                                className="hidden"
                                            />
                                        </label>
                                    </div>

                                    <h2 className="text-xl font-bold text-gray-900 mb-1">
                                        firstName
                                    </h2>
                                    <p className="text-gray-600 mb-2">role</p>
                                    <p className="text-sm text-gray-500 mb-4">department</p>

                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-center justify-center space-x-2">
                                            <RiMvAiLine className="h-4 w-4 text-gray-400" />
                                            <span className="text-gray-600">email</span>
                                        </div>
                                        <div className="flex items-center justify-center space-x-2">
                                            <BiMapPin className="h-4 w-4 text-gray-400" />
                                            <span className="text-gray-600">location</span>
                                        </div>
                                        <div className="flex items-center justify-center space-x-2">
                                            <BiCalendar className="h-4 w-4 text-gray-400" />
                                            <span className="text-gray-600">Joined </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <form className="flex flex-col space-y-6">
                                <div className="w-[600px] grid grid-cols-1 gap-6 sm:grid-cols-2 bg-white rounded-lg shadow-sm border border-gray-200 p-6 ">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            name="firstName"

                                            className=" w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            name="lastName"

                                            className=" w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"

                                            className=" w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"

                                            className=" w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Department
                                        </label>
                                        <input
                                            type="text"
                                            name="department"

                                            className=" w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Location
                                        </label>
                                        <input
                                            type="text"
                                            name="location"

                                            className=" w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                        />
                                    </div>
                                    <div className="flex justify-end">
                                        <button
                                            type="submit"

                                            className="btn-primary inline-flex items-center"
                                        >
                                            <BiSave className="h-4 w-4 mr-2" />

                                        </button>
                                    </div>
                                </div>


                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Profile