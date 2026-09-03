import { MdOutlinePhotoCamera } from "react-icons/md";
import { GoPencil } from "react-icons/go";
import { IoPersonAddOutline } from "react-icons/io5";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { FiSettings } from "react-icons/fi";

function AdduserPage() {
    return (
        <div className="w-full h-[1110px]">
            <div className="flex justify-end items-center gap-8 mt-5 mr-10">
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
                <div className="flex gap-5">
                    <input className="w-[255px] h-[50px] bg-[#F5F7FA]  rounded-4xl border border-[#F5F7FA] outline-none text-lg text-right pb-2 pr-3" placeholder="جستجو" />
                    <div className="flex items-center justify-center w-[50px] h-[50px] bg-[#EDF6FE] rounded-full">
                        <FiSettings className="w-[25px] h-[25px] text-[#668CAE]" />
                    </div>
                    <div className="flex items-center justify-center w-[50px] h-[50px] bg-[#EDF6FE] rounded-full">
                        <HiOutlineBellAlert className="w-[25px] h-[25px] text-[#FE5C73]" />
                    </div>
                    <div className="flex items-center justify-center w-[50px] h-[50px] bg-[#EDF6FE] rounded-full">
                        <MdOutlinePhotoCamera className="w-[25px] h-[25px] text-[#668CAE]" />
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-[200px] h-[50px] bg-[#0088FF] rounded-4xl flex items-center justify-center gap-4">
                        <IoPersonAddOutline className="w-[22px] h-[22px] text-white" />
                        <p className="!font-semibold text-lg text-white">
                            کاربر جدید
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-[1600px] min-h-[600px] mx-auto mt-7 rounded-4xl flex flex-col items-center">

                {/* آیکون */}
                <div className="flex items-center justify-center w-[120px] h-[120px] bg-[#EDF6FE] rounded-full">
                    <MdOutlinePhotoCamera className="w-[40px] h-[40px] text-[#668CAE]" />
                </div>

                {/* ردیف اول */}
                <div className="flex justify-center gap-4 mt-8">
                    <div className="flex flex-col items-end gap-2">
                        <label className="text-right text-sm !font-medium pr-3">
                            کد ملی
                        </label>

                        <input
                            className="w-[418px] h-[50px] bg-white rounded-4xl border border-[#DFEAF2] outline-none text-right px-4"
                        />
                    </div>

                    <div className="flex flex-col items-end gap-2">
                        <label className="text-right text-sm !font-medium pr-3">
                            نام و نام خانوادگی
                        </label>

                        <input
                            className="w-[418px] h-[50px] bg-white rounded-4xl border border-[#DFEAF2] outline-none text-right px-4"
                        />
                    </div>
                </div>

                {/* ردیف دوم */}
                <div className="flex justify-center gap-4 mt-5">
                    <div className="flex flex-col items-end gap-2">
                        <label className="text-right text-sm !font-medium pr-3">
                            کد یکبار مصرف
                        </label>

                        <input
                            className="w-[418px] h-[50px] bg-white rounded-4xl border border-[#DFEAF2] outline-none text-right px-4"
                        />
                    </div>

                    <div className="flex flex-col items-end gap-2">
                        <label className="text-right text-sm !font-medium pr-3">
                            شماره تماس
                        </label>

                        <input
                            className="w-[418px] h-[50px] bg-white rounded-4xl border border-[#DFEAF2] outline-none text-right px-4"
                        />
                    </div>
                </div>

                {/* ردیف سوم */}
                <div className="flex justify-center gap-4 mt-5">
                    <div className="flex flex-col items-end gap-2">
                        <label className="text-right text-sm !font-medium pr-3">
                            جنسیت
                        </label>

                        <div className="flex items-center gap-2 h-[50px]">
                            <label className="flex items-center justify-center gap-1 w-[70px] h-[30px] border border-[#DFEAF2] rounded-full cursor-pointer">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    className="w-3 h-3 accent-[#289DFC]"
                                />
                                <span className="text-xs !font-medium">
                                    مرد
                                </span>
                            </label>

                            <label className="flex items-center justify-center gap-1 w-[70px] h-[30px] border border-[#DFEAF2] rounded-full cursor-pointer">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    className="w-3 h-3 accent-[#289DFC]"
                                />
                                <span className="text-xs !font-medium">
                                    زن
                                </span>
                            </label>
                        </div>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                        <label className="text-right text-sm !font-medium pr-3">
                            تاریخ تولد
                        </label>

                        <input
                            className="w-[418px] h-[50px] bg-white rounded-4xl border border-[#DFEAF2] outline-none text-right px-4"
                        />
                    </div>
                </div>

                {/* ردیف چهارم */}
                <div className="flex justify-center gap-4 mt-5">
                    <div className="flex flex-col items-end gap-2">
                        <label className="text-right text-sm !font-medium pr-3">
                            استان
                        </label>

                        <input
                            className="w-[418px] h-[50px] bg-white rounded-4xl border border-[#DFEAF2] outline-none text-right px-4"
                        />
                    </div>

                    <div className="flex flex-col items-end gap-2">
                        <label className="text-right text-sm !font-medium pr-3">
                            شهر
                        </label>

                        <input
                            className="w-[418px] h-[50px] bg-white rounded-4xl border border-[#DFEAF2] outline-none text-right px-4"
                        />
                    </div>
                </div>

                {/* دکمه‌ها */}
                <div className="flex justify-center gap-4 mt-10">
                    <button
                        className="w-[418px] h-[50px] bg-[#FF0000BD] rounded-4xl border border-[#DFEAF2] text-sm !font-medium text-white px-4"
                    >
                        حذف کاربر
                    </button>

                    <button
                        className="w-[418px] h-[50px] bg-[#0088FF] rounded-4xl border border-[#DFEAF2] text-sm !font-medium text-white px-4"
                    >
                        ثبت
                    </button>
                </div>

            </div>



        </div>
    )
}

export default AdduserPage