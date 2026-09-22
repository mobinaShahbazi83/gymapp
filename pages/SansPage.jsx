"use client";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { GoPencil } from "react-icons/go";
import { IoPersonAddOutline } from "react-icons/io5";
import { DiCodeigniter } from "react-icons/di";
import { PiSealDuotone } from "react-icons/pi";
import { useState } from "react";

function SansPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
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
            <div className="flex flex-row-reverse justify-between items-center w-full px-15 mt-10">
                <p className="!font-semibold text-lg">
                    :لیست سانس‌های باشگاه ایران مهر
                </p>
                <div className="flex flex-row-reverse justify-between items-center w-full px-15 mt-10 ">
                    <p className="!font-semibold text-lg">
                        :لیست پیام‌ها
                    </p>
                    <div className="flex items-center gap-2">

                        {/* سانس جدید */}
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="w-[181px] h-[40px] bg-[#0088FF] rounded-4xl flex items-center justify-center gap-4 cursor-pointer"
                        >
                            <IoPersonAddOutline className="w-[22px] h-[22px] text-white" />

                            <p className="!font-semibold text-lg text-white">
                                سانس جدید
                            </p>
                        </button>

                        {/* جستجو */}
                        <input
                            placeholder="جستجو"
                            className="text-lg text-right pb-2 pr-3 w-[510px] h-[40px] bg-[#F4F4F4D9] rounded-4xl border border-[#289DFC] outline-none"
                        />
                    </div>

                    {/* Modal */}
                    {isModalOpen && (
                        <div
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
                            onClick={() => setIsModalOpen(false)}
                        >
                            <div
                                dir="rtl"
                                className="relative w-[450px] min-h-[300px] bg-[#DFDFDF] rounded-3xl shadow-xl"
                                onClick={(e) => e.stopPropagation()}
                            >

                                {/* دکمه خروج */}
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="absolute top-4 left-4 text-3xl text-[#FF0000BD] hover:text-black cursor-pointer"
                                >
                                    ×
                                </button>

                                <h1 className="text-xl !font-bold text-right p-5">سانس دو ماهه</h1>
                                <div className="flex ">
                                    <div className="w-[80px] h-[80px] bg-[#F97316] rounded-3xl mr-10 mt-5 shrink-0 flex items-center justify-center">
                                        <DiCodeigniter className="w-[28px] h-[28px] text-white" />
                                    </div>
                                    <div className="mt-7 w-[260px] mr-3">
                                        <div className="flex items-center">
                                            <PiSealDuotone className="w-[30px] h-[30px] text-[#F97316] shrink-0 mr-2" />
                                            <p className="flex-1 text-right truncate !font-normal text-lg">
                                                تعداد جلسات سانس:
                                                <span className="!font-normal flex-1 text-right">۱۲ جلسه</span>
                                            </p>

                                        </div>

                                        <div className="flex items-center mt-2">
                                            <PiSealDuotone className="w-[30px] h-[30px] text-[#F97316] shrink-0 mr-2" />
                                            <p className="flex-1 text-right truncate !font-normal text-lg">
                                                شهریه:
                                                <span className="!font-normal"> ۱۲/۰۰۰/۰۰۰ تومان</span>
                                            </p>

                                        </div>
                                        <div className="flex items-center mt-2">
                                            <PiSealDuotone className="w-[30px] h-[30px] text-[#F97316] shrink-0 mr-2" />
                                            <p className="flex-1 text-right truncate !font-normal text-lg">
                                                تعداد ماه:
                                                <span className="!font-normal  text-right">۱۲ جلسه</span>
                                            </p>

                                        </div>
                                    </div>

                                </div>
                                <div className="flex justify-end ml-5 mt-10">
                                    <button className="w-[120px] h-[40px] bg-[#F94B16] text-[#FFFFFF] !font-normal text-lx rounded-4xl ">افزودن</button>
                                </div>

                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="flex gap-10 justify-center mt-6">
                <div className="w-[400px] h-[180px] bg-[#F3F3F4] rounded-4xl mt-4 mr-15 border border-[#F97316]">
                    <h1 className="!font-semibold text-1xl pt-2 pr-4 text-right">
                        سانس دو ماهه
                    </h1>
                    <div className="relative w-full">

                        <div className="flex justify-end items-start">

                            <div className="mt-7 w-[260px]">
                                <div className="flex items-center">
                                    <p className="flex-1 text-right truncate !font-normal">
                                        تعداد جلسات سانس: ۱۲ جلسه
                                    </p>
                                    <PiSealDuotone className="w-[30px] h-[30px] text-[#F97316] shrink-0 mr-2" />
                                </div>

                                <div className="flex items-center mt-2">
                                    <p className="flex-1 text-right truncate !font-normal">
                                        شهریه: ۱۲/۰۰۰/۰۰۰ تومان
                                    </p>
                                    <PiSealDuotone className="w-[30px] h-[30px] text-[#F97316] shrink-0 mr-2" />
                                </div>
                            </div>
                            <div className="w-[80px] h-[80px] bg-[#F97316] rounded-3xl mr-3 mt-5 shrink-0 flex items-center justify-center">
                                <DiCodeigniter className="w-[28px] h-[28px] text-white" />
                            </div>
                        </div>

                        <div className="absolute left-6 mt-1 text-sm !font-base  w-[130px] h-[28px] bg-[#F3F3F4] border border-[#F97316] rounded-4xl pl-5">
                            تعداد ماه: ۲ ماه
                        </div>

                    </div>

                </div>
                <div className="w-[400px] h-[180px] bg-[#F3F3F4] rounded-4xl mt-4 mr-15 border border-[#F97316]">
                    <h1 className="!font-semibold text-1xl pt-2 pr-4 text-right">
                        سانس دو ماهه
                    </h1>
                    <div className="relative w-full">

                        <div className="flex justify-end items-start">

                            <div className="mt-7 w-[260px]">
                                <div className="flex items-center">
                                    <p className="flex-1 text-right truncate !font-normal">
                                        تعداد جلسات سانس: ۱۲ جلسه
                                    </p>
                                    <PiSealDuotone className="w-[30px] h-[30px] text-[#F97316] shrink-0 mr-2" />
                                </div>

                                <div className="flex items-center mt-2">
                                    <p className="flex-1 text-right truncate !font-normal">
                                        شهریه: ۱۲/۰۰۰/۰۰۰ تومان
                                    </p>
                                    <PiSealDuotone className="w-[30px] h-[30px] text-[#F97316] shrink-0 mr-2" />
                                </div>
                            </div>
                            <div className="w-[80px] h-[80px] bg-[#F97316] rounded-3xl mr-3 mt-5 shrink-0 flex items-center justify-center">
                                <DiCodeigniter className="w-[28px] h-[28px] text-white" />
                            </div>
                        </div>

                        <div className="absolute left-6 mt-1 text-sm !font-base  w-[130px] h-[28px] bg-[#F3F3F4] border border-[#F97316] rounded-4xl pl-5">
                            تعداد ماه: ۲ ماه
                        </div>

                    </div>

                </div>
                <div className="w-[400px] h-[180px] bg-[#F3F3F4] rounded-4xl mt-4 mr-15 border border-[#F97316]">
                    <h1 className="!font-semibold text-1xl pt-2 pr-4 text-right">
                        سانس دو ماهه
                    </h1>
                    <div className="relative w-full">

                        <div className="flex justify-end items-start">

                            <div className="mt-7 w-[260px]">
                                <div className="flex items-center">
                                    <p className="flex-1 text-right truncate !font-normal">
                                        تعداد جلسات سانس: ۱۲ جلسه
                                    </p>
                                    <PiSealDuotone className="w-[30px] h-[30px] text-[#F97316] shrink-0 mr-2" />
                                </div>

                                <div className="flex items-center mt-2">
                                    <p className="flex-1 text-right truncate !font-normal">
                                        شهریه: ۱۲/۰۰۰/۰۰۰ تومان
                                    </p>
                                    <PiSealDuotone className="w-[30px] h-[30px] text-[#F97316] shrink-0 mr-2" />
                                </div>
                            </div>
                            <div className="w-[80px] h-[80px] bg-[#F97316] rounded-3xl mr-3 mt-5 shrink-0 flex items-center justify-center">
                                <DiCodeigniter className="w-[28px] h-[28px] text-white" />
                            </div>
                        </div>

                        <div className="absolute left-6 mt-1 text-sm !font-base  w-[130px] h-[28px] bg-[#F3F3F4] border border-[#F97316] rounded-4xl pl-5">
                            تعداد ماه: ۲ ماه
                        </div>

                    </div>

                </div>
            </div>
            <div className="flex gap-10 justify-center mt-6">
                <div className="w-[400px] h-[180px] bg-[#F3F3F4] rounded-4xl mt-4 mr-15 border border-[#F97316]">
                    <h1 className="!font-semibold text-1xl pt-2 pr-4 text-right">
                        سانس دو ماهه
                    </h1>
                    <div className="relative w-full">

                        <div className="flex justify-end items-start">

                            <div className="mt-7 w-[260px]">
                                <div className="flex items-center">
                                    <p className="flex-1 text-right truncate !font-normal">
                                        تعداد جلسات سانس: ۱۲ جلسه
                                    </p>
                                    <PiSealDuotone className="w-[30px] h-[30px] text-[#F97316] shrink-0 mr-2" />
                                </div>

                                <div className="flex items-center mt-2">
                                    <p className="flex-1 text-right truncate !font-normal">
                                        شهریه: ۱۲/۰۰۰/۰۰۰ تومان
                                    </p>
                                    <PiSealDuotone className="w-[30px] h-[30px] text-[#F97316] shrink-0 mr-2" />
                                </div>
                            </div>
                            <div className="w-[80px] h-[80px] bg-[#F97316] rounded-3xl mr-3 mt-5 shrink-0 flex items-center justify-center">
                                <DiCodeigniter className="w-[28px] h-[28px] text-white" />
                            </div>
                        </div>

                        <div className="absolute left-6 mt-1 text-sm !font-base  w-[130px] h-[28px] bg-[#F3F3F4] border border-[#F97316] rounded-4xl pl-5">
                            تعداد ماه: ۲ ماه
                        </div>

                    </div>

                </div>
                <div className="w-[400px] h-[180px] bg-[#F3F3F4] rounded-4xl mt-4 mr-15 border border-[#F97316]">
                    <h1 className="!font-semibold text-1xl pt-2 pr-4 text-right">
                        سانس دو ماهه
                    </h1>
                    <div className="relative w-full">

                        <div className="flex justify-end items-start">

                            <div className="mt-7 w-[260px]">
                                <div className="flex items-center">
                                    <p className="flex-1 text-right truncate !font-normal">
                                        تعداد جلسات سانس: ۱۲ جلسه
                                    </p>
                                    <PiSealDuotone className="w-[30px] h-[30px] text-[#F97316] shrink-0 mr-2" />
                                </div>

                                <div className="flex items-center mt-2">
                                    <p className="flex-1 text-right truncate !font-normal">
                                        شهریه: ۱۲/۰۰۰/۰۰۰ تومان
                                    </p>
                                    <PiSealDuotone className="w-[30px] h-[30px] text-[#F97316] shrink-0 mr-2" />
                                </div>
                            </div>
                            <div className="w-[80px] h-[80px] bg-[#F97316] rounded-3xl mr-3 mt-5 shrink-0 flex items-center justify-center">
                                <DiCodeigniter className="w-[28px] h-[28px] text-white" />
                            </div>
                        </div>

                        <div className="absolute left-6 mt-1 text-sm !font-base  w-[130px] h-[28px] bg-[#F3F3F4] border border-[#F97316] rounded-4xl pl-5">
                            تعداد ماه: ۲ ماه
                        </div>

                    </div>

                </div>
                <div className="w-[400px] h-[180px] bg-[#F3F3F4] rounded-4xl mt-4 mr-15 border border-[#F97316]">
                    <h1 className="!font-semibold text-1xl pt-2 pr-4 text-right">
                        سانس دو ماهه
                    </h1>
                    <div className="relative w-full">

                        <div className="flex justify-end items-start">

                            <div className="mt-7 w-[260px]">
                                <div className="flex items-center">
                                    <p className="flex-1 text-right truncate !font-normal">
                                        تعداد جلسات سانس: ۱۲ جلسه
                                    </p>
                                    <PiSealDuotone className="w-[30px] h-[30px] text-[#F97316] shrink-0 mr-2" />
                                </div>

                                <div className="flex items-center mt-2">
                                    <p className="flex-1 text-right truncate !font-normal">
                                        شهریه: ۱۲/۰۰۰/۰۰۰ تومان
                                    </p>
                                    <PiSealDuotone className="w-[30px] h-[30px] text-[#F97316] shrink-0 mr-2" />
                                </div>
                            </div>
                            <div className="w-[80px] h-[80px] bg-[#F97316] rounded-3xl mr-3 mt-5 shrink-0 flex items-center justify-center">
                                <DiCodeigniter className="w-[28px] h-[28px] text-white" />
                            </div>
                        </div>

                        <div className="absolute left-6 mt-1 text-sm !font-base  w-[130px] h-[28px] bg-[#F3F3F4] border border-[#F97316] rounded-4xl pl-5">
                            تعداد ماه: ۲ ماه
                        </div>

                    </div>

                </div>
            </div>
            <div className="flex gap-10 justify-center mt-6">
                <div className="w-[400px] h-[180px] bg-[#F3F3F4] rounded-4xl mt-4 mr-15 border border-[#F97316]">
                    <h1 className="!font-semibold text-1xl pt-2 pr-4 text-right">
                        سانس دو ماهه
                    </h1>
                    <div className="relative w-full">

                        <div className="flex justify-end items-start">

                            <div className="mt-7 w-[260px]">
                                <div className="flex items-center">
                                    <p className="flex-1 text-right truncate !font-normal">
                                        تعداد جلسات سانس: ۱۲ جلسه
                                    </p>
                                    <PiSealDuotone className="w-[30px] h-[30px] text-[#F97316] shrink-0 mr-2" />
                                </div>

                                <div className="flex items-center mt-2">
                                    <p className="flex-1 text-right truncate !font-normal">
                                        شهریه: ۱۲/۰۰۰/۰۰۰ تومان
                                    </p>
                                    <PiSealDuotone className="w-[30px] h-[30px] text-[#F97316] shrink-0 mr-2" />
                                </div>
                            </div>
                            <div className="w-[80px] h-[80px] bg-[#F97316] rounded-3xl mr-3 mt-5 shrink-0 flex items-center justify-center">
                                <DiCodeigniter className="w-[28px] h-[28px] text-white" />
                            </div>
                        </div>

                        <div className="absolute left-6 mt-1 text-sm !font-base  w-[130px] h-[28px] bg-[#F3F3F4] border border-[#F97316] rounded-4xl pl-5">
                            تعداد ماه: ۲ ماه
                        </div>

                    </div>

                </div>
                <div className="w-[400px] h-[180px] bg-[#F3F3F4] rounded-4xl mt-4 mr-15 border border-[#F97316]">
                    <h1 className="!font-semibold text-1xl pt-2 pr-4 text-right">
                        سانس دو ماهه
                    </h1>
                    <div className="relative w-full">

                        <div className="flex justify-end items-start">

                            <div className="mt-7 w-[260px]">
                                <div className="flex items-center">
                                    <p className="flex-1 text-right truncate !font-normal">
                                        تعداد جلسات سانس: ۱۲ جلسه
                                    </p>
                                    <PiSealDuotone className="w-[30px] h-[30px] text-[#F97316] shrink-0 mr-2" />
                                </div>

                                <div className="flex items-center mt-2">
                                    <p className="flex-1 text-right truncate !font-normal">
                                        شهریه: ۱۲/۰۰۰/۰۰۰ تومان
                                    </p>
                                    <PiSealDuotone className="w-[30px] h-[30px] text-[#F97316] shrink-0 mr-2" />
                                </div>
                            </div>
                            <div className="w-[80px] h-[80px] bg-[#F97316] rounded-3xl mr-3 mt-5 shrink-0 flex items-center justify-center">
                                <DiCodeigniter className="w-[28px] h-[28px] text-white" />
                            </div>
                        </div>

                        <div className="absolute left-6 mt-1 text-sm !font-base  w-[130px] h-[28px] bg-[#F3F3F4] border border-[#F97316] rounded-4xl pl-5">
                            تعداد ماه: ۲ ماه
                        </div>

                    </div>

                </div>
                <div className="w-[400px] h-[180px] bg-[#F3F3F4] rounded-4xl mt-4 mr-15 border border-[#F97316]">
                    <h1 className="!font-semibold text-1xl pt-2 pr-4 text-right">
                        سانس دو ماهه
                    </h1>
                    <div className="relative w-full">

                        <div className="flex justify-end items-start">

                            <div className="mt-7 w-[260px]">
                                <div className="flex items-center">
                                    <p className="flex-1 text-right truncate !font-normal">
                                        تعداد جلسات سانس: ۱۲ جلسه
                                    </p>
                                    <PiSealDuotone className="w-[30px] h-[30px] text-[#F97316] shrink-0 mr-2" />
                                </div>

                                <div className="flex items-center mt-2">
                                    <p className="flex-1 text-right truncate !font-normal">
                                        شهریه: ۱۲/۰۰۰/۰۰۰ تومان
                                    </p>
                                    <PiSealDuotone className="w-[30px] h-[30px] text-[#F97316] shrink-0 mr-2" />
                                </div>
                            </div>
                            <div className="w-[80px] h-[80px] bg-[#F97316] rounded-3xl mr-3 mt-5 shrink-0 flex items-center justify-center">
                                <DiCodeigniter className="w-[28px] h-[28px] text-white" />
                            </div>
                        </div>

                        <div className="absolute left-6 mt-1 text-sm !font-base  w-[130px] h-[28px] bg-[#F3F3F4] border border-[#F97316] rounded-4xl pl-5">
                            تعداد ماه: ۲ ماه
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default SansPage