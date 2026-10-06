import { MdOutlinePhotoCamera } from "react-icons/md";
import { GoPencil } from "react-icons/go";
import { TbCircleDashedCheck } from "react-icons/tb";
import { IoSearchOutline } from "react-icons/io5";
import { Fa1 } from "react-icons/fa6";
import { Fa2 } from "react-icons/fa6";
import { Fa3 } from "react-icons/fa6";
import { Fa4 } from "react-icons/fa6";
import { Fa5 } from "react-icons/fa6";
import { Fa6 } from "react-icons/fa6";
import { Fa7 } from "react-icons/fa6";

function EntryExitPage() {
  return (
    <div className="w-full min-h-screen">
      <div className="flex items-center justify-between w-full mt-8 ml-5">

    
    <div className="text-left ml-10">
        <p className="!font-semibold text-lg">:تعداد کاربران باشگاه</p>
        <p className="!font-semibold text-lg">:کاربران فعال باشگاه</p>
        <p className="!font-semibold text-lg">:کاربران حاضر در باشگاه</p>
    </div>

  
    <div className="flex items-center gap-6 mr-15">

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

</div>
      <div className="flex flex-row-reverse justify-between items-center w-full px-15 mt-5">
        <h2 className="!font-semibold text-lg">:ورود و خروج</h2>
        <div className="flex items-center gap-2">
          <div className="w-[200px] h-[50px] bg-[#0088FF] rounded-4xl flex items-center justify-center gap-4">
            <TbCircleDashedCheck className="w-[30px] h-[30px] text-white" />
            <p className="!font-semibold text-lg text-white">
              ثبت ورود
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-5 gap-5">
        <button className="w-[530px] h-[70px] bg-[#289DFCE8] border border-[#289DFCE8] rounded-4xl !font-semibold text-lg text-[#FFFFFF]">سابقه ورود و خروج</button>
        <button className="w-[530px] h-[70px] bg-[#9595951C] border border-[#9595951C] rounded-4xl !font-semibold text-lg ">ورود و خروج</button>
      </div>
      <div className="flex justify-center mt-5 gap-5">
        <input
          placeholder=".جستجو کنید"
          className="w-[991px] h-[54px] bg-[#9595951C] border border-[#9595951C] outline-none rounded-4xl !font-semibold text-lg text-right p-4" />
        <div className="w-[57px] h-[57px] bg-[#9595951C] border border-[#9595951C] rounded-3xl"><IoSearchOutline className="w-[25px] h-[25px] mt-4 ml-4" /></div>
      </div>
      <div className="flex justify-center mt-5 gap-5 ">
        <button className="w-[200px] h-[54px] bg-[#9595951C] border border-[#9595951C] rounded-4xl !font-semibold text-lg ">شماره کمد</button>
        <button className="w-[200px] h-[54px] bg-[#9595951C] border border-[#9595951C] rounded-4xl !font-semibold text-lg ">نام و نام خانوادگی</button>
        <button className="w-[200px] h-[54px] bg-[#9595951C] border border-[#9595951C] rounded-4xl !font-semibold text-lg ">همه</button>
        <button className="w-[200px] h-[54px] bg-[#9595951C] border border-[#9595951C] rounded-4xl !font-semibold text-lg ">فیلتر</button>
      </div>
      <div className="flex justify-center mt-10 gap-8 ">
        <div className="w-[132px] h-[132px] bg-[#9595951C] border border-[#9595951C] rounded-4xl relative">
          <Fa1 className="w-[70px] h-[75px] text-[#289DFC61] mt-3" />
          <div className="absolute bottom-2 right-2 w-[55px] h-[55px] bg-[#9595951C] border border-[#289DFC] rounded-full pt-3 pl-3">
            <div className="w-[25px] h-[25px] bg-[#289DFC] border border-[#289DFC] rounded-full"></div>
          </div>
        </div>
        <div className="w-[132px] h-[132px] bg-[#9595951C] border border-[#9595951C] rounded-4xl relative">
          <Fa2 className="w-[70px] h-[75px] text-[#289DFC61] mt-3" />
           <div className="absolute bottom-2 right-2 w-[55px] h-[55px] bg-[#9595951C] border border-[#289DFC] rounded-full pt-3 pl-3">
            <div className="w-[25px] h-[25px] bg-[#289DFC] border border-[#289DFC] rounded-full"></div>
          </div>
        </div>
        <div className="w-[132px] h-[132px] bg-[#9595951C] border border-[#9595951C] rounded-4xl relative">
          <Fa3 className="w-[70px] h-[75px] text-[#289DFC61] mt-3" />
           <div className="absolute bottom-2 right-2 w-[55px] h-[55px] bg-[#9595951C] border border-[#289DFC] rounded-full pt-3 pl-3">
            <div className="w-[25px] h-[25px] bg-[#289DFC] border border-[#289DFC] rounded-full"></div>
          </div>
        </div>
        <div className="w-[132px] h-[132px] bg-[#9595951C] border border-[#9595951C] rounded-4xl relative">
          <Fa4 className="w-[70px] h-[75px] text-[#289DFC61] mt-3" />
           <div className="absolute bottom-2 right-2 w-[55px] h-[55px] bg-[#9595951C] border border-[#289DFC] rounded-full pt-3 pl-3">
            <div className="w-[25px] h-[25px] bg-[#289DFC] border border-[#289DFC] rounded-full"></div>
          </div>
        </div>
        <div className="w-[132px] h-[132px] bg-[#9595951C] border border-[#9595951C] rounded-4xl relative">
          <Fa5 className="w-[70px] h-[75px] text-[#289DFC61] mt-3" />
           <div className="absolute bottom-2 right-2 w-[55px] h-[55px] bg-[#9595951C] border border-[#289DFC] rounded-full pt-3 pl-3">
            <div className="w-[25px] h-[25px] bg-[#289DFC] border border-[#289DFC] rounded-full"></div>
          </div>
        </div>
        <div className="w-[132px] h-[132px] bg-[#9595951C] border border-[#9595951C] rounded-4xl relative">
          <Fa6 className="w-[70px] h-[75px] text-[#289DFC61] mt-3" />
           <div className="absolute bottom-2 right-2 w-[55px] h-[55px] bg-[#9595951C] border border-[#289DFC] rounded-full pt-3 pl-3">
            <div className="w-[25px] h-[25px] bg-[#289DFC] border border-[#289DFC] rounded-full"></div>
          </div>
        </div>
        <div className="w-[132px] h-[132px] bg-[#9595951C] border border-[#9595951C] rounded-4xl relative">
          <Fa7 className="w-[70px] h-[75px] text-[#289DFC61] mt-3" />
           <div className="absolute bottom-2 right-2 w-[55px] h-[55px] bg-[#9595951C] border border-[#289DFC] rounded-full pt-3 pl-3">
            <div className="w-[25px] h-[25px] bg-[#289DFC] border border-[#289DFC] rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-3 gap-20">
         <p className="!font-semibold text-lg">مریم فتحی</p>
         <p className="!font-semibold text-lg">مریم فتحی</p>
         <p className="!font-semibold text-lg">مریم فتحی</p>
         <p className="!font-semibold text-lg">مریم فتحی</p>
         <p className="!font-semibold text-lg">مریم فتحی</p>
         <p className="!font-semibold text-lg">مریم فتحی</p>
         <p className="!font-semibold text-lg ml-3">مریم فتحی</p>
      </div>
       <div className="flex justify-center mt-10 gap-8 ">
        <div className="w-[132px] h-[132px] bg-[#9595951C] border border-[#9595951C] rounded-4xl relative">
          <Fa1 className="w-[70px] h-[75px] text-[#289DFC61] mt-3" />
          <div className="absolute bottom-2 right-2 w-[55px] h-[55px] bg-[#9595951C] border border-[#289DFC] rounded-full pt-3 pl-3">
            <div className="w-[25px] h-[25px] bg-[#289DFC] border border-[#289DFC] rounded-full"></div>
          </div>
        </div>
        <div className="w-[132px] h-[132px] bg-[#9595951C] border border-[#9595951C] rounded-4xl relative">
          <Fa2 className="w-[70px] h-[75px] text-[#289DFC61] mt-3" />
           <div className="absolute bottom-2 right-2 w-[55px] h-[55px] bg-[#9595951C] border border-[#289DFC] rounded-full pt-3 pl-3">
            <div className="w-[25px] h-[25px] bg-[#289DFC] border border-[#289DFC] rounded-full"></div>
          </div>
        </div>
        <div className="w-[132px] h-[132px] bg-[#9595951C] border border-[#9595951C] rounded-4xl relative">
          <Fa3 className="w-[70px] h-[75px] text-[#289DFC61] mt-3" />
           <div className="absolute bottom-2 right-2 w-[55px] h-[55px] bg-[#9595951C] border border-[#289DFC] rounded-full pt-3 pl-3">
            <div className="w-[25px] h-[25px] bg-[#289DFC] border border-[#289DFC] rounded-full"></div>
          </div>
        </div>
        <div className="w-[132px] h-[132px] bg-[#9595951C] border border-[#9595951C] rounded-4xl relative">
          <Fa4 className="w-[70px] h-[75px] text-[#289DFC61] mt-3" />
           <div className="absolute bottom-2 right-2 w-[55px] h-[55px] bg-[#9595951C] border border-[#289DFC] rounded-full pt-3 pl-3">
            <div className="w-[25px] h-[25px] bg-[#289DFC] border border-[#289DFC] rounded-full"></div>
          </div>
        </div>
        <div className="w-[132px] h-[132px] bg-[#9595951C] border border-[#9595951C] rounded-4xl relative">
          <Fa5 className="w-[70px] h-[75px] text-[#289DFC61] mt-3" />
           <div className="absolute bottom-2 right-2 w-[55px] h-[55px] bg-[#9595951C] border border-[#289DFC] rounded-full pt-3 pl-3">
            <div className="w-[25px] h-[25px] bg-[#289DFC] border border-[#289DFC] rounded-full"></div>
          </div>
        </div>
        <div className="w-[132px] h-[132px] bg-[#9595951C] border border-[#9595951C] rounded-4xl relative">
          <Fa6 className="w-[70px] h-[75px] text-[#289DFC61] mt-3" />
           <div className="absolute bottom-2 right-2 w-[55px] h-[55px] bg-[#9595951C] border border-[#289DFC] rounded-full pt-3 pl-3">
            <div className="w-[25px] h-[25px] bg-[#289DFC] border border-[#289DFC] rounded-full"></div>
          </div>
        </div>
        <div className="w-[132px] h-[132px] bg-[#9595951C] border border-[#9595951C] rounded-4xl relative">
          <Fa7 className="w-[70px] h-[75px] text-[#289DFC61] mt-3" />
           <div className="absolute bottom-2 right-2 w-[55px] h-[55px] bg-[#9595951C] border border-[#289DFC] rounded-full pt-3 pl-3">
            <div className="w-[25px] h-[25px] bg-[#289DFC] border border-[#289DFC] rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-3 gap-20">
         <p className="!font-semibold text-lg">مریم فتحی</p>
         <p className="!font-semibold text-lg">مریم فتحی</p>
         <p className="!font-semibold text-lg">مریم فتحی</p>
         <p className="!font-semibold text-lg">مریم فتحی</p>
         <p className="!font-semibold text-lg">مریم فتحی</p>
         <p className="!font-semibold text-lg">مریم فتحی</p>
         <p className="!font-semibold text-lg ml-3">مریم فتحی</p>
      </div>
    </div>
  )
}

export default EntryExitPage