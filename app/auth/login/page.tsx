"use client"
import MainLayout from "@/components/layout/mainLayout";
import Link from "next/link";
import { FaGoogle, FaArrowRight } from 'react-icons/fa';
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast"; 

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm(); 
  const { toast } = useToast();

  const onSubmit = async (data:any) => {
    if(data.email === "shamim" && data.password === "1234"){
      toast({
        variant: "theme1",
        title: "Login Success",
        description: "You have successfully logged in",
      });
    }else{
      toast({
        variant: "theme2",
        title: "Login Failed",
        description: "Invalid email or password",
      });
    }
  };

  return (
    <MainLayout>
      <div className="h-screen w-screen flex justify-center items-center bg-[#1a1a1a] bg-gradient-login-wrapper">
        <div className="bg-black bg-opacity-80 login-container backdrop-blur-[5px] p-[40px] rounded-[15px] w-[90%] max-w-[400px] text-center mb-[140px]">
          <h2 className="text-[28px] font-bold text-[#ff0000] text-center mb-[20px] toolpage-head-shadow font-sarala">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-[20px]">
              <input
                type="text"
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
          <div className="mb-[20px]">
              <input
                type="password"
                placeholder="Password"
                className="p-[10px] rounded-[8px] border border-red-500 border-opacity-50 focus:outline-none bg-[#2a2a2a] text-[#fff] w-calc-full-minus-20 placeholder-gray-400"
                {...register("password",
                  { required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password should have at least 6 characters"
                    },
                    pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, message: "Password should contain at least one uppercase letter, one lowercase letter, one number, and one special character" }
                  }
                )}
              />
            {errors.password && typeof errors.password.message === "string" && (
            <span className="text-[#dc3545] text-[16px] font-semibold">{errors.password.message}</span>)}
          </div>
          <button
          className="font-sarala bg-gradient-login-button text-[#ffffff] text-[16px] font-[500] rounded-[8px] px-[10px] py-[10px] cursor-pointer mb-[15px] w-[100%] max-w-[300px] shadow-login-button-shadow hover:login-button-hover transition duration-300 ease-in-out"
          type="submit">
            Login
            </button>
          </form>

          <button className="font-sarala bg-gradient-login-button text-[#ffffff] text-[16px] font-[500px] rounded-[8px] cursor-pointer ml-[8px] p-[10px] mb-[15px] transition duration-300 ease-in-out w-[100%] max-w-[300px] shadow-login-button-shadow hover:login-button-hover flex justify-center items-center" >
              <FaGoogle className="text-[18px] mr-[8px] align-middle" /> Sign in with Google
          </button>

          <Link href="/auth/forgot-password" className="flex justify-center mt-[10px] text-[#ff0000] text-[16px] hover:underline transition duration-200 ease-in-out font-sarala">Forgot Password ? <FaArrowRight className="ml-[6px] mt-[4px]" /></Link>
          <Link href="/auth/signup" className="flex justify-center mt-[6px] text-[#ff0000] text-[16px] hover:underline transition duration-200 ease-in-out font-sarala">
            Don't have an account ? Signup <FaArrowRight className="ml-[6px] mt-[4px]" />
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}
