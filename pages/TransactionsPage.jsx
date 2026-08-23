import { GoArrowUp } from "react-icons/go";
import { GoDownload } from "react-icons/go";
import { GoArrowDown } from "react-icons/go";

function TransactionsPage() {
  return (
    <div className="flex justify-center h-screen">
      <div  className="
          w-[600px]
          min-h-screen
          bg-white
          rounded-2xl
          flex
          flex-col
          items-center
          justify-center
          box-border
          px-6 sm:px-12
          pt-6">
            <div className="w-full h-[650px] bg-[#EFEFEF]  mb-50 rounded-3xl">
             <h1 className="text-[20px] mt-2 mr-5">امروز</h1>
             <div className="w-[480px] h-[575px] bg-[#FFFFFF]  mr-3  rounded-3xl ">

               <div className="flex mt-5 gap-5  ">
                <div className="w-[40px] h-[40px] bg-[#4ECD8A] rounded-3xl mr-3 mt-5">
                  <GoArrowUp className="text-[#FFFFFF]  w-[25px] h-[25px] mt-2 mr-2"/>
                </div>
                <div className="flex gap-25 mt-5" >
                  <div>
                  <h1 className="font-medium text-[#000000] text-lg"> 400,323ریال - افزایش موجودی</h1>
                  <p className="font-light text-sm text-[#848484]">کسر از موجودی بابت پرداخت شهریه</p>
               </div>
                <div>
                  <h2 className="text-[#4ECD8A]  text-base font-medium">موفق</h2>
                  <GoDownload className="mt-1 text-[#666666] w-[18px] h-[18px] mr-5" />
                </div>
                </div>

               </div>
                <div className="flex mt-5 gap-5  ">
                <div className="w-[40px] h-[40px] bg-[#FF5252] rounded-3xl mr-3 mt-5">
                  <GoArrowDown  className="text-[#FFFFFF]  w-[25px] h-[25px] mt-2 mr-2"/>
                </div>
                <div className="flex gap-25 mt-5" >
                  <div>
                  <h1 className="font-medium text-[#000000] text-lg">400,323ریال - کاهش موجودی</h1>
                  <p className="font-light text-sm text-[#848484]">کسر از موجودی بابت پرداخت شهریه</p>
               </div>
                <div>
                  <h2 className="text-[#FF5252]  text-base font-medium">ناموفق</h2>
                  <GoDownload className="mt-1 text-[#666666] w-[18px] h-[18px] mr-5" />
                </div>
                </div>
               </div>
             </div>
             <div>
              <button className="w-full h-[40px] bg-[#289DFC] mt-10 rounded-3xl text-[20px]">دکمه</button>
             </div>
            </div>
      </div>
    </div>
  )
}

export default TransactionsPage