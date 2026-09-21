import { IoSettings } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoPersonAddOutline } from "react-icons/io5";
import { IoWalkSharp } from "react-icons/io5";
import { RiMentalHealthFill } from "react-icons/ri";
import { PiFlagBannerFold } from "react-icons/pi";
import { LuDoorOpen } from "react-icons/lu";
import { LuFileText } from "react-icons/lu";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import { MdManageHistory } from "react-icons/md";
import { IoIosLogIn } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";
import { IoTicketOutline } from "react-icons/io5";

function Sidebar() {
  return (
    <div className="w-full min-h-screen bg-[#289DFC] rounded-l-4xl">
      <div className="flex flex-col ">
        <div className="flex  justify-center mt-8 gap-1 ml-7">
          <h1 className="!font-normal text-base mt-4">فیتنو</h1>
            <img
              src="/images/Dumbbell.png"
              className="w-[100px] h-[100pxpx] rounded-4xl"
            />
        </div>
        <div className="flex  justify-end mt-15 gap-2 mr-3 ">
          <p className="!font-normal text-sm mt-1">مدیریت کارکنان</p>
          <IoSettings className="w-[30px] h-[30px]" />
        </div>
         {/* <div className="flex  justify-end mt-6 gap-2 mr-3 ">
          <p className="!font-normal text-sm mt-1">ثبت نام</p>
          <CgProfile className="w-[30px] h-[30px]" />
        </div> */}
        <div className="flex  justify-end mt-6 gap-2 mr-3 ">
          <p className="!font-normal text-sm mt-1">افزودن کاربر</p>
          <IoPersonAddOutline  className="w-[30px] h-[30px]" />
        </div>
         <div className="flex  justify-end mt-6 gap-2 mr-2 ">
          <p className="!font-normal text-sm mt-1">اعضای باشگاه</p>
          <IoWalkSharp  className="w-[30px] h-[30px]" />
      </div>
       <div className="flex  justify-end mt-6 gap-2 mr-2 ">
          <p className="!font-normal text-sm mt-1">ادمین</p>
          <RiMentalHealthFill   className="w-[30px] h-[30px]" />
      </div>
     
      <div className="flex  justify-end mt-6 gap-2 mr-2 ">
          <p className="!font-normal text-sm mt-1">بنر</p>
          <PiFlagBannerFold     className="w-[30px] h-[30px]" />
      </div>
      <div className="flex  justify-end mt-6 gap-2 mr-2 ">
          <p className="!font-normal text-sm mt-1">ورود و خروج</p>
          <LuDoorOpen     className="w-[30px] h-[30px]" />
      </div>
      <div className="flex  justify-end mt-6 gap-2 mr-2 ">
          <p className="!font-normal text-sm mt-1">گزارش عملکرد</p>
          <LuFileText     className="w-[30px] h-[30px]" />
      </div>
        <div className="flex  justify-end mt-6 gap-2 mr-2 ">
          <p className="!font-normal text-sm mt-1">پیام‌ها</p>
          <BiSolidMessageRoundedDetail      className="w-[30px] h-[30px]" />
      </div>
       <div className="flex  justify-end mt-6 gap-2 mr-2 ">
          <p className="!font-normal text-sm mt-1">سانس</p>
          <MdManageHistory      className="w-[30px] h-[30px]" />
      </div>
       <div className="flex  justify-end mt-6 gap-2 mr-2 ">
          <p className="!font-normal text-sm mt-1">تیکت</p> 
          <IoTicketOutline       className="w-[30px] h-[30px]" />
      </div>
      <div className="flex  justify-end mt-6 gap-2 mr-2 ">
          <p className="!font-normal text-sm mt-1">ورود و خروج</p>
          <IoIosLogIn     className="w-[30px] h-[30px]" />
      </div>
      <div className="flex  justify-center mt-15 gap-2 ml-7">
          <h2 className="!font-normal text-base mt-4">خروج از حساب</h2>
           <IoLogOutOutline className="w-[30px] h-[30px] mt-4" />
        </div>
    </div>
    </div>
  );
}

export default Sidebar;