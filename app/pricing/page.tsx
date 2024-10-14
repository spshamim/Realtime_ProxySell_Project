"use client"
import MainLayout from "@/components/layout/mainLayout";

export default function Pricing() {
  const pricingData = [
  {
    title: "Monthly Packages",
    prices: [
        { speed: "100mbps", price: 160 },
        { speed: "60mbps", price: 130 },
        { speed: "50mbps", price: 100 },
        { speed: "40mbps", price: 90 },
        { speed: "30mbps", price: 70 },
        { speed: "20mbps", price: 50 }
    ]
  },
  {
    title: "15-Day Packages",
    prices: [
        { speed: "100mbps", price: 130 },
        { speed: "60mbps", price: 110 },
        { speed: "50mbps", price: 80 },
        { speed: "40mbps", price: 70 },
        { speed: "30mbps", price: 60 },
        { speed: "20mbps", price: 40 }
    ]
  },
  {
    title: "Weekly Packages",
    prices: [
        { speed: "100mbps", price: 100 },
        { speed: "60mbps", price: 90 },
        { speed: "50mbps", price: 70 },
        { speed: "40mbps", price: 60 },
        { speed: "30mbps", price: 50 },
        { speed: "20mbps", price: 30 }
    ]
  }
];
  
  return (
    <MainLayout>
      <div className="h-screen w-screen flex justify-center items-center bg-[#181818] bg-cover bg-center bg-no-repeat opacity-[1.6]">
      <div className="w-[90%] flex justify-around items-start tutorials-page-bandbox backdrop-blur-[5px] rounded-[25px] p-[30px] text-white max-w-[1200px] flex-wrap mb-[100px]">
                {pricingData.map((packageData, index) => (
                    <div key={index} className="bg-black bg-opacity-85 rounded-[15px] p-[20px] w-[30%] text-center mb-[20px] shadow-pricingCard-shadow hover:shadow-pricingCard-hover-shadow hover:-translate-y-[10px] transform transition duration-300 ease-in-out font-timmana font-bold">
                        <h3 className="text-[#f86d8d] text-[24px] mb-[20px] pb-[10px] border-b border-red-500 border-opacity-50">{packageData.title}</h3>
                        <ul className="list-none">
                            {packageData.prices.map((item, idx) => (
                                <li key={idx} className="text-white text-[18px] flex justify-between border-b border-[#3b0b0b] py-2.5 font-sarala">
                                    <span>{item.speed}</span>
                                    <span>{item.price} Taka</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
      </div>
    </MainLayout>
  );
}
