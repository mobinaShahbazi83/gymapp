import { MdOutlinePhotoCamera } from "react-icons/md";
import { GoPencil } from "react-icons/go";
import { IoPersonAddOutline } from "react-icons/io5";
import { GoChevronLeft } from "react-icons/go";
import { IoTrashOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";

function MessagesgymPage() {
  return (
    <div className="w-full h-[1110px]">
      <div className="flex justify-end items-center gap-8 mt-8 mr-10">
        <div className="flex items-center gap-2">
          <h1 className="!font-bold text-2xl">
            فیتنو
          </h1>
          <GoPencil className="w-[30px] h-[30px]" />
        </div>
        <div className="flex items-center justify-center w-[120px] h-[120px] bg-[#EDF6FE] rounded-full">
          <MdOutlinePhotoCamera className="w-[40px] h-[40px] text-[#668CAE]" />
        </div>
      </div>
      <div className="flex flex-row-reverse justify-between items-center w-full px-15 mt-10">
        <p className="!font-semibold text-lg">
          :لیست پیام‌ها
        </p>
        <div className="flex items-center gap-2">
          <div className="w-[181px] h-[40px] bg-[#0088FF] rounded-4xl flex items-center justify-center gap-4">
            <IoPersonAddOutline className="w-[22px] h-[22px] text-white" />
            <p className="!font-semibold text-lg text-white">
              سانس جدید
            </p>
          </div>
          <input
            placeholder="جستجو"
            className="text-lg text-right pb-2 pr-3 w-[510px] h-[40px] bg-[#F4F4F4D9] rounded-4xl border border-[#289DFC] outline-none"
          />
        </div>
      </div>
      <div className="w-[1500px] h-[570px] bg-[#EFEFEF] mx-auto mt-7 rounded-4xl">
        <div className="flex justify-end pt-6 pr-15 gap-20">
          <p className="!font-medium text-lg">پیشنهاد ویژه</p>
          <p className="!font-medium text-lg">تخفیف</p>
          <p className="!font-medium text-lg">آموزش</p>
          <p className="!font-medium text-lg">مالی</p>
          <p className="!font-medium text-lg">اطلاع‌رسانی</p>
          <p className="!font-medium text-lg">همه</p>
        </div>

        <div className="w-[1400px] h-[450px] bg-white mx-auto mt-5 rounded-4xl flex flex-col">
          <div className="w-[1300px] h-[130px]  ml-auto  flex flex-col text-right mr-10 mt-5">
            <h1 className="!font-semibold text-lg">
              عنوان پیام یا اعلانیه
            </h1>
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center gap-4">
                <GoChevronLeft className="w-[35px] h-[35px] text-[#2563EB]" />
                <IoTrashOutline className="w-[25px] h-[25px] text-[#2563EB]" />
                <CiEdit className="w-[27px] h-[27px] text-[#2563EB]" />
              </div>
               <p className="text-base !font-normal">
                خلاصه‌ای از اطلاعیه سیستمی اینجا نوشته شد.
              </p>
            </div>
            <p className="text-sm mt-2">
              ۱۴۰۳/۰۲/۰۲ | ساعت ۱۰:۴۵
            </p>
          </div>
           <div className="w-[1300px] h-[130px]  ml-auto  flex flex-col text-right mr-10 mt-3">
            <h1 className="!font-semibold text-lg">
              عنوان پیام یا اعلانیه
            </h1>
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center gap-4">
                <GoChevronLeft className="w-[35px] h-[35px] text-[#2563EB]" />
                <IoTrashOutline className="w-[25px] h-[25px] text-[#2563EB]" />
                <CiEdit className="w-[27px] h-[27px] text-[#2563EB]" />
              </div>
               <p className="text-base !font-normal">
                خلاصه‌ای از اطلاعیه سیستمی اینجا نوشته شد.
              </p>
            </div>
            <p className="text-sm mt-2">
              ۱۴۰۳/۰۲/۰۲ | ساعت ۱۰:۴۵
            </p>
          </div>
           <div className="w-[1300px] h-[130px]  ml-auto  flex flex-col text-right mr-10 mt-3">
            <h1 className="!font-semibold text-lg">
              عنوان پیام یا اعلانیه
            </h1>
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center gap-4">
                <GoChevronLeft className="w-[35px] h-[35px] text-[#2563EB]" />
                <IoTrashOutline className="w-[25px] h-[25px] text-[#2563EB]" />
                <CiEdit className="w-[27px] h-[27px] text-[#2563EB]" />
              </div>
               <p className="text-base !font-normal">
                خلاصه‌ای از اطلاعیه سیستمی اینجا نوشته شد.
              </p>
            </div>
            <p className="text-sm mt-2">
              ۱۴۰۳/۰۲/۰۲ | ساعت ۱۰:۴۵
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessagesgymPage;