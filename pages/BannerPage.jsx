import { MdOutlinePhotoCamera } from "react-icons/md";
import { GoPencil } from "react-icons/go";
import { LuCircleFadingPlus } from "react-icons/lu";
import { FiEdit } from "react-icons/fi";

function BannerPage() {
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
                    <div className="w-[181px] h-[40px] bg-[#0088FF] rounded-4xl flex items-center justify-center gap-4">
                        <LuCircleFadingPlus className="w-[22px] h-[22px] text-white" />
                        <p className="!font-semibold text-lg text-white">
                            ایجاد بنر جدید
                        </p>
                    </div>
                    <input
                        placeholder="جستجو"
                        className="text-lg text-right pb-2 pr-3 w-[510px] h-[40px] bg-[#F4F4F4D9] rounded-4xl border border-[#289DFC] outline-none"
                    />
                </div>
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