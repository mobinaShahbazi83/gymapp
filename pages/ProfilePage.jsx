import { GoArrowLeft } from "react-icons/go";

function ProfilePage() {
  return (
    <div className="flex justify-center h-screen overflow-hidden">
     <div className="
          w-[600px] h-[770px]
          mt-3

          rounded-2xl">
          <div className=" flex gap-50">
            <h1 className="text-[#000000] font-medium text-xl mr-55 mt-5">تنظیمات پروفایل</h1>
            <GoArrowLeft className="w-[30px] h-[30px] mt-4"/>
          </div>
          <div>
            <img src="/images/profilephoto.png" className="w-[125px] h-[125px] mr-55 mt-5"/>
          </div>
          <div className="flex flex-col mr-25">
            <label className="text-[#000000] text-lg ">نام و نام خانوادگی</label>
            <input type="text" className=" w-[380px] h-[35px] bg-[#D0E4FF] outline-none mt-2 hover:border-[#289DFC] border border-[#000000]  rounded-2xl px-4"/>
          </div>
          <div className="flex flex-col mr-25">
            <label className="text-[#000000] text-lg ">شماره همراه / ایمیل</label>
            <input type="text" className=" w-[380px] h-[35px] bg-[#D0E4FF] outline-none mt-2 hover:border-[#289DFC] border border-[#000000]  rounded-2xl px-4"/>
          </div>
          <div className="flex flex-col mr-25">
            <label className="text-[#000000] text-lg ">تاریخ تولد</label>
            <input type="text" className=" w-[380px] h-[35px] bg-[#D0E4FF] outline-none mt-2 hover:border-[#289DFC] border border-[#000000]  rounded-2xl px-4"/>
          </div>
          <div className="flex flex-col mr-25">
            <label className="text-[#000000] text-lg ">کد ملی</label>
            <input type="text" className=" w-[380px] h-[35px] bg-[#D0E4FF] outline-none mt-2 hover:border-[#289DFC] border border-[#000000]  rounded-2xl px-4"/>
          </div>
          <div className="flex flex-col mr-25">
            <label className="text-[#000000] text-lg ">جنسیت</label>
            <input type="text" className=" w-[380px] h-[35px] bg-[#D0E4FF] outline-none mt-2 hover:border-[#289DFC] border border-[#000000]  rounded-2xl px-4"/>
          </div>
          <div className="flex flex-col mr-25">
            <label className="text-[#000000] text-lg ">استان</label>
            <input type="text" className=" w-[380px] h-[35px] bg-[#D0E4FF] outline-none mt-2 hover:border-[#289DFC] border border-[#000000]  rounded-2xl px-4"/>
          </div>
          <div className="flex flex-col mr-25">
            <label className="text-[#000000] text-lg ">شهر</label>
            <input type="text" className=" w-[380px] h-[35px] bg-[#D0E4FF] outline-none mt-2 hover:border-[#289DFC] border border-[#000000]  rounded-2xl px-4"/>
          </div>

     </div>
    </div>
  )
}

export default ProfilePage