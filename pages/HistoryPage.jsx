import { DiCodeigniter } from "react-icons/di";
import { GoReply } from "react-icons/go";

function HistoryPage() {
  return (
    <div  className="flex justify-center h-screen">
     <div  className="
          w-[600px]
          min-h-screen
          bg-white
          rounded-2xl
          items-center
          justify-center
          box-border
          px-6 sm:px-12
          pt-6">
                <div className="w-[470px] h-[150px] bg-[#EFEFEF] rounded-3xl mt-14 flex">
                 <div className="w-[80px] h-[80px] bg-[#F97316] rounded-3xl mt-9 mr-3 pt-5 pr-6">
                    <DiCodeigniter className="w-[28px] h-[28px] text-[#FFFFFF]" />
                </div>
                <div className="mr-10 ">
                     <h1 className="mt-6 font-extrabold text-xl text-[#111214]">باشگاه مهر ایران</h1>
                    <div className="flex gap-27 mt-2">
                         <p className="font-normal text-base text-[#676C75]">مبلغ پرداختی: ۱۲/۰۰۰/۰۰۰ تومان </p>
                    <GoReply className="w-[20px] h-[20px] text-[#676C75]" />
                    </div>
                    <div className="mt-3 text-[#676C75] text-[15px]">
                         <span>۱۴۰۴/۰۲/۰۲</span>
                    </div>
                </div>
                </div>


                <div className="w-[470px] h-[150px] bg-[#EFEFEF] rounded-3xl mt-10 flex">
                 <div className="w-[80px] h-[80px] bg-[#9333EA] rounded-3xl mt-9 mr-3 pt-5 pr-6">
                    <DiCodeigniter className="w-[28px] h-[28px] text-[#FFFFFF]" />
                </div>
                <div className="mr-10 ">
                     <h1 className="mt-6 font-extrabold text-xl text-[#111214]">باشگاه مهر ایران</h1>
                    <div className="flex gap-27 mt-2">
                         <p className="font-normal text-base text-[#676C75]">مبلغ پرداختی: ۱۲/۰۰۰/۰۰۰ تومان </p>
                    <GoReply className="w-[20px] h-[20px] text-[#676C75]" />
                    </div>
                    <div className="mt-3 text-[#676C75] text-[15px]">
                         <span>۱۴۰۴/۰۲/۰۲</span>
                    </div>
                </div>
                </div>

                <div className="w-[470px] h-[150px] bg-[#EFEFEF] rounded-3xl mt-10 flex">
                 <div className="w-[80px] h-[80px] bg-[#2563EB] rounded-3xl mt-9 mr-3 pt-5 pr-6">
                    <DiCodeigniter className="w-[28px] h-[28px] text-[#FFFFFF]" />
                </div>
                <div className="mr-10 ">
                     <h1 className="mt-6 font-extrabold text-xl text-[#111214]">باشگاه مهر ایران</h1>
                    <div className="flex gap-27 mt-2">
                         <p className="font-normal text-base text-[#676C75]">مبلغ پرداختی: ۱۲/۰۰۰/۰۰۰ تومان </p>
                    <GoReply className="w-[20px] h-[20px] text-[#676C75]" />
                    </div>
                    <div className="mt-3 text-[#676C75] text-[15px]">
                         <span>۱۴۰۴/۰۲/۰۲</span>
                    </div>
                </div>
                </div>

     </div>
    </div>
  )
}

export default HistoryPage