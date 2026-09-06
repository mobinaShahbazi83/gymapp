import { MdOutlinePhotoCamera } from "react-icons/md";
import { GoPencil } from "react-icons/go";
import { RiSearchLine } from "react-icons/ri";


function PerformancereportPage() {
    return (
        <div className="w-full min-h-screen">
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
            <h2 className="!font-bold text-lg flex justify-end m-5">:گزارش گیری درآمد</h2>
            <div className="flex flex-col justify-end ">
                <div className="flex justify-end mt-5 mx-auto gap-20 text-right">
                    <div className="w-[380px] h-[70px] bg-[#F5F6F8] rounded-4xl pt-2 pr-3">
                        <p className="!font-semibold text-sm  pb-2">:درآمدحاصل از کمیسیون‌ها</p>
                        <span className="text-base !font-normal text-[#1DB7C2]">130,000تومان</span>
                    </div>
                    <div className="w-[380px] h-[70px] bg-[#F5F6F8] rounded-4xl pt-2 pr-3">
                        <p className="!font-semibold text-sm  pb-2">:درآمدحاصل از تراکنش‌ها</p>
                        <span className="text-base !font-normal text-[#1DB7C2]">130,000تومان</span>
                    </div>

                    <div className="w-[380px] h-[70px] bg-[#F5F6F8] rounded-4xl pt-2 pr-3 ">
                        <p className="!font-semibold text-sm pb-2">:مجموع درآمد</p>
                        <span className="text-base !font-normal  text-[#1DB7C2]">430,000 تومان</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-end ">
                <div className="flex justify-end mt-5 mx-auto gap-20 text-right">
                    <div className="w-[380px] h-[70px] bg-[#F5F6F8] rounded-4xl pt-2 pr-3">
                        <p className="!font-semibold text-sm  pb-2">:تعداد تراکنش‌ها</p>
                        <span className="text-base !font-normal text-[#1DB7C2]"> 2300</span>
                    </div>
                    <div className="w-[380px] h-[70px] bg-[#F5F6F8] rounded-4xl pt-2 pr-3">
                        <p className="!font-semibold text-sm  pb-2">:مجموع تخفیفات</p>
                        <span className="text-base !font-normal text-[#1DB7C2]">130,000تومان</span>
                    </div>

                    <div className="w-[380px] h-[70px] bg-[#F5F6F8] rounded-4xl pt-2 pr-3 ">
                        <p className="!font-semibold text-sm pb-2">:درآمد حاصل از بسته‌ها و سرویس‌ها</p>
                        <span className="text-base !font-normal  text-[#1DB7C2]">130,000تومان</span>
                    </div>
                </div>
            </div>
            <div className="flex mt-4 justify-center items-center gap-2">
                <input
                    className="w-[926px] h-[54px] bg-[#F5F6F8] border border-[#F5F6F8] outline-none rounded-4xl !font-semibold text-lg text-right p-2"
                    placeholder=".جستجو کنید"
                />

                <div className="w-[57px] h-[54px] bg-[#F5F6F8] border border-[#F5F6F8] rounded-full p-4 flex items-center justify-center">
                    <RiSearchLine className="text-[#1DB7C2] w-[20px] h-[20px]" />
                </div>
            </div>
            <div className="flex justify-between items-center w-full px-15 mt-10">
                <div className="w-[200px] h-[54px] bg-[#F5F6F8] rounded-4xl !font-semibold text-lg pt-3 pl-6">
                    دریافت خروجی اکسل
                </div>
                <div className="flex justify-end gap-5">

                    <div className="w-[200px] h-[54px] bg-[#F5F6F8] rounded-4xl !font-semibold text-lg pt-3 pl-10">
                        از تاریخ: ۱۴۰۴/۰۲/۰۲
                    </div>

                    <div className="w-[200px] h-[54px] bg-[#F5F6F8] rounded-4xl !font-semibold text-lg pt-3 pl-10">
                        تا تاریخ: ۱۴۰۴/۰۲/۰۲
                    </div>
                    <div className="w-[200px] h-[54px] bg-[#F5F6F8] rounded-4xl !font-semibold text-lg pt-3 pl-10">
                        از تاریخ: ۱۴۰۴/۰۲/۰۲
                    </div>
                    <div className="w-[128px] h-[54px] bg-[#F5F6F8] rounded-4xl !font-semibold text-lg pt-3 pl-12">
                        فیلتر
                    </div>
                    <div className="w-[128px] h-[54px] bg-[#F5F6F8] rounded-4xl !font-semibold text-lg pt-3 pl-12">
                        همه
                    </div>
                </div>
            </div>
            <div className="w-[1550px] min-h-[480px] bg-[#F5F6F8] mx-auto mt-5 rounded-4xl flex flex-col">

                {/* عنوان جدول */}
                <div className="grid grid-cols-5 items-center pt-5 pb-3 border-b border-[#EFEFEF] text-center">

                    <p className="!font-semibold text-lg">وضعیت</p>
                    <p className="!font-semibold text-lg">تاریخ</p>
                    <p className="!font-semibold text-lg">مبلغ</p>
                    <p className="!font-semibold text-lg">موضوع</p>
                    <p className="!font-semibold text-lg">درآمدها</p>

                </div>
                <div className="grid grid-cols-5 items-center py-5 text-center">

                    <p className="!font-semibold text-sm text-[#148856]">
                        پرداخت موفق
                    </p>

                    <p className="!font-semibold text-sm">
                        1403/09/09
                    </p>

                    <p className="!font-semibold text-sm text-[#148856]">
                        100.000 تومان
                    </p>

                    <p className="!font-semibold text-sm">
                        پرداخت شهریه
                    </p>

                    <p className="!font-semibold text-sm">
                        تراکنش ورودی
                    </p>

                </div>
                <div className="grid grid-cols-5 items-center py-5 text-center">

                    <p className="!font-semibold text-sm text-[#148856]">
                        پرداخت موفق
                    </p>

                    <p className="!font-semibold text-sm">
                        1403/09/09
                    </p>

                    <p className="!font-semibold text-sm text-[#148856]">
                        100.000 تومان
                    </p>

                    <p className="!font-semibold text-sm">
                        پرداخت شهریه
                    </p>

                    <p className="!font-semibold text-sm">
                        تراکنش ورودی
                    </p>

                </div>
                <div className="grid grid-cols-5 items-center py-5 text-center">

                    <p className="!font-semibold text-sm text-[#FF4346]">
                        تخفیف اعمال شد
                    </p>

                    <p className="!font-semibold text-sm">
                        1403/09/09
                    </p>

                    <p className="!font-semibold text-sm text-[#FF4346]">
                        130.000 تومان
                    </p>

                    <p className="!font-semibold text-sm">
                        تخفیف مناسبتی
                    </p>

                    <p className="!font-semibold text-sm">
                        تخفیف
                    </p>

                </div>
                <div className="grid grid-cols-5 items-center py-5 text-center">

                    <p className="!font-semibold text-sm text-[#148856]">
                        پرداخت موفق
                    </p>

                    <p className="!font-semibold text-sm">
                        1403/09/09
                    </p>

                    <p className="!font-semibold text-sm text-[#148856]">
                        100.000 تومان
                    </p>

                    <p className="!font-semibold text-sm">
                        پرداخت شهریه
                    </p>

                    <p className="!font-semibold text-sm">
                        تراکنش ورودی
                    </p>

                </div>
                <div className="grid grid-cols-5 items-center py-5 text-center">

                    <p className="!font-semibold text-sm text-[#148856]">
                        پرداخت موفق
                    </p>

                    <p className="!font-semibold text-sm">
                        1403/09/09
                    </p>

                    <p className="!font-semibold text-sm text-[#148856]">
                        100.000 تومان
                    </p>

                    <p className="!font-semibold text-sm">
                        پرداخت شهریه
                    </p>

                    <p className="!font-semibold text-sm">
                        تراکنش ورودی
                    </p>

                </div>
               <div className="grid grid-cols-5 items-center py-5 text-center">

                    <p className="!font-semibold text-sm text-[#148856]">
                        پرداخت موفق
                    </p>

                    <p className="!font-semibold text-sm">
                        1403/09/09
                    </p>

                    <p className="!font-semibold text-sm text-[#148856]">
                        100.000 تومان
                    </p>

                    <p className="!font-semibold text-sm">
                        پرداخت شهریه
                    </p>

                    <p className="!font-semibold text-sm">
                        تراکنش ورودی
                    </p>

                </div>
                <div className="grid grid-cols-5 items-center py-5 text-center">

                    <p className="!font-semibold text-sm text-[#148856]">
                        پرداخت موفق
                    </p>

                    <p className="!font-semibold text-sm">
                        1403/09/09
                    </p>

                    <p className="!font-semibold text-sm text-[#148856]">
                        100.000 تومان
                    </p>

                    <p className="!font-semibold text-sm">
                        پرداخت شهریه
                    </p>

                    <p className="!font-semibold text-sm">
                        تراکنش ورودی
                    </p>

                </div>
            </div>
        </div>
    )
}

export default PerformancereportPage