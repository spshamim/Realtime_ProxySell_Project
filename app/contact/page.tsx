"use client"
import MainLayout from "@/components/layout/mainLayout";

export default function Contact() {
  return (
    <MainLayout>
      <div className="h-screen w-screen flex justify-center items-center bg-[#181818] bg-cover bg-center bg-no-repeat opacity-[1.6]">
      <div className="w-[90%] max-w-[800px] tutorials-page-bandbox backdrop-blur-[5px] text-white p-[30px] rounded-[25px] mb-[120px]">
        <h2 className="text-[38px] font-bold text-[#ff1a1a] text-center mb-[20px] toolpage-head-shadow font-timmana">Contacts</h2>
        <ul className="list-none mt-[20px] font-secularone">
          <li className="my-5">
            <a href="https://t.me/+IYQiMmNJL8kyZWY9" target="_blank" rel="noopener noreferrer" className="text-[#d82c2c] text-[18px] hover:text-[#ff4d4d] hover:underline">
              Join Our Telegram Main Group
            </a>
          </li>
          <li className="my-5">
            <a href="https://t.me/+EtzFLJKNrQQ4NjVl" target="_blank" rel="noopener noreferrer" className="text-[#d82c2c] text-[18px] hover:text-[#ff4d4d] hover:underline">
              Join Our Telegram Support Group
            </a>
          </li>
        </ul>
      </div>
      </div>
    </MainLayout>
  );
}
