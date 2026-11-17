"use client"
import { MdOutlinePhotoCamera } from "react-icons/md";
import { GoPencil } from "react-icons/go";
import { FaHandHoldingMedical } from "react-icons/fa";
import { FaHandHoldingUsd } from "react-icons/fa";
import { FaHandHoldingWater } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import {
    IoCardOutline,
    IoCheckmarkCircle,
    IoCheckmarkCircleOutline
} from "react-icons/io5";
import { useState } from "react";

function TransactionadPage() {
    const [selectedTransactions, setSelectedTransactions] = useState([true, false]);

    const toggleTransaction = (index) => {
        setSelectedTransactions((prev) =>
            prev.map((item, i) => (i === index ? !item : item))
        );
    };
    return (
        <div className="w-full min-h-[1110px]">


            <div className="flex justify-end items-center gap-8 mt-5 mr-10">
                <div className="flex items-center gap-2">
                    <h1 className="!font-bold text-2xl">فیتنو</h1>
                    <GoPencil className="w-[30px] h-[30px]" />
                </div>

                <div className="flex items-center justify-center w-[120px] h-[120px] bg-[#EDF6FE] rounded-full">
                    <MdOutlinePhotoCamera className="w-[40px] h-[40px] text-[#668CAE]" />
                </div>
            </div>


            <div className="flex justify-end mr-10 mt-5">
                <h1 className="!font-semibold text-lg">لیست تراکنش‌ها:</h1>
            </div>


            <div className="flex justify-center gap-20 mt-10 flex-wrap">

                <div className="w-[255px] h-[120px] bg-[#56C1FF] border border-[#56C1FF] rounded-4xl">
                    <div className="flex mt-7 gap-3">
                        <h2 className="!font-semibold text-lg ml-5">تراکنش‌های خروجی</h2>
                        <div className="w-[50px] h-[50px] bg-[#EDF6FE] rounded-full">
                            <FaHandHoldingWater className="w-[25px] h-[25px] m-3 text-[#FFBB38]" />
                        </div>
                    </div>
                    <span className="text-[#0832DE] ml-5">430,000 تومان</span>
                </div>

                <div className="w-[255px] h-[120px] bg-[#56C1FF] border border-[#56C1FF] rounded-4xl">
                    <div className="flex mt-7 gap-3">
                        <h2 className="!font-semibold text-lg ml-5">تراکنش‌های ورودی</h2>
                        <div className="w-[50px] h-[50px] bg-[#EDF6FE] rounded-full">
                            <FaHandHoldingUsd className="w-[25px] h-[25px] m-3 text-[#396AFF]" />
                        </div>
                    </div>
                    <span className="text-[#0832DE] ml-5">430,000 تومان</span>
                </div>

                <div className="w-[255px] h-[120px] bg-[#56C1FF] border border-[#56C1FF] rounded-4xl">
                    <div className="flex mt-7 gap-3">
                        <h2 className="!font-semibold text-lg ml-5">مجموع تراکنش ها</h2>
                        <div className="w-[50px] h-[50px] bg-[#EDF6FE] rounded-full">
                            <FaHandHoldingMedical className="w-[25px] h-[25px] m-3 text-[#16DBCC]" />
                        </div>
                    </div>
                    <span className="text-[#0832DE] ml-5">430,000 تومان</span>
                </div>

            </div>


            <div className="flex justify-center mt-8 px-4">
                <div className="relative w-[1068px] max-w-full">
                    <IoSearchOutline className="absolute right-4 top-1/2 -translate-y-1/2 text-[#0832DE] text-2xl" />

                    <input
                        placeholder="جستجو"
                        className="w-full h-[54px] bg-[#F4F4F4D9] border border-[#F4F4F4D9] rounded-4xl pr-12 pl-4 !font-semibold text-lg text-right"
                    />
                </div>
            </div>


            <div className="flex justify-end mt-8 gap-5 mr-10 flex-wrap">
                <button className="w-[124px] h-[41px] border border-[#0832DE] outline-none rounded-4xl !font-semibold">
                    کد ملی
                </button>

                <button className="w-[100px] h-[41px] border border-[#0832DE] outline-none rounded-4xl !font-semibold">
                    نام باشگاه
                </button>

                <button className="w-[137px] h-[41px] border border-[#0832DE] outline-none rounded-4xl !font-semibold">
                    تراکنش‌های خروجی
                </button>

                <button className="w-[137px] h-[41px] border border-[#0832DE] outline-none rounded-4xl !font-semibold">
                    تراکنش‌های ورودی
                </button>

                <button className="w-[113px] h-[41px] border border-[#0832DE] outline-none rounded-4xl !font-semibold">
                    مریم فتحی
                </button>

                <button className="w-[100px] h-[41px] border border-[#0832DE] outline-none rounded-4xl !font-semibold">
                    فیلتر
                </button>
            </div>


            <div className="flex justify-end mt-8 gap-5 mr-10">

                <div className="flex gap-2">
                    <p className="!font-semibold text-lg text-[#718EBF]">سالانه</p>
                    <div className="w-[20px] h-[20px] bg-[#000000] border border-[#000000] rounded-full mt-2"></div>
                </div>

                <div className="flex gap-2">
                    <p className="!font-semibold text-lg text-[#718EBF]">ماهانه</p>
                    <div className="w-[20px] h-[20px] bg-[#4C78FF] border border-[#4C78FF] rounded-full mt-2"></div>
                </div>

                <div className="flex gap-2">
                    <p className="!font-semibold text-lg text-[#718EBF]">روزانه</p>
                    <div className="w-[20px] h-[20px] bg-[#FF82AC] border border-[#FF82AC] rounded-full mt-2"></div>
                </div>

            </div>

            <div className="flex justify-center mt-8 px-4">

                <div
                    className="w-[1000px] max-w-full border border-[#D9D9D9] rounded-2xl overflow-hidden"
                    dir="rtl"
                >
                    <div className="flex items-center gap-3 px-5 py-4 border-b border-[#D9D9D9]">
                        <IoCardOutline className="w-[30px] h-[30px]" />
                        <h2 className="!font-semibold text-lg">جزئیات تراکنش</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[700px] text-center text-sm">

                            <thead>
                                <tr>
                                    <th className="py-3 px-3 !font-semibold text-lg">وضعیت</th>
                                    <th className="py-3 px-3 !font-semibold text-lg">تاریخ</th>
                                    <th className="py-3 px-3 !font-semibold text-lg">مبلغ</th>
                                    <th className="py-3 px-3 !font-semibold text-lg">کد تراکنش</th>
                                    <th className="py-3 px-3 !font-semibold text-lg">موضوع</th>
                                    <th className="py-3 px-3 !font-semibold text-lg">تاریخ</th>
                                </tr>
                            </thead>

                            <tbody>
                                {[0, 1].map((index) => (
                                    <tr
                                        key={index}
                                        className="border-b last:border-b-0 border-[#D9D9D9]"
                                    >

                                        <td className="py-3 px-3">
                                            <div className="flex flex-col items-center gap-2">

                                                <button
                                                    type="button"
                                                    onClick={() => toggleTransaction(index)}
                                                    className="cursor-pointer"
                                                >
                                                    {selectedTransactions[index] ? (
                                                        <IoCheckmarkCircle className="text-[#16B978] text-xl" />
                                                    ) : (
                                                        <IoCheckmarkCircleOutline className="text-[#D9D9D9] text-xl" />
                                                    )}
                                                </button>

                                                <IoCardOutline className="text-base" />

                                            </div>
                                        </td>

                                        <td className="py-3 px-3 !font-semibold text-sm">۱۴۰۴/۰۵/۰۴/۰۳</td>
                                        <td className="py-3 px-3 !font-semibold text-sm">۸۹۰,۰۰۰ تومان</td>
                                        <td className="py-3 px-3 !font-semibold text-sm">۱۲۳۴</td>

                                        <td className="py-3 px-3 !font-semibold text-sm">
                                            {index === 0 ? "پرداخت شهریه" : "کمیسیون"}
                                        </td>

                                        <td className="py-3 px-3 !font-semibold text-sm">۱۴۰۴/۰۵/۰۴/۰۳</td>

                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    </div>

                </div>
            </div>
            <h4 className="!font-semibold text-lg text-right mt-10 mr-10">:نمودار روند تراکنش‌ها</h4>

            <div class="flex h-[245px] items-end justify-center gap-6 px-2" dir="rtl">
                <div class="relative h-[151px] w-[59px] shrink-0 rounded-full bg-[#dedfe0]">
                    <span class="absolute bottom-[13px] left-1/2 -translate-x-1/2 rotate-[-90deg] whitespace-nowrap !font-semibold text-black">شنبه</span>
                </div>

                <div class="relative h-[115px] w-[59px] shrink-0 rounded-full bg-[#dedfe0]">
                    <span class="absolute bottom-[13px] left-1/2 -translate-x-1/2 rotate-[-90deg] whitespace-nowrap !font-semibold text-black">یکشنبه</span>
                </div>

                <div class="relative h-[230px] w-[59px] shrink-0 rounded-full bg-[#dedfe0]">
                    <span class="absolute bottom-[13px] left-1/2 -translate-x-1/2 rotate-[-90deg] whitespace-nowrap !font-semibold text-black">دوشنبه</span>
                </div>

                <div class="relative h-[192px] w-[59px] shrink-0 rounded-full bg-[#dedfe0]">
                    <span class="absolute bottom-[13px] left-1/2 -translate-x-1/2 rotate-[-90deg] whitespace-nowrap !font-semibold text-black">سه شنبه</span>
                </div>

                <div class="relative h-[230px] w-[59px] shrink-0 rounded-full bg-[#dedfe0]">
                    <span class="absolute bottom-[13px] left-1/2 -translate-x-1/2 rotate-[-90deg] whitespace-nowrap !font-semibold text-black">چهارشنبه</span>
                </div>

                <div class="relative h-[230px] w-[59px] shrink-0 rounded-full bg-[#dedfe0]">
                    <span class="absolute bottom-[13px] left-1/2 -translate-x-1/2 rotate-[-90deg] whitespace-nowrap !font-semibold text-black">پنجشنبه</span>
                </div>
                 <div class="relative h-[280px] w-[59px] shrink-0 rounded-full bg-[#dedfe0]">
                    <span class="absolute bottom-[13px] left-1/2 -translate-x-1/2 rotate-[-90deg] whitespace-nowrap !font-semibold text-black">جمعه</span>
                </div>
            </div>


        </div>
    );
}

export default TransactionadPage