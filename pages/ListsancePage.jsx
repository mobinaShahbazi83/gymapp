import { IoSearch } from "react-icons/io5";
import { DiCodeigniter } from "react-icons/di";
import { PiSealDuotone } from "react-icons/pi";

function ListsancePage() {
  return (
    <div className="flex justify-center h-screen">
     <div  className="
          w-[600px]
          min-h-screen
          bg-white
          rounded-2xl
          box-border">
            <h1 className="text-xl font-extrabold flex mr-50">لیست سانس‌ها</h1>
            <div>
                <h2 className="mt-8 mr-3 font-extrabold">جستجوی باشگاه‌ها</h2>
                <div className="flex  mr-3 mt-5 gap-2">
                    <IoSearch className="w-[30px] h-[30px] text-[#F97316]"/>
                    <input 
                    type="text"
                    placeholder="جستجو کنید."
                    className="w-[291px] h-[35px] bg-[#F3F3F4] rounded-xl outline-none border hover:border-[#F97316] border-[#F97316]  "/>
                </div>
                <div className="flex gap-5 mt-5 mr-3">
                  <button className="w-[60px] h-[40px] rounded-xl bg-[#F3F3F4] border border-[#F97316]">فیلتر</button>  
                  <button className="w-[90px] h-[40px] rounded-xl bg-[#F3F3F4] border border-[#F97316]">تعداد جلسات</button> 
                   <button className="w-[80px] h-[40px] rounded-xl bg-[#F3F3F4] border border-[#F97316]">مدت زمان</button> 
                   <button className="w-[60px] h-[40px] rounded-xl bg-[#F3F3F4] border border-[#F97316]">شهریه</button> 
                </div>
            </div>
            <div className="w-[450px] h-[170px] bg-[#F3F3F4] rounded-xl mt-4 mr-15 border border-[#F97316]">
              <h1 className=" font-extrabold pt-1 mr-35">سانس دو ماهه</h1>
              <div className="flex">
                <div className="w-[80px] h-[80px] bg-[#F97316] rounded-3xl mt-8 mr-10 pt-5 pr-6">
                    <DiCodeigniter className="w-[28px] h-[28px] text-[#FFFFFF]" />
                </div>
               <div className="mr-5 mt-10">
                 <div className="flex gap-1">
                  <PiSealDuotone className="w-[30px] h-[30px] text-[#F97316]" />
                  <p>تعداد جلسات سانس: ۱۲ جلسه</p>
                </div>
                 <div className="flex gap-1">
                  <PiSealDuotone className="w-[30px] h-[30px] text-[#F97316]" />
                  <p>شهریه: ۱۲/۰۰۰/۰۰۰ تومان</p>
                </div>
               </div>
              </div>
        </div>
         <div className="w-[450px] h-[170px] bg-[#F3F3F4] rounded-xl mt-4 mr-15 border border-[#F97316]">
              <h1 className=" font-extrabold pt-1 mr-35">سانس دو ماهه</h1>
              <div className="flex">
                <div className="w-[80px] h-[80px] bg-[#F97316] rounded-3xl mt-8 mr-10 pt-5 pr-6">
                    <DiCodeigniter className="w-[28px] h-[28px] text-[#FFFFFF]" />
                </div>
               <div className="mr-5 mt-10">
                 <div className="flex gap-1">
                  <PiSealDuotone className="w-[30px] h-[30px] text-[#F97316]" />
                  <p>تعداد جلسات سانس: ۱۲ جلسه</p>
                </div>
                 <div className="flex gap-1">
                  <PiSealDuotone className="w-[30px] h-[30px] text-[#F97316]" />
                  <p>شهریه: ۱۲/۰۰۰/۰۰۰ تومان</p>
                </div>
               </div>
              </div>
        </div>
         <div className="w-[450px] h-[170px] bg-[#F3F3F4] rounded-xl mt-4 mr-15 border border-[#F97316]">
              <h1 className=" font-extrabold pt-1 mr-35">سانس دو ماهه</h1>
              <div className="flex">
                <div className="w-[80px] h-[80px] bg-[#F97316] rounded-3xl mt-8 mr-10 pt-5 pr-6">
                    <DiCodeigniter className="w-[28px] h-[28px] text-[#FFFFFF]" />
                </div>
               <div className="mr-5 mt-10">
                 <div className="flex gap-1">
                  <PiSealDuotone className="w-[30px] h-[30px] text-[#F97316]" />
                  <p>تعداد جلسات سانس: ۱۲ جلسه</p>
                </div>
                 <div className="flex gap-1">
                  <PiSealDuotone className="w-[30px] h-[30px] text-[#F97316]" />
                  <p>شهریه: ۱۲/۰۰۰/۰۰۰ تومان</p>
                </div>
               </div>
              </div>
        </div>
     </div>
    </div>
  )
}

export default ListsancePage