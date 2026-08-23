import { IoChevronDownSharp } from "react-icons/io5";
import { IoCheckmarkSharp } from "react-icons/io5";

function RegistergymPage() {
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
        <h1 className="!font-normal text-2xl mt-8 flex ">ثبت‌نام در باشگاه</h1>
        <div className="flex mt-20 w-[342px] h-[87px] bg-[#F3F3F4] rounded-2xl p-2 gap-5">
          <p className="!font-normal text-base  w-[85px] h-[36px]">طرح اشتراک باشگاه ایران‌مهر:</p>
          <div className="w-[87px] h-[64px] bg-[#2563EB] rounded-2xl pt-4 pr-6 mt-1">
            <p className="text-[#FFFFFF] text-base">ماهانه</p>
          </div>
          <div className="w-[87px] h-[64px] bg-[#9C9C9C] rounded-2xl pt-4 pr-6 mt-1">
            <p className="text-[#FFFFFF] text-base">۶ ماهه</p>
          </div>
        </div>
        <div className="mt-5">
          <IoChevronDownSharp className="w-[35px] h-[35px] text-[#2563EB]" />
        </div>
        <div className="w-[222px] h-[62px] bg-[#F3F3F4] rounded-4xl pt-5 pr-8">
          <p className="!font-normal text-base">تعداد جلسات: ۱۲ جلسه</p>
        </div>
        <div className="flex gap-5 mt-5">
          <div className="w-[155px] h-[60px] bg-[#F3F3F4] rounded-2xl pt-1 pr-10">
            <p className="w-[85px] h-[36px] !font-normal text-base">تاریخ شروع: ۱۴۰۴/۰۲/۰۲</p>
          </div>
          <div className="w-[155px] h-[60px] bg-[#F3F3F4] rounded-2xl pt-1 pr-10">
            <p className="w-[85px] h-[36px] !font-normal text-base">تاریخ شروع: ۱۴۰۴/۰۲/۰۲</p>
          </div>
        </div>
        <div className="w-[333px] h-[62px] bg-[#F3F3F4] rounded-4xl mt-5 pt-2 pr-27">
          <p className="w-[163px] h-[36px] !font-normal text-base">قیمت 12 جلسه: 12.000.000 تومان</p>
        </div>
        <div className="mt-8">
          <h2 className="!font-normal text-base">کد تخفیف دارید؟</h2>
          <p className="!font-normal text-sm">کد تخفیف خود را وارد کنید تا روی شهریه باشگاه اعمال کنیم.</p>
        </div>
        <div className="flex gap-5 mt-5">
          <div className="w-[155px] h-[60px] bg-[#2563EBE8] rounded-2xl pt-4 pr-10">
            <p className="w-[85px] h-[36px] !font-normal text-base text-[#FFFFFF]">کد تخفیف:</p>
          </div>
          <div className="w-[155px] h-[60px] bg-[#F3F3F4] rounded-2xl pt-1 pr-6 flex">
            <p className="w-[85px] h-[36px] !font-normal  !font-normal text-lg pt-3">98KDN</p>
            <IoCheckmarkSharp className="w-[40px] h-[40px] text-[#2563EB] pt-3  " />
          </div>
        </div>
        <div className="w-[347px] h-[60px] bg-[#289DFC] mt-5 rounded-4xl">
          <p className="text-[#000000] !font-normal text-xl flex justify-center mt-3">پرداخت</p>
        </div>
      </div>
    </div>
  )
}

export default RegistergymPage