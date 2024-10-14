"use client"
import MainLayout from "@/components/layout/mainLayout";

export default function Tutorials() {
  return (
    <MainLayout>
      <div className="h-screen w-screen flex justify-center items-center bg-[#181818] bg-cover bg-center bg-no-repeat opacity-[1.6]">
      <div className="w-[90%] max-w-[800px] tutorials-page-bandbox backdrop-blur-[5px] text-white p-[30px] rounded-[25px] mb-[120px]">
        <h2 className="text-[38px] font-bold text-[#ff1a1a] text-center mb-[20px] toolpage-head-shadow font-timmana">Tutorials</h2>
        <ul className="list-none font-secularone">
          <li className="mb-[20px] p-[15px] bg-white bg-opacity-10 rounded-[10px] border border-white border-opacity-20 hover:shadow-tutorials-item-hover transition duration-300 ease-in-out">
            <h3 className="text-[#ff4d4d] text-[20px] font-semibold">How To Add Money To Your Account</h3>
            <a href="https://youtu.be/x8OyhAz_SW4" target="_blank" rel="noopener noreferrer" className="text-white text-[16px] hover:underline">
              Watch on YouTube
            </a>
          </li>
          <li className="mb-[20px] p-[15px] bg-white bg-opacity-10 rounded-[10px] border border-white border-opacity-20 hover:shadow-tutorials-item-hover transition duration-300 ease-in-out">
            <h3 className="text-[#ff4d4d] text-[20px] font-semibold">How to Connect to SOCKS-5 Proxy on Windows/Linux</h3>
            <a href="https://youtu.be/QkAo5xt52X8" target="_blank" rel="noopener noreferrer" className="text-white text-[16px] hover:underline">
              Watch on YouTube
            </a>
          </li>
          <li className="mb-[20px] p-[15px] bg-white bg-opacity-10 rounded-[10px] border border-white border-opacity-20 hover:shadow-tutorials-item-hover transition duration-300 ease-in-out">
            <h3 className="text-[#ff4d4d] text-[20px] font-semibold">How to Connect to SOCKS-5 Proxy on Android/iOS</h3>
            <a href="https://youtu.be/nDGLqbOaVE0" target="_blank" rel="noopener noreferrer" className="text-white text-[16px] hover:underline">
              Watch on YouTube
            </a>
          </li>
        </ul>
      </div>
      </div>
    </MainLayout>
  );
}
