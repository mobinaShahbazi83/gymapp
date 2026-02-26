import { TbDeviceIpadHorizontalSearch } from "react-icons/tb";
import { TbMessageSearch } from "react-icons/tb";
import { CiDumbbell } from "react-icons/ci";
import { LuDumbbell } from "react-icons/lu";
import { GiHighKick } from "react-icons/gi";
import { GiBrain } from "react-icons/gi";



function HomePage() {
  return (
    <div className="flex justify-center">
      <div
        className="
          w-[600px]
          min-h-screen
          bg-white
          rounded-2xl
          box-border
          px-6 sm:px-12
          pt-6">
        <div className=" w-full flex justify-center mt-5 ">
          <div className="flex items-center gap-20">
            <div className="relative ">
               <TbDeviceIpadHorizontalSearch className="absolute inset-0 m-auto text-[#545454] text-lg w-[45px] h-[45px]" />
            </div>
            <input
              placeholder="جستجوی باشگاه"
              className="w-[445px] h-[43px] 
               text-sm px-3 rounded-3xl
               shadow-[0_6px_10px_-4px_rgba(0,0,0,0.25)] border border-[#3B3B3B]
               outline-none
               "/>
          </div>
        </div>
        <div className="flex justify-center mt-10 ">
          <img src="./images/workout.png" className="w-full h-[180px] rounded-3xl"/>
        </div>
          <div>
            <div  className="flex justify-center mt-10 gap-5">
              <div className="w-[64px] h-[64px] bg-[#2563EB]  rounded-3xl pt-3 pr-3 pl-5">
                <LuDumbbell className="w-[40px] h-[37px] text-[#FFFFFF]" />
                <p className="text-base mt-5 m font-normal text-[#000000]">باشگاه</p>
                </div>
              <div className="w-[64px] h-[64px] bg-[#3B86E3]  rounded-3xl pt-3 pr-3">
                <CiDumbbell className="w-[40px] h-[37px] text-[#FFFFFF]" />
                 <p className="text-[13px] mt-5 m font-normal text-[#000000]">باشگاه من</p>
              </div>
               <div className="w-[64px] h-[64px] bg-[#74B9B2]  rounded-3xl pt-3 pr-3">
                <TbMessageSearch className="w-[40px] h-[37px] text-[#FFFFFF]" />
                 <p className="text-base mt-5 m font-normal text-[#000000]">تاریخچه</p>
                </div>
            </div>
            <div className="flex justify-center mt-10 gap-5">
             <div className="w-[64px] h-[64px] bg-[#2563EB]  rounded-3xl pt-3 pr-3">
              <GiBrain  className="w-[40px] h-[37px] text-[#FFFFFF] " />
               <p className="text-base mt-5 m font-normal text-[#000000]">مربی</p>
              </div>
              <div className="w-[64px] h-[64px] bg-[#3B86E3]  rounded-3xl pt-3 pr-3">
                <GiHighKick className="w-[40px] h-[37px] text-[#FFFFFF]" />
                 <p className="text-base mt-5 m font-normal text-[#000000]">حرکات</p>
                </div>
            </div>
          </div>
           <div className="flex justify-center mt-13 ">
          <img src="./images/Frame.png" className="w-full h-[190px] rounded-3xl"/>
        </div>
      </div>
    </div>
  );
}

export default HomePage;