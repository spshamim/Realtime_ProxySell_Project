"use client"
import MainLayout from "@/components/layout/mainLayout";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaArrowRight, FaGoogle } from 'react-icons/fa';
import { useForm } from "react-hook-form";
import { doc, setDoc, getDoc , Timestamp} from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  sendEmailVerification,
  deleteUser
}
from 'firebase/auth';
import { auth, googleProvider, db } from "@/lib/firebase";
import { useToast } from "@/hooks/use-toast"; 
import { useEffect, useState } from "react";

export default function Signup() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm(); 
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
        if (user) {
            await user.reload();
            setIsLoggedIn(user.emailVerified);
            if (!user.emailVerified) {
                toast({
                    variant: "theme2",
                    title: "Email not verified!",
                    description: "Please verify your email before logging in.",
                });
            }
        } else {
            setIsLoggedIn(false);
        }
    });

    return () => unsubscribe(); // cleanup function, detaches the listener from firebase when component unmounts
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
        router.push("/dashboard");
    }
  }, [isLoggedIn, router]);

  const saveUserCredentials = async (uid:string, username:string, email:string) => {
    const userDocRef = doc(db, "users", uid);
    const existingUser = await getDoc(userDocRef);
    if (existingUser.exists()) {
        throw new Error("User already exists");
    } else {
        await setDoc(userDocRef, {
            uid,
            username,
            email,
            joining: Timestamp.now()
        });
    }
  };

  const onSubmit = async (data:any) => {
    let user:any = null;
    
    try {
      const userCredentials = await createUserWithEmailAndPassword(auth, data.email, data.password); // auto signin
      const user = userCredentials.user;

      await saveUserCredentials(user.uid, data.uname, data.email);

      await sendEmailVerification(user);

      toast({
        variant: "theme1",
        title: "Account created successfully",
        description: "Please verify your email address...",
      })
      reset();

      await signOut(auth); // signout forcefully
    } catch (error:any) {
      if (user) { // if error occurs after user creation, delete the user
        await deleteUser(user);
      }
      
      toast({
        variant: "theme2",
        title: "Signup failed!",
        description: error.message,
      })
    }
  };

  const googleSubmit = async () => {
    let user:any = null;
    
    try {
      const userCredentials = await signInWithPopup(auth, googleProvider);
      const user = userCredentials.user;

      const email = user.email ?? "default@example.com";
      await saveUserCredentials(
        user.uid,
        user.displayName || email.split("@")[0],
        email
      );

      toast({
        variant: "theme1",
        title: "Google Signup successful!",
      })
    } catch (error:any) {
      if (user) { // if error occurs after user creation, delete the user
        await deleteUser(user);
      }
      
      toast({
        variant: "theme2",
        title: "Google Signup failed!",
        description: error.message,
      })
    }
  };

  return (
    <MainLayout>
      <div className="h-screen w-screen flex justify-center items-center bg-[#1a1a1a] bg-gradient-login-wrapper">
        <div className="bg-black bg-opacity-80 login-container backdrop-blur-[5px] p-[40px] rounded-[15px] w-[90%] max-w-[400px] text-center mb-[140px]">
          <h2 className="text-[28px] font-bold text-[#ff0000] text-center mb-[20px] toolpage-head-shadow">Signup</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-[20px]">
              <input
                type="text"
                placeholder="Username"
                className="p-[10px] rounded-[8px] border border-red-500 border-opacity-50 focus:outline-none bg-[#2a2a2a] text-[#fff] w-calc-full-minus-20 placeholder-gray-400"
                {...register("uname",
                  { required: "Username is required",
                    minLength: {
                      value: 3,
                      message: "Username should have at least 3 characters"
                    }
                  }
                )}
              />
            {errors.uname && typeof errors.uname.message === "string" && (
            <span className="text-[#dc3545] text-[16px] font-semibold">{errors.uname.message}</span>)}
          </div>
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
          className="bg-gradient-login-button text-[#ffffff] text-[16px] font-[500] rounded-[8px] px-[10px] py-[10px] cursor-pointer mb-[15px] w-[100%] max-w-[300px] shadow-login-button-shadow hover:login-button-hover transition duration-300 ease-in-out"
          type="submit">
            Signup
            </button>
          </form>

          <button className="bg-gradient-login-button text-[#ffffff] text-[16px] font-[500px] rounded-[8px] cursor-pointer ml-[8px] p-[10px] mb-[15px] transition duration-300 ease-in-out w-[100%] max-w-[300px] shadow-login-button-shadow hover:login-button-hover flex justify-center items-center" onClick={googleSubmit}>
              <FaGoogle className="text-[18px] mr-[8px] align-middle" /> Signup with Google
          </button>

          <Link href="/auth/login" className="flex justify-center mt-[6px] text-[#ff0000] text-[16px] hover:underline transition duration-200 ease-in-out">Already have an account? Login <FaArrowRight className="ml-[6px] mt-[4px]" /></Link>
        </div>
      </div>
    </MainLayout>
  );
}
