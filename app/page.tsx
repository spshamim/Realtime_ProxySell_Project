"use client"
import MainLayout from "@/components/layout/mainLayout";

export default function Home() {
  return (
    <MainLayout>
    <div className="h-screen w-screen flex justify-center items-center bg-[#0b0b0b] bg-gradient-image bg-cover bg-center bg-no-repeat opacity-[1.6]">
        <div className="m-auto text-[#f2f2f2] text-center w-[50%] text-[28px] flex flex-col space-y-6 mt-[160px]">
          <p>This is a web app where you can buy SOCKS-5 proxies. Unlike buying locally where issues require contacting the seller for fixes, here you can solve problems yourself.</p>
          <p>We introduce a Proxy Regenerator to quickly fix non-working or slow proxies by changing servers, eliminating the need to rely on sellers for troubleshooting.</p>
          <p className="text-[#e1474c] font-bold warning-text-shadow">Warning: If Your ISP Is Dot, Amberit, Link3, Carnival, Don't Purchase From This Website.</p>
        </div>
    </div>
    </MainLayout>
  );
}
