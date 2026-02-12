 import { CgGym } from "react-icons/cg";
 import { GiGymBag } from "react-icons/gi";


function LoginPage() {
  return (
    <div className="flex justify-center h-screen overflow-hidden">
      <div
        className="
          w-[600px] h-screen
          bg-[#D0E4FF]
          border border-[#289DFC30]
          rounded-2xl
          box-border
          flex
          flex-col
          items-center
          justify-center
          px-6 sm:px-12"> 
           
           <GiGymBag className="text-[#0F67FE] mb-15 w-[120px] h-[120px]"/>
       
        <div className="w-full flex text-center flex-col gap-4 pr-5">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 ">
            ورود
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            برای ورود اطلاعات خود را وارد نمایید.
          </p>
        </div>

        <div className="w-full flex flex-col items-center gap-2 mt-10">
          <label className="text-center w-full max-w-[300px]">شماره همراه</label>
          <input
            type="text"
            className=" w-full max-w-[350px] h-[50px] bg-[#D0E4FF] border border-[#000000] rounded-2xl px-4"
          />
        </div>

        <div className="w-full flex flex-col items-center gap-2 mt-6">
          <button
            className=" w-full max-w-[350px] h-[50px] bg-[#289DFC] border border-[#289DFC] rounded-2xl text-[#FFFFFF] text-xl"
          >
            تایید
          </button>
         <CgGym className="text-[#0F67FE] mt-16 w-[120px] h-[120px]"/>
         
           </div>
      </div>
    </div>
  );
}

export default LoginPage;
