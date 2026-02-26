import { RiDiscountPercentLine } from "react-icons/ri";
import { FaEnvelope } from "react-icons/fa";
import { SlHome } from "react-icons/sl";
import { MdOutlinePayment } from "react-icons/md";
import { BiSupport } from "react-icons/bi";


function MenuBar() {
  return (
     <div className="fixed bottom-0 left-0 w-full flex justify-center py-4 shadow-md">
          
            <div className="flex mb-10  gap-8">

              <div className="w-[64px] h-[64px] bg-[#7EBFBD]  rounded-3xl pt-3 pr-3 pl-5">
                 <BiSupport className="w-[40px] h-[37px] text-[#FFFFFF]" />
                <p className="text-base mt-5 m font-normal text-[#000000]">پشتیبانی</p>
              </div>


              <div className="w-[64px] h-[64px] bg-[#D28A48]  rounded-3xl pt-3 pr-3 pl-5">
                 <MdOutlinePayment className="w-[40px] h-[37px] text-[#FFFFFF]"/>
                <p className="text-base mt-5 m font-normal text-[#000000]">پرداخت</p>
              </div>
                          <div className="w-[64px] h-[64px] bg-[#289DFC]  rounded-3xl pt-3 pr-3 pl-5">
                <SlHome className="w-[40px] h-[37px] text-[#FFFFFF]"/>
                <p className="text-base mt-5 m font-normal text-[#000000]">خانه</p>
              </div>
            
              <div className="w-[64px] h-[64px] bg-[#9D9ED6]  rounded-3xl pt-3 pr-3 pl-5">
                <FaEnvelope className="w-[40px] h-[37px] text-[#FFFFFF]"/>
                  <p className="text-base mt-5 m font-normal text-[#000000]">پیام‌ها</p>
              </div>
             
              <div className="w-[64px] h-[64px] bg-[#EF5DA8]  rounded-3xl pt-3 pr-3 pl-5">
                  <RiDiscountPercentLine className="w-[40px] h-[37px] text-[#FFFFFF]"/>
                  <p className="text-base mt-5 m font-normal text-[#000000]">تخفیف‌ها</p>
              </div>
             
          </div>
        

        </div>
        
  )
}

export default MenuBar