import { MdOutlinePhotoCamera } from "react-icons/md";
import { GoPencil } from "react-icons/go";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { FiSettings } from "react-icons/fi";
import { IoAlertCircleSharp } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { IoCheckmarkSharp } from "react-icons/io5";


function TicketsPag() {
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

      </div>
      <div className="w-[1500px] h-[600px] bg-[#EFEFEF] mx-auto mt-7 rounded-4xl">
        <h1 className="!font-bold text-2xl flex justify-center pt-3">مدیریت تیکت‌ها</h1>
        <div className=" w-[1400px] h-[73px] mx-auto bg-[#289DFC] border-[#289DFC] rounded-4xl  mt-5">
          <div className="flex justify-between p-5">
            <p className="!font-semibold text-lg">وضعیت</p>
            <p className="!font-semibold text-lg">خلاصه</p>
            <p className="!font-semibold text-lg">تاریخ</p>
            <p className="!font-semibold text-lg">عنوان</p>
          </div>
          <div className="w-[1400px] h-[418px] bg-[#289DFC70] rounded-4xl mt-5 mx-auto flex items-center justify-center">
            <div className="w-[1380px] h-[380px] bg-[#F2F2F2] rounded-4xl">
              <div className="w-[1340px] h-[55px] bg-[#A6CBFF] rounded-4xl m-6 mt-10 flex items-center justify-between px-10">
                <div className="flex items-center gap-5">
                  <IoAlertCircleSharp className="w-[25px] h-[25px] text-[#0F67FE]" />

                  <span className="text-xl">|</span>

                  <IoCheckmarkSharp className="w-[25px] h-[25px] text-[#0F67FE]" />
                </div>

                <div className="flex items-center gap-15">
                  <p className="!font-normal text-lg ]">
                    عنوان
                  </p>

                  <p className="!font-normal text-lg ]">
                    تاریخ
                  </p>

                  <p className="!font-normal text-lg ">
                    خلاصه
                  </p>
                </div>
              </div>

              <div className="w-[1340px] h-[55px] bg-[#A6CBFF] rounded-4xl m-6 mt-10 flex items-center justify-between px-10">
                <div className="flex items-center gap-5">
                  <IoAlertCircleSharp className="w-[25px] h-[25px] text-[#0F67FE]" />

                  <span className="text-xl">|</span>

                  <IoCloseSharp className="w-[30px] h-[30px] text-[#FF0000BD]" />
                </div>

                <div className="flex items-center gap-15">
                  <p className="!font-normal text-lg ]">
                    عنوان
                  </p>

                  <p className="!font-normal text-lg ]">
                    تاریخ
                  </p>

                  <p className="!font-normal text-lg ">
                    خلاصه
                  </p>
                </div>
              </div>
              <div className="w-[1340px] h-[55px] bg-[#A6CBFF] rounded-4xl m-6 mt-10 flex items-center justify-between px-10">
                <div className="flex items-center gap-5">
                  <IoAlertCircleSharp className="w-[25px] h-[25px] text-[#0F67FE]" />

                  <span className="text-xl">|</span>

                  <IoCheckmarkSharp className="w-[25px] h-[25px] text-[#0F67FE]" />
                </div>

                <div className="flex items-center gap-15">
                  <p className="!font-normal text-lg ]">
                    عنوان
                  </p>

                  <p className="!font-normal text-lg ]">
                    تاریخ
                  </p>

                  <p className="!font-normal text-lg ">
                    خلاصه
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TicketsPag