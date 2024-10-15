"use client"
import MainLayout from "@/components/layout/mainLayout";
import Link from "next/link";
import { FaArrowLeft } from 'react-icons/fa';
import { useForm } from "react-hook-form";
import { auth, db } from "@/lib/firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useToast } from "@/hooks/use-toast";

export default function ForgotPassword() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { toast } = useToast(); 

  const checkEmailExists = async (email:string) => {
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("email", "==", email));
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;
  };

  const onSubmit = async (data:any) => {
    const emailExists = await checkEmailExists(data.email);

    if(!emailExists) {
      toast({
        variant: "theme2",
        title: "Email not found!",
        description: "The email you entered does not exist."
      });
      return;
    }

    try {
      await sendPasswordResetEmail(auth, data.email);
      toast({
        variant: "theme1",
        title: "Reset email sent!",
        description: "Please check your email for instructions."
      })
    } catch (error:any) {
      toast({
        variant: "theme2",
        title: "Send reset email failed!",
        description: error.message
      });
    }
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
