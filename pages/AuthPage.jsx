import { FaGofore } from "react-icons/fa6";


function AuthPage() {
  return (
    <div className="flex justify-center h-screen overflow-hidden">
      <div
        className="
          w-[550px]
          h-full
          bg-[url('/images/athlete.png')]
          bg-cover
          bg-center
          relative
          border border-[#289DFC30]
          rounded-xl
          box-border
          flex flex-col justify-end items-center">
        <div className="absolute inset-0 bg-[#289DFC30]" />

        <div className="relative z-10 flex flex-col items-center gap-5  ">
          <button className="w-[303px] h-[47px] bg-[#289DFC] text-[#000000] border border-[#289DFC] rounded-xl ">
            ثبت نام
          </button>
          <button className="w-[303px] h-[47px] bg-[#289DFC] text-[#000000] border border-[#289DFC] rounded-xl">
            ورود
          </button>
         <button 
          className="
           w-[303px]
           h-[47px]
          bg-white
          text-black
          border border-white
          rounded-xl
          flex
          flex-row-reverse
          items-center
         justify-center
         gap-2">
  <FaGofore className="text-lg text-[#EA4335]" />
  ورود با اکانت گوگل
</button>


        </div>
      </div>
    </div>
  )
}

export default AuthPage
