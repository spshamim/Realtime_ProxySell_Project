"use client"
import MainLayout from "@/components/layout/mainLayout";
import Link from "next/link";
import { FaArrowLeft } from 'react-icons/fa';
import { useForm } from "react-hook-form";
import React,{ useEffect , useState} from "react"; 

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm(); 

  const onSubmit = async (data:any) => {
    console.log(data);
  };

  return (
    <MainLayout>
      <div className="h-screen w-screen flex justify-center items-center bg-[#1a1a1a] bg-gradient-login-wrapper">
        <div className="bg-black bg-opacity-80 login-container backdrop-blur-[5px] p-[40px] rounded-[15px] w-[90%] max-w-[400px] text-center mb-[140px]">
          <h2 className="text-[28px] font-bold text-[#ff0000] text-center mb-[20px] toolpage-head-shadow">Forgot Password</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-[20px]">
              <input
                type="email"
                placeholder="Email"
                className="p-[10px] rounded-[8px] border border-red-500 border-opacity-50 focus:outline-none bg-[#2a2a2a] text-[#fff] w-calc-full-minus-20 placeholder-gray-400"
                {...register("email",
                  { required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Invalid email address"
                    }
                  }
                )}
              />
            {errors.email && typeof errors.email.message === "string" && (
            <span className="text-[#dc3545] text-[16px] font-semibold">{errors.email.message}</span>)}
          </div>
          <button
          className="bg-gradient-login-button text-[#ffffff] text-[16px] font-[500] rounded-[8px] px-[10px] py-[10px] cursor-pointer mb-[15px] w-[100%] max-w-[300px] shadow-login-button-shadow hover:login-button-hover transition duration-300 ease-in-out"
          type="submit">
            Reset Password
            </button>
          </form>

          <Link href="/auth/login" className="flex justify-center items-center mt-[6px] text-[#ff0000] text-[16px] hover:underline transition duration-200 ease-in-out">
            <FaArrowLeft className="mr-[10px]" /> Back to Login
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}
