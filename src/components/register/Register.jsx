import React, { useState } from 'react'
import { FiUser, FiLock, FiEye, FiEyeOff } from "react-icons/fi";

function Register() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <section className='flex items-center justify-center h-screen bg-[#e8e8e8]'>
        <div className="w-[330px] p-10 rounded-xl bg-[#dde1e7] shadow-[inset_-3px_-3px_7px_#ffffff73,inset_2px_2px_5px_rgba(94,104,121,0.288)]">
          <div className="text-[33px] font-semibold mb-9 text-[#595959]">Register</div>
          <form action="#">
            {/* Name Field */}
               <div className="relative flex h-[50px] w-full mb-[20px]">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#595959]">
                <FiUser size={20} />
              </span>
              <input
                placeholder='Name'
                required
                type="text"
                className="pl-[45px] w-full h-full text-[18px] rounded-full text-[#595959] bg-[#dde1e7] outline-none border-none shadow-[inset_2px_2px_5px_#BABECC,inset_-5px_-5px_10px_#ffffff73]"
              />
            </div>
            {/* Email/Phone Field */}
            <div className="relative flex h-[50px] w-full">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#595959]">
                <FiUser size={20} />
              </span>
              <input
                placeholder='Email or Phone'
                required
                type="text"
                className="pl-[45px] w-full h-full text-[18px] rounded-full text-[#595959] bg-[#dde1e7] outline-none border-none shadow-[inset_2px_2px_5px_#BABECC,inset_-5px_-5px_10px_#ffffff73]"
              />
            </div>

            {/* Password Field */}
            <div className="relative flex h-[50px] w-full mt-5">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#595959]">
                <FiLock size={20} />
              </span>
              <input
                placeholder='Password'
                required
                type={showPassword ? "text" : "password"}
                className="pl-[45px] pr-[45px] w-full h-full text-[18px] rounded-full text-[#595959] bg-[#dde1e7] outline-none border-none shadow-[inset_2px_2px_5px_#BABECC,inset_-5px_-5px_10px_#ffffff73]"
              />
              <span
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#595959] cursor-pointer"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </span>
            </div>

            

            {/* Register Button */}
            <button
              type="submit"
              className="w-full h-[50px] mt-4 text-[18px] font-semibold rounded-full bg-[#dde1e7] text-[#595959] shadow-[2px_2px_5px_#BABECC,-5px_-5px_10px_#ffffff73] focus:outline-none focus:text-[#3498db] focus:shadow-inner"
            >
              Register
            </button>

            {/* Sign In Link */}
            <div className="mt-2 text-[#595959] text-[16px]">
              Already a member?{" "}
              <a href="login" className="text-[#3498db] hover:underline">
                Login
              </a>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default Register