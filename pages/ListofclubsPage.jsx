import { BiShow } from "react-icons/bi";
import { FaStar } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function ListofclubsPage() {
  return (
    <div className="flex justify-center h-screen"> 
     <div className=" w-[600px]
          min-h-screen
          bg-white
          rounded-2xl
          flex
          flex-col
          box-border"> 
          <h1 className="!font-normal text-2xl mt-5 flex justify-center">لیست باشگاه‌ها</h1> 
         <div className="  mt-5 mr-8">
          <h2 className="!font-normal text-1xl">جستجوی باشگاه‌ها</h2>
          <div className="flex mt-5 gap-3">
           <div className="w-[50px] h-[50px] border border-[#3474A8] rounded-4xl p-2"><BiShow className="w-[30px] h-[30px] text-[#3474A8] " /></div>
           <input className="w-[400px] h-[50px] border border-[#3474A8] outline-none hover:border-[#3474A8] rounded-4xl p-3 " placeholder="جستجو کنید."/>
          </div> 
          <div className="flex gap-2 mt-3 ">
           <div className="w-[120px] h-[40px] rounded-4xl border border-[#3474A8] pt-1 pr-10 text-base !font-normal">فیلتر</div>
           <div className="w-[120px] h-[40px] rounded-4xl border border-[#3474A8] p-2 !font-normal text-sm">توضیحات باشگاه</div>
           <div className="w-[120px] h-[40px] rounded-4xl border border-[#3474A8] pt-1 pr-10 !font-normal">امکانات</div>
           <div className="w-[120px] h-[40px] rounded-4xl border border-[#3474A8] pt-1 pr-10 !font-normal text-[#FFFFFF] bg-[#2563EB]">شهر</div>
          </div>
         </div>
         <h3 className="!font-normal text-2xl mt-15 flex justify-center"> باشگاه‌های موجود در شهر شما</h3>
         <div className="flex mt-8 gap-10">
          <div className="w-[220px] h-[190px] bg-[#E4E4E4] border border-[#3474A8] rounded-4xl mr-10 ">
          <div className="flex mt-3 mr-2 gap-5">
            <p className="!font-normal text-1xl">باشگاه ایرانشهر</p>
            <FaStar className="w-[20px] h-[20px] text-[#0015FF]"/>
            <p>4.5</p>
          </div>
           <div className="flex gap-5 m-4">
            <div className="w-[50px] h-[50px] rounded-4xl bg-[#FEFEFE] p-4 "><FaLocationDot  className="w-[20px] h-[20px] text-[#1100FF]"/></div>
            <span className="!font-normal text-xs mt-3">تهران، خیابان پاسداران، بالاتر از نیستان نهم، پلاک ۳۰۲</span>
          </div>
          <div className="flex gap-5 mr-5">
            <div className="w-[50px] h-[50px] rounded-4xl bg-[#FEFEFE] p-4 "><FaPhone className="w-[20px] h-[20px] text-[#1100FF]"/></div>
            <span className="!font-normal mt-3">09127783524</span>
          </div>
          </div>
           <div className="w-[220px] h-[190px] bg-[#E4E4E4] border border-[#3474A8] rounded-4xl ">
          <div className="flex mt-3 mr-2 gap-5">
            <p className="!font-normal text-1xl">باشگاه ایرانشهر</p>
            <FaStar className="w-[20px] h-[20px] text-[#0015FF]"/>
            <p>4.5</p>
          </div>
           <div className="flex gap-5 m-4">
            <div className="w-[50px] h-[50px] rounded-4xl bg-[#FEFEFE] p-4 "><FaLocationDot  className="w-[20px] h-[20px] text-[#1100FF]"/></div>
            <span className="!font-normal text-xs mt-3">تهران، خیابان پاسداران، بالاتر از نیستان نهم، پلاک ۳۰۲</span>
          </div>
          <div className="flex gap-5 mr-5">
            <div className="w-[50px] h-[50px] rounded-4xl bg-[#FEFEFE] p-4 "><FaPhone className="w-[20px] h-[20px] text-[#1100FF]"/></div>
            <span className="!font-normal mt-3">09127783524</span>
          </div>
          </div>
         </div>
          <div className="flex mt-8 gap-10">
          <div className="w-[220px] h-[190px] bg-[#E4E4E4] border border-[#3474A8] rounded-4xl mr-10 ">
          <div className="flex mt-3 mr-2 gap-5">
            <p className="!font-normal text-1xl">باشگاه ایرانشهر</p>
            <FaStar className="w-[20px] h-[20px] text-[#0015FF]"/>
            <p>4.5</p>
          </div>
           <div className="flex gap-5 m-4">
            <div className="w-[50px] h-[50px] rounded-4xl bg-[#FEFEFE] p-4 "><FaLocationDot  className="w-[20px] h-[20px] text-[#1100FF]"/></div>
            <span className="!font-normal text-xs mt-3">تهران، خیابان پاسداران، بالاتر از نیستان نهم، پلاک ۳۰۲</span>
          </div>
          <div className="flex gap-5 mr-5">
            <div className="w-[50px] h-[50px] rounded-4xl bg-[#FEFEFE] p-4"><FaPhone className="w-[20px] h-[20px] text-[#1100FF]"/></div>
            <span className="!font-normal mt-3">09127783524</span>
          </div>
          </div>
           <div className="w-[220px] h-[190px] bg-[#E4E4E4] border border-[#3474A8] rounded-4xl ">
          <div className="flex mt-3 mr-2 gap-5">
            <p className="!font-normal text-1xl">باشگاه ایرانشهر</p>
            <FaStar className="w-[20px] h-[20px] text-[#0015FF]"/>
            <p>4.5</p>
          </div>
           <div className="flex gap-5 m-4">
            <div className="w-[50px] h-[50px] rounded-4xl bg-[#FEFEFE] p-4 "><FaLocationDot  className="w-[20px] h-[20px] text-[#1100FF]"/></div>
            <span className="!font-normal text-xs mt-3">تهران، خیابان پاسداران، بالاتر از نیستان نهم، پلاک ۳۰۲</span>
          </div>
          <div className="flex gap-5 mr-5">
            <div className="w-[50px] h-[50px] rounded-4xl bg-[#FEFEFE] p-4 "><FaPhone className="w-[20px] h-[20px] text-[#1100FF]"/></div>
            <span className="!font-normal mt-3">09127783524</span>
          </div>
          </div>
         </div>


     </div>
    </div>
  )
}

export default ListofclubsPage