"use client";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { GoPencil } from "react-icons/go";
import { LuCircleFadingPlus } from "react-icons/lu";
import { FiEdit } from "react-icons/fi";
import { useState } from "react";

function BannerPage() {
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
            <div className="flex flex-row-reverse justify-between items-center w-full px-15 mt-5">
                <p className="!font-semibold text-lg">
                    :مدیریت بنرها
                </p>
                <div className="flex items-center gap-2">

                    <button
                        type="button"
                        onClick={() => setIsModalOpen(true)}
                        className="w-[181px] h-[40px] bg-[#0088FF] rounded-4xl flex items-center justify-center gap-4 cursor-pointer"
                    >
                        <LuCircleFadingPlus className="w-[22px] h-[22px] text-white" />

                        <p className="!font-semibold text-lg text-white">
                            ایجاد بنر جدید
                        </p>
                    </button>

                    <input
                        placeholder="جستجو"
                        className="text-lg text-right pb-2 pr-3 w-[510px] h-[40px] bg-[#F4F4F4D9] rounded-4xl border border-[#289DFC] outline-none"
                    />
                </div>

                {isModalOpen && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
                        onClick={() => setIsModalOpen(false)}
                    >

                        <div
                            className="w-[850px] min-h-[400px] bg-white rounded-3xl p-6 relative"
                            onClick={(e) => e.stopPropagation()}
                        >

                            <button
                                type="button"
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-4 left-5 text-4xl text-[#FF0000BD] hover:text-black cursor-pointer"
                            >
                                ×
                            </button>
                            <div className="text-right mb-6">
                                <h2 className="text-xl !font-bold">
                                    عنوان بنر
                                </h2>
                            </div>


                            <div className="w-full min-h-[250px]">
                                <div className="flex gap-10">
                                    <div>
                                        <h1 className="!font-semibold text-lg text-right mr-3 ">پیش نمایش بنر</h1>
                                        <div className="w-[300px] h-[179px] bg-[#000000] rounded-3xl flex items-start justify-between px-4 relative mt-2">

                                            <div className="flex flex-col items-end pt-5 text-white">
                                                <h3 className="!font-semibold ">
                                                    برترین مربی‌ها
                                                </h3>

                                                <p className=" !font-medium text-sm mt-2 mr-10">
                                                    بهترین قیمت
                                                </p>
                                                <p className=" !font-medium text-sm mt-2 mr-10">
                                                    ۱۰ جلسه
                                                </p>
                                            </div>
                                            <img
                                                src="/images/men5.png"
                                                className="w-[180px] h-[150px] object-cover  mt-7"
                                                alt="exercise"
                                            />

                                        </div>
                                    </div>
                                    <div className="w-full mr-5 mt-3">
                                        <h2 className="!font-semibold text-lg text-right">
                                            افزودن عکس
                                        </h2>

                                        <div className="flex items-end justify-end gap-6 mt-3">
                                            <div className="flex flex-col items-end gap-2">
                                                <label className="!font-medium text-sm">
                                                    :طول
                                                </label>

                                                <input
                                                    type="text"
                                                    className="w-[105px] h-[50px] bg-[#E5E5E5]  outline-none text-right px-2 !font-medium text-lg text-[#000000] rounded-4xl p-2"
                                                    placeholder="14"
                                                />
                                            </div>

                                            <div className="flex flex-col items-end gap-2">
                                                <label className="!font-medium text-sm">
                                                    :عرض
                                                </label>

                                                <input
                                                    type="text"
                                                    className="w-[100px] h-[48px] bg-[#E5E5E5]  outline-none text-right px-2 !font-medium text-lg text-[#000000] rounded-4xl p-2 "
                                                    placeholder="12"
                                                />
                                            </div>

                                            <div className="flex items-center justify-center w-[100px] h-[100px] bg-[#EDF6FE] rounded-full border border-dashed border-[#668CAE]">
                                                <MdOutlinePhotoCamera className="w-[40px] h-[40px] text-[#668CAE]" />
                                            </div>

                                        </div>
                                        <div>
                                            <input
                                            type="text"
                                             className="w-[450px] h-[60px] bg-[#E5E5E5]  outline-none text-right mt-5 rounded-4xl !font-medium text-lg text-[#000000] p-2 border border-dashed border-[#668CAE]"
                                             placeholder="توضیحات بنر"/>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="flex items-center justify-end gap-3 mt-6">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="w-[110px] h-[42px] rounded-xl !font-semibold border border-[#0088FF]  cursor-pointer"
                                >
                                    انصراف
                                </button>

                                <button
                                    type="button"
                                    className="w-[130px] h-[42px] rounded-xl !font-semibold bg-[#0088FF] text-white cursor-pointer"
                                >
                                    ایجاد بنر
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <h2 className="!font-semibold text-lg text-right mt-10 mr-15">:بنرهای صفحه باشگاه من</h2>
            <div className="flex gap-20 justify-center mt-8">
                <div className="w-[342px] h-[179px] bg-[#000000] rounded-3xl flex items-start justify-between px-4 relative">
                    <FiEdit className="absolute top-3 right-5 w-[25px] h-[25px] text-[#F97316]" />
                    <div className="flex flex-col items-end pt-5 text-white">

                        <h3 className="!font-semibold">
                            412kcal
                        </h3>

                        <p className=" !font-medium text-sm mt-2">
                            25min
                        </p>

                        <h4 className="!font-semibold mt-6">
                            تمرینات سه
                        </h4>

                        <p className=" !font-medium text-sm mt-2">
                            ۸ مرحله
                        </p>

                    </div>
                    <img
                        src="/images/men5.png"
                        className="w-[180px] h-[150px] object-cover  mt-7"
                        alt="exercise"
                    />

                </div>
                <div className="w-[342px] h-[179px] bg-[#000000] rounded-3xl flex items-start justify-between px-4 relative">
                    <FiEdit className="absolute top-3 right-5 w-[25px] h-[25px] text-[#F97316]" />
                    <div className="flex flex-col items-end pt-5 text-white">

                        <h3 className="!font-semibold">
                            412kcal
                        </h3>

                        <p className=" !font-medium text-sm mt-2">
                            25min
                        </p>

                        <h4 className="!font-semibold mt-6">
                            تمرینات سه
                        </h4>

                        <p className=" !font-medium text-sm mt-2">
                            ۸ مرحله
                        </p>

                    </div>
                    <img
                        src="/images/men5.png"
                        className="w-[180px] h-[150px] object-cover  mt-7"
                        alt="exercise"
                    />

                </div>
                <div className="w-[342px] h-[179px] bg-[#000000] rounded-3xl flex items-start justify-between px-4 relative">
                    <FiEdit className="absolute top-3 right-5 w-[25px] h-[25px] text-[#F97316]" />
                    <div className="flex flex-col items-end pt-5 text-white">

                        <h3 className="!font-semibold">
                            412kcal
                        </h3>

                        <p className=" !font-medium text-sm mt-2">
                            25min
                        </p>

                        <h4 className="!font-semibold mt-6">
                            تمرینات سه
                        </h4>

                        <p className=" !font-medium text-sm mt-2">
                            ۸ مرحله
                        </p>

                    </div>
                    <img
                        src="/images/men5.png"
                        className="w-[180px] h-[150px] object-cover ro mt-7"
                        alt="exercise"
                    />

                </div>
            </div>
            <div className="flex gap-20 justify-center mt-8">
                <div className="flex gap-20 justify-center mt-8">
                    <div className="w-[342px] h-[179px]  bg-[#000000] rounded-3xl flex items-start justify-between px-4 relative">
                        <FiEdit className="absolute top-3 right-5 w-[25px] h-[25px] text-[#F97316]" />
                        <div className="flex flex-col items-end pt-5 text-white">
                            <h3 className="!font-semibold mt-6">
                                برترین مربی‌ها
                            </h3>

                            <p className=" !font-medium text-sm mt-2">
                                بهترین قیمت
                            </p>
                            <p className=" !font-medium text-sm mt-2">
                                ۱۰ جلسه
                            </p>
                        </div>
                        <img
                            src="/images/men5.png"
                            className="w-[180px] h-[150px] object-cover  mt-7"
                            alt="exercise"
                        />
                    </div>
                </div>
                <div className="flex gap-20 justify-center mt-8">
                    <div className="w-[342px] h-[179px]  bg-[#000000] rounded-3xl flex items-start justify-between px-4 relative">
                        <FiEdit className="absolute top-3 right-5 w-[25px] h-[25px] text-[#F97316]" />
                        <div className="flex flex-col items-end pt-5 text-white">
                            <h3 className="!font-semibold mt-6">
                                برترین مربی‌ها
                            </h3>

                            <p className=" !font-medium text-sm mt-2">
                                بهترین قیمت
                            </p>
                            <p className=" !font-medium text-sm mt-2">
                                ۱۰ جلسه
                            </p>
                        </div>
                        <img
                            src="/images/men5.png"
                            className="w-[180px] h-[150px] object-cover  mt-7"
                            alt="exercise"
                        />
                    </div>
                </div>
                <div className="flex gap-20 justify-center mt-8">
                    <div className="w-[342px] h-[179px]  bg-[#000000] rounded-3xl flex items-start justify-between px-4 relative">
                        <FiEdit className="absolute top-3 right-5 w-[25px] h-[25px] text-[#F97316]" />
                        <div className="flex flex-col items-end pt-5 text-white">
                            <h3 className="!font-semibold mt-6">
                                برترین مربی‌ها
                            </h3>

                            <p className=" !font-medium text-sm mt-2">
                                بهترین قیمت
                            </p>
                            <p className=" !font-medium text-sm mt-2">
                                ۱۰ جلسه
                            </p>
                        </div>
                        <img
                            src="/images/men5.png"
                            className="w-[180px] h-[150px] object-cover  mt-7"
                            alt="exercise"
                        />
                    </div>
                </div>
            </div>




        </div>
    )
}

export default BannerPage