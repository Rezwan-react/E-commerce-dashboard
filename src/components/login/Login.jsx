import React, { useState } from 'react'
import { FiUser, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { useForm } from "react-hook-form"
import { authServices } from '../../services/api';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router';
import { loggedUser } from '../../store/slices/authSlice';

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userData = useSelector((state) => state.authSlice.user);
    // ============== Login Handler 
    const onSubmit = async (data) => {
        try {
            const res = await authServices.loginUser(data);
            dispatch(loggedUser(res.user))
            toast.success(res.success)
            setTimeout(() => {
                navigate("/")
            }, 1000);
        } catch (error) {
            toast.error(error.response?.data?.error || "Login failed");
        }

    }
    // ============= Redirect if Logged In
    if (userData) {
        return (
            <Navigate to="/" />
        )
    }

    return (
        <>
            <section className='flex items-center justify-center h-screen bg-[#e8e8e8]'>
                <div className="w-[330px] p-10 rounded-xl bg-[#dde1e7] shadow-[inset_-3px_-3px_7px_#ffffff73,inset_2px_2px_5px_rgba(94,104,121,0.288)]">
                    <div className="text-[33px] font-semibold mb-9 text-[#595959]">Login</div>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                        {/* Email Field */}
                        <div className="relative flex h-[50px] w-full">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#595959]">
                                <FiUser size={20} />
                            </span>
                            <input
                                placeholder='Email'
                                {...register("email", { required: "Email Address is required" })}
                                type="email"
                                id='email'
                                className="pl-[45px] w-full h-full text-[18px] rounded-full text-[#595959] bg-[#dde1e7] outline-none border-none shadow-[inset_2px_2px_5px_#BABECC,inset_-5px_-5px_10px_#ffffff73]"
                            />

                        </div>
                        {errors.email && (
                            <p className="text-red-500 ">{errors.email.message}</p>
                        )}

                        {/* Password Field */}
                        <div className="relative flex h-[50px] w-full mt-5">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#595959]">
                                <FiLock size={20} />
                            </span>
                            <input
                                placeholder='Password'
                                {...register("password", { required: "Password is required" })}
                                type={showPassword ? "text" : "password"}
                                id='password'
                                className="pl-[45px] pr-[45px] w-full h-full text-[18px] rounded-full text-[#595959] bg-[#dde1e7] outline-none border-none shadow-[inset_2px_2px_5px_#BABECC,inset_-5px_-5px_10px_#ffffff73]"
                            />
                            <span
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#595959] cursor-pointer"
                                onClick={() => setShowPassword((prev) => !prev)}
                            >
                                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                            </span>
                        </div>
                        {errors.password && (
                            <p className="text-red-500 ">{errors.password.message}</p>
                        )}
                        {/* Sign In Button */}
                        <button
                            type="submit"
                            className="w-full h-[50px] mt-4 text-[18px] font-semibold rounded-full bg-[#dde1e7] text-[#595959] shadow-[2px_2px_5px_#BABECC,-5px_-5px_10px_#ffffff73] focus:outline-none focus:text-[#3498db] focus:shadow-inner"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Login