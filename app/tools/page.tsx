"use client"
import MainLayout from "@/components/layout/mainLayout";

export default function Tools() {
  return (
    <MainLayout>
      <div className="h-screen w-screen flex justify-center items-center bg-[#181818] bg-cover bg-center bg-no-repeat opacity-[1.6]">
      <div className="w-[90%] mb-[120px] max-w-[800px] bg-gradient-tool-page p-[30px] text-white toolpage-container rounded-[20px] backdrop-blur-[7px]">
        <h2 className="text-[38px] font-bold text-[#ff1a1a] text-center mb-[20px] toolpage-head-shadow font-timmana">Tools</h2>
        <ul className="list-none mt-[20px] font-secularone font-bold">
          <li className="my-5">
            <h3 className="text-[#ff4d4d] mb-[10px] text-[24px]">Windows: Proxifier</h3>
            <a href="https://www.proxifier.com/" target="_blank" rel="noopener noreferrer" className="text-white text-[18px] hover:text-[#ff4d4d] hover:underline transition duration-300 ease-in-out">
              Download
            </a>
          </li>
          <li className="my-5">
            <h3 className="text-[#ff4d4d] mb-[10px] text-[24px]">Linux: Proxifier</h3>
            <a href="https://www.proxifier.com/" target="_blank" rel="noopener noreferrer" className="text-white text-[18px] hover:text-[#ff4d4d] hover:underline transition duration-300 ease-in-out">
              Download
            </a>
          </li>
          <li className="my-5">
            <h3 className="text-[#ff4d4d] mb-[10px] text-[24px]">Proxifier Keys</h3>
            <a href="https://gist.github.com/f0r34chb3t4/a4f57239d76c27829066eae87fe3a8b9#file-keys-txt" target="_blank" rel="noopener noreferrer" className="text-white text-[18px] hover:text-[#ff4d4d] hover:underline transition duration-300 ease-in-out">
              Get Keys
            </a>
          </li>
          <li className="my-5">
            <h3 className="text-[#ff4d4d] mb-[10px] text-[24px]">Android: SocksDroid</h3>
            <a href="https://shorturl.at/cpxN2" target="_blank" rel="noopener noreferrer" className="text-white text-[18px] hover:text-[#ff4d4d] hover:underline transition duration-300 ease-in-out">
              Download
            </a>
          </li>
          <li className="my-5">
            <h3 className="text-[#ff4d4d] mb-[10px] text-[24px]">iOS: Potatso</h3>
            <a href="https://rb.gy/vvwxod" target="_blank" rel="noopener noreferrer" className="text-white text-[18px] hover:text-[#ff4d4d] hover:underline transition duration-300 ease-in-out">
              Download
            </a>
          </li>
        </ul>
      </div>
      </div>
    </MainLayout>
  );
}
