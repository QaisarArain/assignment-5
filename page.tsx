import React from "react";
import Header from "@/components/Header";
import Image from "next/image";

function Home () {
  return(
    <div className="h-screen">
    <Header />

    <div className="flex h-[80%]">
      <div className="w-1/2  justify-center items-start m-12 ">
      <h1 className="text-[37.84px]  text-[#000000] font-medium leading-[62.24px] ">IMPECCABLE CRAFTSMANSHIP AND FINESSE</h1>
      <p className="text-[29.24px] w-[798.9px] text-[#787054">An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.</p>
      <button className="text-[25.8px] bg-[#A29875] text-[#FFFFFF] px-10">Explore Now</button>
   </div>

   <div className="w-1/2 flex  bg-[#FFFFFF]">
    <Image src={"/images/figma.svg"} alt="hero image" width={421.38} height={573.59} />
   </div>
    </div>
    </div>
  )
}

export default Home