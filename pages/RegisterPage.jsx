import { GoChevronDown } from "react-icons/go";

function RegisterPage() {
    return (
        <div className="flex justify-center h-screen overflow-hidden bg-white">
            <div
                className="
                    w-[600px]
                    h-screen
                    relative
                    overflow-hidden
                    border
                    border-[#289DFC30]
                    rounded-2xl
                    box-border
                    flex
                    flex-col
                    px-6
                    sm:px-12
                    bg-[#D0E4FF]
                    bg-[radial-gradient(circle_at_48%_50%,#0F67FE_0_7px,transparent_8px)]
                "
            >

                {/* ================= BACKGROUND ================= */}

                <div className="absolute -top-[1px] left-[55px] h-[26px] w-[32px] rounded-br-[10px] border-r-[6px] border-b-[6px] border-[#A9C9F7]" />

                <div className="absolute -top-[1px] left-[116px] h-[26px] w-[32px] rounded-br-[10px] border-r-[6px] border-b-[6px] border-[#A9C9F7]" />

                <div className="absolute top-[20px] left-[143px] h-[35px] w-[34px] rounded-tl-[10px] border-l-[6px] border-t-[6px] border-[#91BCF6]" />

                <div className="absolute top-[51px] right-[-2px] h-[34px] w-[28px] rounded-bl-[10px] border-l-[6px] border-b-[6px] border-[#91BCF6]" />

                <div className="absolute top-[54px] right-[-3px] h-[32px] w-[32px] rounded-bl-[10px] border-l-[6px] border-b-[6px] border-[#91BCF6]" />

                <div className="absolute top-[142px] right-0 h-[6px] w-[18px] bg-[#91BCF6]" />

                <div className="absolute top-[239px] left-0 h-[6px] w-[20px] bg-[#91BCF6]" />

                {/* ================= BOTTOM ================= */}

                <div className="absolute bottom-[25px] left-[-2px] h-[34px] w-[24px] rounded-tr-[10px] border-r-[6px] border-t-[6px] border-[#91BCF6]" />

                <div className="absolute bottom-[0px] left-[18px] h-[32px] w-[31px] rounded-tr-[10px] border-r-[6px] border-t-[6px] border-[#91BCF6]" />

                <div className="absolute bottom-[-2px] left-[47px] h-[38px] w-[33px] rounded-tr-[10px] border-r-[6px] border-t-[6px] border-[#91BCF6]" />

                <div className="absolute bottom-[-1px] left-[105px] h-[30px] w-[34px] rounded-tl-[10px] border-l-[6px] border-t-[6px] border-[#91BCF6]" />

                <div className="absolute bottom-[-1px] left-[135px] h-[30px] w-[34px] rounded-tl-[10px] border-l-[6px] border-t-[6px] border-[#91BCF6]" />

                {/* ================= IMAGE ================= */}

                <img
                    src="/images/Dumbbell.png"
                    alt="Dumbbell"
                    className="
                        relative
                        z-10
                        w-[220px]
                        h-[120px]
                        object-contain
                    "
                />

                {/* ================= TITLE ================= */}

                <div className="relative z-10 mr-4 mt-6" dir="rtl">
                    <h1 className="text-xl !font-bold">
                        ثبت نام
                    </h1>

                    <p className="text-base !font-normal mt-2">
                        برای ثبت‌نام اطلاعات خود را وارد نمایید.
                    </p>
                </div>

                {/* ================= NAME ================= */}

                <div
                    className="relative z-10 w-full flex flex-col gap-2 mt-10"
                    dir="rtl"
                >
                    <label className="font-normal">
                        نام و نام خانوادگی:
                    </label>

                    <input
                        type="text"
                        className="
                            w-full
                            
                            h-[48px]
                            bg-[#D0E4FF]
                            border
                            border-[#289DFC]
                            outline-none
                            hover:border-[#289DFC]
                            rounded-2xl
                            px-4
                        "
                    />
                </div>

                {/* ================= PHONE / EMAIL ================= */}

                <div
                    className="relative z-10 w-full flex flex-col gap-2 mt-10"
                    dir="rtl"
                >
                    <label className="font-normal">
                        شماره همراه / ایمیل:
                    </label>

                    <input
                        type="text"
                        className="
                            w-full
                            
                            h-[48px]
                            bg-[#D0E4FF]
                            border
                            border-[#289DFC]
                            outline-none
                            hover:border-[#289DFC]
                            rounded-2xl
                            px-4
                        "
                    />
                </div>

                {/* ================= GENDER ================= */}

                <div
                    className="relative z-10 w-full flex flex-col gap-1 mt-10"
                    dir="rtl"
                >
                    <label className="font-normal">
                        جنسیت:
                    </label>

                    <div className="relative w-full ">
                        <select
                            defaultValue=""
                            className="
                                w-full
                                h-[48px]
                                border
                                border-[#009ECA]
                                rounded-2xl
                                mt-2
                                text-sm
                                px-4
                                appearance-none
                                outline-none
                                hover:border-[#009ECA]
                                bg-[#D0E4FF]
                            "
                        >
                            <option value="" disabled>
                                انتخاب کنید
                            </option>

                            <option value="male">
                                مرد
                            </option>

                            <option value="female">
                                زن
                            </option>
                        </select>

                        <GoChevronDown
                            className="
                                w-[20px]
                                h-[20px]
                                mt-3
                                absolute
                                left-4
                                top-[21px]
                                -translate-y-1/2
                                text-[#0063FF]
                                pointer-events-none
                            "
                        />
                    </div>
                </div>

                {/* ================= PASSWORD ================= */}

                <div
                    className="relative z-10 w-full flex flex-col gap-2 mt-10"
                    dir="rtl"
                >
                    <div className="flex">
                        <label className="font-normal">
                            کلمه عبور:
                        </label>

                        <span className="text-[#D40000] mr-1">
                            *
                        </span>
                    </div>

                    <input
                        type="password"
                        className="
                            w-full
                        
                            h-[48px]
                            bg-[#D0E4FF]
                            border
                            border-[#289DFC]
                            outline-none
                            hover:border-[#289DFC]
                            rounded-2xl
                            px-4
                        "
                    />
                </div>

                {/* ================= REPEAT PASSWORD ================= */}

                <div
                    className="relative z-10 w-full flex flex-col gap-2 mt-10"
                    dir="rtl"
                >
                    <div className="flex">
                        <label className="font-normal">
                            تکرار کلمه عبور:
                        </label>

                        <span className="text-[#D40000] mr-1">
                            *
                        </span>
                    </div>

                    <input
                        type="password"
                        className="
                            w-full
                            
                            h-[48px]
                            bg-[#D0E4FF]
                            border
                            border-[#289DFC]
                            outline-none
                            hover:border-[#289DFC]
                            rounded-2xl
                            px-4
                        "
                    />
                </div>

                {/* ================= BUTTON ================= */}

                <button
                    className="
                        relative
                        z-10
                        w-full
                        
                        h-[48px]
                        mt-10
                        bg-[#289DFC]
                        border
                        border-[#289DFC]
                        outline-none
                        hover:border-[#289DFC]
                        rounded-2xl
                        text-white
                        text-xl
                        font-bold
                    "
                >
                    تایید
                </button>

            </div>
        </div>
    );
}

export default RegisterPage;