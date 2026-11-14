

"use client"

import { MdOutlinePhotoCamera } from "react-icons/md";

import { GoPencil } from "react-icons/go";

import { IoPersonAddOutline } from "react-icons/io5";

import { CiCircleCheck } from "react-icons/ci";

import { CgGym } from "react-icons/cg";

import { useState } from "react";

import { FaPlus } from "react-icons/fa6";

import { CgMathMinus } from "react-icons/cg";

import { CiCircleMinus } from "react-icons/ci";

import { CiCircleRemove } from "react-icons/ci";



function UsersPage() {

    const [isUserModalOpen, setIsUserModalOpen] = useState(false);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [rows, setRows] = useState([

        { id: 1, name: "مریم فتحی", description: "", date: "", status: "active" },

        { id: 2, name: "مریم فتحی", description: "", date: "", status: "inactive" },

        { id: 3, name: "مریم فتحی", description: "", date: "", status: "blocked" },

        { id: 4, name: "مریم فتحی", description: "", date: "", status: "active" },

        { id: 5, name: "مریم فتحی", description: "", date: "", status: "inactive" },

        { id: 6, name: "مریم فتحی", description: "", date: "", status: "active" },

    ]);

    const [selectedRows, setSelectedRows] = useState([]);

    const toggleSelect = (id) => {
        setSelectedRows((previous) =>
            previous.includes(id)
                ? previous.filter((selectedId) => selectedId !== id)
                : [...previous, id]
        );
    };

    const handleAddUser = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const fullName = formData.get("fullName").trim();

        const newUser = {
            id: Date.now(),
            name: fullName,
            phone: formData.get("phone"),
            nationalCode: formData.get("nationalCode"),
            birthDate: formData.get("birthDate"),
            gender: formData.get("gender"),
            city: formData.get("city"),
            province: formData.get("province"),
            membership: formData.get("membership"),
            description: "",
            date: new Date().toLocaleDateString("fa-IR"),
            status: "active",
        };

        setRows((previous) => [newUser, ...previous]);
        setIsUserModalOpen(false);
        event.currentTarget.reset();
    };


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

                    <input className="w-[1350px] h-[50px] bg-[#F5F7FA]  rounded-4xl border border-[#F5F7FA] outline-none text-lg text-right pb-2 pr-3 mt-4" placeholder="جستجو" />



                    <h3 className="!font-semibold mt-7">:لیست کاربران</h3>

                </div>

                <div className="flex items-center gap-2">

                    <button

                        onClick={() => setIsUserModalOpen(true)}

                        className="w-[200px] h-[50px] bg-[#0088FF] rounded-4xl flex items-center justify-center gap-4 cursor-pointer"

                    >

                        <IoPersonAddOutline className="w-[22px] h-[22px] text-white" />



                        <p className="!font-semibold text-lg text-white">

                            کاربر جدید

                        </p>

                    </button>



                    {isUserModalOpen && (
                        <div
                            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4"
                            onClick={() => setIsUserModalOpen(false)}
                        >
                            <div
                                dir="rtl"
                                className="relative w-full max-w-[950px] max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-xl p-6 sm:p-8"
                                onClick={(event) => event.stopPropagation()}
                            >
                                <button
                                    type="button"
                                    aria-label="بستن فرم"
                                    onClick={() => setIsUserModalOpen(false)}
                                    className="absolute top-4 left-5 text-3xl leading-none text-[#FE5C73] hover:text-black cursor-pointer"
                                >
                                    ×
                                </button>

                                <div className="flex flex-col items-center">
                                    <div className="flex items-center justify-center w-[100px] h-[100px] bg-[#EDF6FE] rounded-full">
                                        <MdOutlinePhotoCamera className="w-[38px] h-[38px] text-[#668CAE]" />
                                    </div>
                                    <h2 className="mt-4 text-xl font-bold text-[#263238]">ثبت‌نام کاربر جدید</h2>
                                    <p className="mt-2 text-sm text-gray-400">اطلاعات زیر را برای ثبت کاربر وارد کنید.</p>
                                </div>

                                <form onSubmit={handleAddUser} className="mt-7">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div className="flex flex-col gap-2">
                                            <label className="text-right text-sm font-medium">نام و نام خانوادگی</label>
                                            <input name="fullName" required type="text" placeholder="نام و نام خانوادگی کاربر" className="w-full h-[50px] rounded-xl border border-[#DFEAF2] outline-none text-right px-4 focus:border-[#0088FF]" />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-right text-sm font-medium">کد ملی</label>
                                            <input name="nationalCode" required inputMode="numeric" maxLength={10} pattern="[0-9]{10}" placeholder="کد ملی ۱۰ رقمی" className="w-full h-[50px] rounded-xl border border-[#DFEAF2] outline-none text-right px-4 focus:border-[#0088FF]" />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-right text-sm font-medium">شماره تماس</label>
                                            <input name="phone" required type="tel" inputMode="numeric" pattern="09[0-9]{9}" placeholder="09123456789" dir="ltr" className="w-full h-[50px] rounded-xl border border-[#DFEAF2] outline-none text-left px-4 focus:border-[#0088FF]" />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-right text-sm font-medium">تاریخ تولد</label>
                                            <input name="birthDate" type="date" className="w-full h-[50px] rounded-xl border border-[#DFEAF2] outline-none text-right px-4 focus:border-[#0088FF]" />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-right text-sm font-medium">جنسیت</label>
                                            <select name="gender" defaultValue="" required className="w-full h-[50px] rounded-xl border border-[#DFEAF2] bg-white outline-none px-4 focus:border-[#0088FF]">
                                                <option value="" disabled>انتخاب جنسیت</option>
                                                <option value="male">مرد</option>
                                                <option value="female">زن</option>
                                            </select>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-right text-sm font-medium">نوع عضویت</label>
                                            <select name="membership" defaultValue="" required className="w-full h-[50px] rounded-xl border border-[#DFEAF2] bg-white outline-none px-4 focus:border-[#0088FF]">
                                                <option value="" disabled>انتخاب نوع عضویت</option>
                                                <option value="یک ماهه">یک ماهه</option>
                                                <option value="سه ماهه">سه ماهه</option>
                                                <option value="شش ماهه">شش ماهه</option>
                                                <option value="یک ساله">یک ساله</option>
                                                <option value="بدون عضویت">بدون عضویت</option>
                                            </select>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-right text-sm font-medium">استان</label>
                                            <input name="province" type="text" placeholder="استان محل سکونت" className="w-full h-[50px] rounded-xl border border-[#DFEAF2] outline-none text-right px-4 focus:border-[#0088FF]" />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-right text-sm font-medium">شهر</label>
                                            <input name="city" type="text" placeholder="شهر محل سکونت" className="w-full h-[50px] rounded-xl border border-[#DFEAF2] outline-none text-right px-4 focus:border-[#0088FF]" />
                                        </div>
                                    </div>

                                    <div className="mt-5 flex flex-col gap-2">
                                        <label className="text-right text-sm font-medium">آدرس</label>
                                        <textarea name="address" rows={2} placeholder="آدرس محل سکونت (اختیاری)" className="w-full rounded-xl border border-[#DFEAF2] outline-none text-right p-4 resize-none focus:border-[#0088FF]" />
                                    </div>

                                    <div className="mt-5 flex flex-col items-center gap-3">
                                        <label className="text-sm font-medium">افزودن عکس پروفایل (اختیاری)</label>
                                        <label className="w-[100px] h-[75px] border-2 border-dashed border-[#289DFC] text-[#289DFC] rounded-2xl flex items-center justify-center cursor-pointer">
                                            <FaPlus className="w-7 h-7" />
                                            <input name="profileImage" type="file" accept="image/*" className="hidden" />
                                        </label>
                                    </div>

                                    <div className="flex flex-col-reverse sm:flex-row justify-center gap-4 mt-8">
                                        <button type="button" onClick={() => setIsUserModalOpen(false)} className="w-full sm:w-[200px] h-[50px] rounded-full border border-[#DFEAF2] text-gray-600 hover:bg-gray-50">انصراف</button>
                                        <button type="submit" className="w-full sm:w-[300px] h-[50px] bg-[#0088FF] rounded-full text-white font-semibold hover:bg-blue-600">ثبت کاربر</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}






                    {isModalOpen && (

                        <div

                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"

                            onClick={() => setIsModalOpen(false)}

                        >

                            <div

                                className="relative w-[1100px] min-h-[700px] bg-white rounded-2xl p-6"

                                onClick={(e) => e.stopPropagation()}

                            >

                                {/* دکمه خروج */}

                                <button

                                    type="button"

                                    onClick={() => setIsModalOpen(false)}

                                    className="absolute top-3 left-4 text-3xl font-light text-[#FE5C73] hover:text-black cursor-pointer leading-none"

                                >

                                    ×

                                </button>



                                <div className=" mx-auto mt-10 rounded-4xl flex flex-col items-center">



                                    {/* آیکون */}

                                    <div className="flex items-center justify-center w-[120px] h-[120px] bg-[#EDF6FE] rounded-full">

                                        <MdOutlinePhotoCamera className="w-[40px] h-[40px] text-[#668CAE]" />

                                    </div>



                                    {/* ردیف اول */}

                                    <div className="flex justify-center gap-4 mt-8">

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

                                                نام باشگاه

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

                                                شهر

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

                                                تعداد کمد

                                            </label>



                                            <input

                                                className="w-[418px] h-[50px] bg-white rounded-4xl border border-[#DFEAF2] outline-none text-right px-4"

                                            />

                                        </div>



                                        <div className="flex flex-col items-end gap-2">

                                            <label className="text-right text-sm !font-medium pr-3">

                                                ادرس

                                            </label>



                                            <input

                                                className="w-[418px] h-[50px] bg-white rounded-4xl border border-[#DFEAF2] outline-none text-right px-4"

                                            />

                                        </div>

                                    </div>



                                    {/* ردیف چهارم */}

                                    <div className="flex justify-center gap-12 mt-5">



                                        {/* آپلود پروانه کسب */}

                                        <div className="flex flex-col items-end gap-2">

                                            <p className="text-sm !font-medium">:آپلود پروانه کسب</p>



                                            <div className="w-[350px] h-[70px] border-2 border-dashed text-[#289DFC] rounded-4xl flex items-center justify-center">

                                                <FaPlus className="w-[30px] h-[30px] text-[#289DFC]" />

                                            </div>

                                        </div>



                                        {/* گالری تصاویر */}

                                        <div className="flex flex-col items-end gap-2">

                                            <p className="text-sm !font-medium">گالری تصاویر</p>



                                            <div className="flex gap-3">

                                                <div className="w-[90px] h-[70px] border-2 border-dashed text-[#289DFC] rounded-4xl flex items-center justify-center">

                                                    <FaPlus className="w-[30px] h-[30px] text-[#289DFC]" />

                                                </div>



                                                <div className="w-[90px] h-[70px] border-2 border-dashed text-[#289DFC] rounded-4xl flex items-center justify-center">

                                                    <FaPlus className="w-[30px] h-[30px] text-[#289DFC]" />

                                                </div>



                                                <div className="w-[90px] h-[70px] border-2 border-dashed text-[#289DFC] rounded-4xl flex items-center justify-center">

                                                    <FaPlus className="w-[30px] h-[30px] text-[#289DFC]" />

                                                </div>

                                            </div>

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

                        </div>

                    )}

                </div>



            </div>

            <div className="flex gap-5 justify-end mr-10 mt-10">

                <button className="w-[140px] h-[41px] border border-[#0088FF] rounded-4xl !font-semibold text-lg">4400258746</button>

                <button className="w-[137px] h-[41px] border border-[#0088FF] rounded-4xl !font-semibold text-lg">09217783524</button>

                <button className="w-[137px] h-[41px] border border-[#0088FF] rounded-4xl !font-semibold text-lg">مریم فتحی</button>

                <button className="w-[137px] h-[41px] border border-[#0088FF] rounded-4xl !font-semibold text-lg">فیلتر</button>

            </div>

            <div className="flex gap-5 justify-end mr-10 mt-10">

                <div className="flex gap-1">

                    <CiCircleRemove className="w-[25px] h-[25px] text-[#FF0000]" />

                    <p>کاربران بلاک شده</p>

                </div>

                <div className="flex gap-1">

                    <CiCircleMinus className="w-[25px] h-[25px] text-[#4C78FF]" />

                    <p>کاربران غیرفعال</p>

                </div>

                <div className="flex gap-1">

                    <CiCircleCheck className="w-[25px] h-[25px] text-[#FF82AC]" />

                    <p>کاربران فعال</p>

                </div>



            </div>

            <div className="w-full max-w-[1600px] mt-10 mx-auto px-4" dir="rtl">
                <div className="overflow-x-auto rounded-2xl border border-[#DFEAF2]">
                    <div className="min-w-[900px]">
                        {/* سرستون‌های جدول */}
                        <div className="grid grid-cols-6 items-center min-h-[60px] bg-[#F5F9FC] border-b border-[#DFEAF2] font-bold">
                            <div className="text-center">کاربر</div>
                            <div className="text-center">وضعیت</div>
                            <div className="text-center">شماره تماس</div>
                            <div className="text-center">کد ملی</div>
                            <div className="text-center">نوع عضویت</div>
                            <div className="text-center">عملیات</div>
                        </div>

                        {rows.map((row) => (
                            <div
                                key={row.id}
                                className="grid grid-cols-6 items-center min-h-[68px] border-b border-[#DFEAF2] last:border-b-0"
                            >
                                {/* نام کاربر، آیکون وضعیت و انتخاب */}
                                <div className="flex items-center justify-center gap-2 px-2">
                                    <span className="font-semibold" dir="rtl">
                                        {row.name}
                                    </span>

                                    {row.status === "active" && (
                                        <CiCircleCheck className="w-[23px] h-[23px] shrink-0 text-[#FF82AC]" />
                                    )}

                                    {row.status === "inactive" && (
                                        <CiCircleMinus className="w-[23px] h-[23px] shrink-0 text-[#4C78FF]" />
                                    )}

                                    {row.status === "blocked" && (
                                        <CiCircleRemove className="w-[23px] h-[23px] shrink-0 text-[#FF0000]" />
                                    )}

                                    <button
                                        type="button"
                                        aria-label="انتخاب کاربر"
                                        onClick={() => toggleSelect(row.id)}
                                        className={`w-[18px] h-[18px] shrink-0 rounded-[4px] border flex items-center justify-center ${
                                            selectedRows.includes(row.id)
                                                ? "bg-[#289DFC] border-[#289DFC]"
                                                : "bg-white border-[#DFEAF2]"
                                        }`}
                                    >
                                        {selectedRows.includes(row.id) && (
                                            <svg
                                                viewBox="0 0 16 16"
                                                className="w-3 h-3 text-white"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2.5"
                                            >
                                                <path
                                                    d="M3 8l3 3 7-7"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        )}
                                    </button>
                                </div>

                                {/* متن وضعیت */}
                                <div className="text-center py-4 font-semibold">
                                    {row.status === "active"
                                        ? "فعال"
                                        : row.status === "inactive"
                                          ? "غیرفعال"
                                          : "بلاک شده"}
                                </div>

                                <div className="text-center py-4 font-semibold">
                                    {row.phone || "۰۹۲۱۷۷۸۳۵۲۴"}
                                </div>

                                <div className="text-center py-4 font-semibold">
                                    {row.nationalCode || "۵۰۸۰۱۷۹۸۵۶"}
                                </div>

                                <div className="text-center py-4 font-semibold">
                                    {row.membership || "آزمایشی"}
                                </div>

                                <div className="text-center py-4 font-semibold">
                                    <button
                                        type="button"
                                        className="text-[#0088FF] hover:underline"
                                    >
                                        مشاهده
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>



        </div>

    )

}



export default UsersPage