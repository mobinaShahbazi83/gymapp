"use client";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { GoPencil } from "react-icons/go";
import { GoChevronDown } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { IoPersonAddOutline } from "react-icons/io5";
import { useState } from "react";

function AdmingymPage() {
    
    const [rows, setRows] = useState([
        { id: 1, name: "مریم فتحی", description: "این یک نوشته آزمایشی برای اعمال تغییرات در سیستم می‌باشد.", date: "آزمایشی", status: "آزمایشی" },
        { id: 2, name: "مریم فتحی", description: "این یک نوشته آزمایشی برای اعمال تغییرات در سیستم می‌باشد.", date: "آزمایشی", status: "آزمایشی" },
        { id: 3, name: "مریم فتحی", description: "این یک نوشته آزمایشی برای اعمال تغییرات در سیستم می‌باشد.", date: "آزمایشی", status: "آزمایشی" },
        { id: 4, name: "مریم فتحی", description: "این یک نوشته آزمایشی برای اعمال تغییرات در سیستم می‌باشد.", date: "آزمایشی", status: "آزمایشی" },
    ]);

    const [selectedRows, setSelectedRows] = useState([]);
    const [openMenu, setOpenMenu] = useState(null);

    const toggleSelect = (id) => {
        setSelectedRows((prev) =>
            prev.includes(id)
                ? prev.filter((item) => item !== id)
                : [...prev, id]
        );
    };

    const editName = (id) => {
        const row = rows.find((item) => item.id === id);
        const newName = window.prompt("نام جدید را وارد کنید:", row.name);

        if (newName !== null && newName.trim() !== "") {
            setRows((prev) =>
                prev.map((item) =>
                    item.id === id
                        ? { ...item, name: newName.trim() }
                        : item
                )
            );
        }

        setOpenMenu(null);
    };

    const deleteRow = (id) => {
        setRows((prev) => prev.filter((item) => item.id !== id));
        setSelectedRows((prev) => prev.filter((item) => item !== id));
        setOpenMenu(null);
    };
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
                <div className="flex gap-10">
                    <div className="flex gap-1 ">
                        <GoChevronDown className="w-[25px] h-[25px] text-[#0088FF] pt-1" />
                        <h3 className="!font-semibold text-lg">انتخاب دسته‌بندی</h3>
                    </div>
                    <h2 className="!font-semibold text-lg">:لیست تغییرات</h2>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-[200px] h-[50px] bg-[#0088FF] rounded-4xl flex items-center justify-center gap-4">
                        <IoPersonAddOutline className="w-[30px] h-[30px] text-white" />
                        <p className="!font-semibold text-lg text-white">
                            ادمین جدید
                        </p>
                    </div>
                    <div className="flex justify-center mt- gap-5">
                        <input
                            placeholder=".جستجو کنید"
                            className="w-[950px] h-[50px] bg-[#9595951C] border border-[#9595951C] outline-none rounded-4xl !font-semibold text-lg text-right p-4" />
                        <div className="w-[57px] h-[50px] bg-[#9595951C] border border-[#9595951C] rounded-3xl"><IoSearchOutline className="w-[25px] h-[25px] mt-3 ml-4 text-[#0088FF] " /></div>
                    </div>

                </div>
            </div>
            <div className="flex gap-5 justify-end mr-10 mt-5">
                <button className="w-[140px] h-[41px] border border-[#0088FF] rounded-4xl !font-semibold text-lg">فیلتر</button>
                <button className="w-[137px] h-[41px] border border-[#0088FF] rounded-4xl !font-semibold text-lg">نام ادمین</button>
                <button className="w-[137px] h-[41px] border border-[#0088FF] rounded-4xl !font-semibold text-lg">09217783524</button>
                <button className="w-[137px] h-[41px] border border-[#0088FF] rounded-4xl !font-semibold text-lg">کد پرسنلی</button>
            </div>
           
                 <div className="w-full max-w-[1600px] mt-10 mx-auto" dir="rtl">
            <div className="grid grid-cols-4 items-center h-[55px] rounded-t-2xl bg-[#F8FAFC]">
                <div className="text-center !font-semibold text-lg">کاربر</div>
                <div className="text-center !font-semibold text-lg">توضیحات</div>
                <div className="text-center !font-semibold text-lg">تاریخ</div>
                <div className="text-center !font-semibold text-lg">وضعیت</div>
            </div>
            <div className="w-full min-h-[600px] rounded-b-2xl">

                {rows.map((row) => (
                    <div
                        key={row.id}
                        className="grid grid-cols-4 items-center min-h-[60px] border-b border-[#DFEAF2]"
                    >
                                              <div
                            className="flex items-center justify-center gap-3 py-4"
                            dir="ltr"
                        >
                            <span className="!font-semibold" dir="rtl">
                                {row.name}
                            </span>

                          
                            <button
                                type="button"
                                onClick={() => toggleSelect(row.id)}
                                aria-label={`انتخاب ${row.name}`}
                                aria-pressed={selectedRows.includes(row.id)}
                                className={`w-[18px] h-[18px] shrink-0 rounded-[4px] border flex items-center justify-center transition-colors ${
                                    selectedRows.includes(row.id)
                                        ? "bg-[#289DFC] border-[#289DFC]"
                                        : "bg-white border-[#DFEAF2] hover:border-[#289DFC]"
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

                          
                            <div className="relative">
                                <button
                                    type="button"
                                    onClick={() =>
                                        setOpenMenu(
                                            openMenu === row.id ? null : row.id
                                        )
                                    }
                                    aria-label="گزینه‌های کاربر"
                                    className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-gray-100"
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        className="w-5 h-5"
                                        fill="currentColor"
                                    >
                                        <circle cx="5" cy="12" r="1.8" />
                                        <circle cx="12" cy="12" r="1.8" />
                                        <circle cx="19" cy="12" r="1.8" />
                                    </svg>
                                </button>

                                {openMenu === row.id && (
                                    <div className="absolute top-8 left-0 z-20 w-[145px] rounded-xl border border-[#DFEAF2] bg-white shadow-lg py-2">
                                        <button
                                            type="button"
                                            onClick={() => editName(row.id)}
                                            className="w-full px-4 py-2 text-right text-sm hover:bg-[#F3F8FC] !font-semibold"
                                        >
                                            ویرایش نام
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() => deleteRow(row.id)}
                                            className="w-full px-4 py-2 text-right text-sm text-red-500 hover:bg-red-50 !font-semibold"
                                        >
                                            حذف
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>

                     
                        <div className="text-center py-4 px-3 !font-semibold">
                            {row.description}
                        </div>

                     
                        <div className="text-center py-4 !font-semibold">
                            {row.date}
                        </div>

                      
                        <div className="text-center py-4 !font-semibold">
                            {row.status}
                        </div>
                    </div>
                ))}

            </div>
        </div>
            
        </div>
    )
}

export default AdmingymPage