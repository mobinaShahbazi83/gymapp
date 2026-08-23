import { GoListUnordered } from "react-icons/go";
 import { GiGymBag } from "react-icons/gi";
 import { GoPersonFill } from "react-icons/go";
 import { HiMiniBriefcase } from "react-icons/hi2";

function Header() {
  return (
    <div className="w-full flex flex-col items-center bg-gray-50 rounded-b-lg pb-5">
      <div className="w-[600px] h-[45px]  flex ">
        <div className="flex gap-95 mr-7">
          <div  className="flex mt-4 gap-2">
            <GoListUnordered  className="w-[35px] h-[35px] text-[#3B3B3B] "/>
             <GiGymBag className="w-[35px] h-[35px] text-[#3B3B3B] "/>
          </div>
          <div className="flex mt-4 gap-2 ">
            <HiMiniBriefcase className="w-[35px] h-[35px] text-[#3B3B3B]" />
            <GoPersonFill className="w-[35px] h-[35px] text-[#3B3B3B] "/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header