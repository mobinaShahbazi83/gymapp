import { GoListUnordered } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";


function HeaderGym() {
  return (
    <div className="flex flex-col items-center rounded-b-lg pb-5">
      <div className="w-[600px] h-[45px] flex">
        <div className="flex justify-between w-full">
          
          <div className="flex mt-4 gap-2">
            <GoListUnordered className="w-[35px] h-[35px] text-[#3B3B3B]" />
            <h1 className="!font-semibold text-2xl">فیتنو</h1>
          </div>

          <div className="flex mt-4 gap-2">
            <h2 className="!font-medium text-1xl mt-2">ورود و خروج</h2>
            <div className="w-[40px] h-[40px] rounded-4xl bg-[#50505033] pt-2 pr-2">
              <GoChevronLeft className="w-[25px] h-[22px]" />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default HeaderGym