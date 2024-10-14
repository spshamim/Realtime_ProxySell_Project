"use client"
import React from "react";
import Link from "next/link";

export default function MainLayout({children}: {children:React.ReactNode}){
    return (
        <div className="flex flex-col h-screen overflow-hidden">
            <nav className="pt-5 pr-12 flex justify-between items-center bg-[#0b0b0b]
            overflow-hidden z-auto relative animate-breath border-bottom-bar shadow-box-shadow-bar bg-radial-glow">
                {/* Logo */}
                <div className="ml-5 text-[#ff0707] font-bold text-[28px] tracking-[3px]
        text-intense-glow hover:text-[#30ff07] hover:text-intense-glow-hover transition duration-300 ease mb-5">
                    <Link href="/">SHAMIM</Link>
                </div>

                {/* Menu */}
                <ul className="flex items-center space-x-4 list-none mb-5">
                {['Tools', 'Tutorials', 'Pricing', 'Contact'].map((item) => (
                    <li key={item} className="relative group">
                    <Link href={`/${item.toLowerCase()}`}>
                        <span className="text-[#f2f2f2] text-[18px] font-semibold relative no-underline group-hover:text-[#ff4d4d]">
                        {item}
                        <span className="absolute bottom-[-5px] left-0 h-[2px] w-full bg-[linear-gradient(90deg,transparent,#ff0707,transparent)] transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                        </span>
                    </Link>
                    </li>
                ))}
                </ul>

                {/* Button */}
                <div className="flex justify-between space-x-4 mb-5">
                    <Link href="/auth/login"><button type="button"
                    className="text-white text-[16px] py-2 px-6 cursor-pointer bg-button-gradient shadow-button-boxshadow rounded-[8px] border border-[rgba(255,0,0,0.8)]
                    hover:bg-button-hover-gradient hover:shadow-button-hover-glow hover:-translate-y-1 hover:scale-105 transition-all duration-300 ease-in-out font-semibold"
                    >Login</button></Link>

                    <Link href="/auth/signup"><button type="button"
                    className="text-white text-[16px] py-2 px-6 cursor-pointer bg-button-gradient shadow-button-boxshadow rounded-[8px] border border-[rgba(255,0,0,0.8)]
                    hover:bg-button-hover-gradient hover:shadow-button-hover-glow hover:-translate-y-1 hover:scale-105 transition-all duration-300 ease-in-out font-semibold"
                    >Signup</button></Link>
                </div>
            </nav>

            <main className="overflow-hidden flex-grow">
                {children}
            </main>

            <footer className="py-1 flex justify-center items-center bg-[#0b0b0b] 
                z-auto relative animate-breathTop border-footer-bar shadow-box-shadow-foooter bg-radial-glow">
            <span className="text-center text-[15px] font-semibold text-white">
                &copy; {new Date().getFullYear()} SHAMIM
            </span>
            </footer>
        </div>
    );
}