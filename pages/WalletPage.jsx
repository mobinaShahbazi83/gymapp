import { GoArrowUpRight } from "react-icons/go";
import { GoArrowDownLeft } from "react-icons/go";
import { GoCreditCard } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";

function WalletPage() {
    return (
        <div className="flex justify-center h-screen">
            <div className=" w-[600px]
          min-h-screen
          bg-white
          rounded-2xl
          flex
          flex-col
          items-center
          box-border">
                <h1 className="!font-normal text-2xl mt-8 flex justify-center">کیف پول</h1>
                <div className="w-[400px] h-[193px] bg-[#0063FF]  rounded-4xl mt-5 ">
                    <div className="flex justify-between">
                        <p className="text-lg !font-semibold w-[78px] h-[49px] p-3 ">موجودی 0 ریال</p>
                        <div className="w-[130px] h-[40px] bg-[#49B1FF] rounded-4xl m-5 text-[#000000] !font-normal pt-2 pr-4 text-1xl">افزایش موجودی</div>
                    </div>
                    <span className="flex justify-end ml-5 !font-normal text-2xl text-[#FFFFFF] mt-3">8,453.00 تومان</span>
                    <span className="!font-normal text-[#FFFFFF] text-1xl mr-5">افزایش</span>
                </div>
                <div className="flex gap-8 mt-5 justify-center">
                    <div className="w-[60px] h-[60px] border border-[#9C9C9C] rounded-4xl p-2"><GoArrowUpRight className="w-[40px] h-[40px] text-[#289DFC]" /></div>
                    <div className="w-[60px] h-[60px] border border-[#9C9C9C] rounded-4xl p-2"><GoArrowDownLeft className="w-[40px] h-[40px] text-[#289DFC]" /></div>
                    <div className="w-[60px] h-[60px] border border-[#9C9C9C] rounded-4xl p-2"><GoCreditCard className="w-[38px] h-[38px] text-[#289DFC]" /></div>
                </div>
                <h2 className="!font-normal text-1xl p-5 flex justify-end">فهرست تراکنش‌ها</h2>
                <div className="w-[400px] h-[110px]  ">
                    <div className="flex">
                        <div className="w-[80px] h-[40px] bg-[#49B1FF] rounded-4xl mt-2 mr-3 pt-2 pr-5 ">افزایش</div>
                        <span className="mt-4 mr-2"> 400,323ریال </span>
                        <p className="text-[#49B1FF] mt-4 mr-45  ">موفق</p>
                    </div>
                    <div className="flex mr-23 justify-between">
                        <p className="text-[#848484] text-1xs">کسر از موجودی بابت پرداخت شهریه</p>
                        <GoChevronLeft className="w-[30px] h-[30px] text-[#49B1FF] ml-2" />
                    </div>
                    <div className="flex justify-center gap-10">
                        <p >تسویه روزانه</p>
                        <span>۱۴۰۳/۰۲/۰۲  | ۱۹:۲۰</span>
                    </div>
                </div>
                 <div className="w-[400px] h-[110px]  ">
                    <div className="flex">
                        <div className="w-[80px] h-[40px] bg-[#66666699] rounded-4xl mt-2 mr-3 pt-2 pr-5 ">کاهش</div>
                        <span className="mt-4 mr-2"> 400,323ریال </span>
                        <p className="text-[#49B1FF] mt-4 mr-45  ">موفق</p>
                    </div>
                    <div className="flex mr-23 justify-between">
                        <p className="text-[#848484] text-1xs">کسر از موجودی بابت پرداخت شهریه</p>
                        <GoChevronLeft className="w-[30px] h-[30px] text-[#49B1FF] ml-2" />
                    </div>
                    <div className="flex justify-center gap-10">
                        <p >تسویه روزانه</p>
                        <span>۱۴۰۳/۰۲/۰۲  | ۱۹:۲۰</span>
                    </div>
                </div>
                 <div className="w-[400px] h-[110px]  ">
                    <div className="flex">
                        <div className="w-[80px] h-[40px] bg-[#49B1FF] rounded-4xl mt-2 mr-3 pt-2 pr-5 ">افزایش</div>
                        <span className="mt-4 mr-2"> 400,323ریال </span>
                        <p className="text-[#49B1FF] mt-4 mr-45  ">موفق</p>
                    </div>
                    <div className="flex mr-23 justify-between">
                        <p className="text-[#848484] text-1xs">کسر از موجودی بابت پرداخت شهریه</p>
                        <GoChevronLeft className="w-[30px] h-[30px] text-[#49B1FF] ml-2" />
                    </div>
                    <div className="flex justify-center gap-10">
                        <p >تسویه روزانه</p>
                        <span>۱۴۰۳/۰۲/۰۲  | ۱۹:۲۰</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WalletPage