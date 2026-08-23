import { IoAddOutline } from "react-icons/io5";
import { IoCheckmarkSharp } from "react-icons/io5";
import { IoAlertCircleSharp } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";

function TiketPage() {
  return (
    <div className="flex justify-center h-screen">
      <div className=" w-[600px]
          min-h-screen
          bg-white
          rounded-2xl
          items-center
          justify-center
          box-border
          px-6 sm:px-12
          pt-6">
           <h1 className="!font-normal text-2xl mt-8 flex  justify-center">تاریخچه تیکت‌ها</h1>
           <div className="flex gap-13 mt-10  justify-center">
            <p className="!font-normal text-lg text-[#3B3B3B]">عنوان</p>
            <p className="!font-normal text-lg text-[#3B3B3B]">تاریخ</p>
            <p className="!font-normal text-lg text-[#3B3B3B]">خلاصه</p>
            <p className="!font-normal text-lg text-[#3B3B3B]">وضعیت</p>
            <IoAddOutline className="w-[25px] h-[25px] text-[#0F67FE]"/>
           </div>
           <div className="w-[460px] h-[55px] bg-[#B4B4B4]  rounded-2xl flex gap-15 p-2 mt-15 ">
            <p className="!font-normal text-lg text-[#3B3B3B]">عنوان</p>
            <p className="!font-normal text-lg text-[#3B3B3B]">تاریخ</p>
            <p className="!font-normal text-lg text-[#3B3B3B]">خلاصه</p>
           <div className="flex gap-5 mr-10 mt-2">
             <IoCheckmarkSharp className="w-[25px] h-[25px] text-[#0F67FE]" />
             |
            <IoAlertCircleSharp className="w-[25px] h-[25px] text-[#0F67FE]" />
           </div>
           </div>
            <div className="w-[460px] h-[55px] bg-[#B4B4B4]  rounded-2xl flex gap-15 p-2 mt-5 ">
            <p className="!font-normal text-lg text-[#3B3B3B]">عنوان</p>
            <p className="!font-normal text-lg text-[#3B3B3B]">تاریخ</p>
            <p className="!font-normal text-lg text-[#3B3B3B]">خلاصه</p>
           <div className="flex gap-5 mr-10 mt-2">
             <IoCloseSharp  className="w-[30px] h-[30px] text-[#FF0000BD] mb-2" />
             |
            <IoAlertCircleSharp className="w-[25px] h-[25px] text-[#0F67FE]" />
           </div>
           </div>
           <div className="w-[460px] h-[55px] bg-[#B4B4B4]  rounded-2xl flex gap-15 p-2 mt-5 ">
            <p className="!font-normal text-lg text-[#3B3B3B]">عنوان</p>
            <p className="!font-normal text-lg text-[#3B3B3B]">تاریخ</p>
            <p className="!font-normal text-lg text-[#3B3B3B]">خلاصه</p>
           <div className="flex gap-5 mr-10 mt-2">
             <IoCheckmarkSharp className="w-[25px] h-[25px] text-[#0F67FE]" />
             |
            <IoAlertCircleSharp className="w-[25px] h-[25px] text-[#0F67FE]" />
           </div>
           </div>
           <div className="w-[460px] h-[55px] bg-[#B4B4B4]  rounded-2xl flex gap-15 p-2 mt-5 ">
            <p className="!font-normal text-lg text-[#3B3B3B]">عنوان</p>
            <p className="!font-normal text-lg text-[#3B3B3B]">تاریخ</p>
            <p className="!font-normal text-lg text-[#3B3B3B]">خلاصه</p>
           <div className="flex gap-5 mr-10 mt-2">
             <IoCheckmarkSharp className="w-[25px] h-[25px] text-[#0F67FE]" />
             |
            <IoAlertCircleSharp className="w-[25px] h-[25px] text-[#0F67FE]" />
           </div>
           </div>
      </div>
    </div>
  )
}

export default TiketPage