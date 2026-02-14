 import { CgGym } from "react-icons/cg";
import { GoChevronDown } from "react-icons/go";

function RegisterPage() {
  return (
    <div className="flex justify-center h-screen overflow-hidden">
      <div className=" w-[600px] h-screen bg-[#D0E4FF] border border-[#289DFC30] rounded-2xl box-border flex flex-col px-6 sm:px-12">
             <CgGym className="text-[#0F67FE] mt-10 mr-45 w-[120px] h-[120px]"/>
             <div className="mr-4 mt-6">
                <h1 className="text-xl !font-bold ">ثبت نام</h1>
                <p className="text-base !font-normal mt-2">برای ثبت‌نام اطلاعات خود را وارد نمایید.</p>
             </div>
             <div>
                <div className="w-full flex flex-col items-center gap-2 mt-10"> 
                    <label className="font-normal">نام و نام خانوادگی:</label>
                    <input  type="text"  className=" w-full max-w-[320px] h-[48px] bg-[#D0E4FF] border border-[#289DFC] outline-none hover:border-[#289DFC] rounded-2xl px-4"/>
                </div>
                 <div className="w-full flex flex-col items-center gap-2 mt-10">
                    <label className="font-normal">شماره همراه / ایمیل:</label>
                    <input  type="text" className=" w-full max-w-[320px] h-[48px] bg-[#D0E4FF] border border-[#289DFC] outline-none hover:border-[#289DFC] rounded-2xl px-4"/>
                </div>
                 
                  <div  className="w-full flex flex-col items-center gap-1 mt-10">
                     <label className="font-normal">جنسیت:</label>
                    <select
                      className="w-full max-w-[320px] h-[48px] border border-[#009ECA] rounded-2xl mt-5  text-sm p-1 appearance-none outline-none hover:border-[#009ECA]">
                         <option >
                        <GoChevronDown className="text-[#00000033] w-[15px] h-[15px]" />
                      </option>
                      <option value="male">مرد</option>
                      <option value="female">زن</option>
                    </select>
                  </div>
                <div className="w-full flex flex-col items-center gap-2 mt-10">
                    <div className="flex">
                        <label className="font-normal">کلمه عبور:</label>
                        <p className="text-[#D40000]">*</p>
                    </div>
                    <input  type="text" className=" w-full max-w-[320px] h-[48px] bg-[#D0E4FF] border border-[#289DFC] outline-none hover:border-[#289DFC] rounded-2xl px-4"/>
                </div>
                 <div className="w-full flex flex-col items-center gap-2 mt-10">
                    <div className="flex">
                        <label className="font-normal"> تکرار کلمه عبور:</label>
                        <p className="text-[#D40000]">*</p>
                    </div>
                    <input  type="text" className=" w-full max-w-[320px] h-[48px] bg-[#D0E4FF] border border-[#289DFC] outline-none hover:border-[#289DFC] rounded-2xl px-4"/>
                </div>
                  <button
                     className=" mr-22 w-full max-w-[320px] h-[48px] mt-8 bg-[#289DFC] border border-[#289DFC] outline-none hover:border-[#289DFC] rounded-2xl text-[#FFFFFF] text-xl">
                       تایید
                 </button>
             </div>
      </div>
    </div>
  )
}

export default RegisterPage