import { GoListUnordered } from "react-icons/go";
import { CiLogout } from "react-icons/ci";

function HeaderGym() {
  return (
    <div className="w-full px-6 py-4">
      <div className="w-full flex justify-between items-center">

        {/* سمت چپ Header */}
        <div className="w-[40px] h-[40px] rounded-full bg-[#50505033] flex items-center justify-center">
          < CiLogout className="w-[25px] h-[22px]" />
        </div>

        {/* سمت راست Header */}
        <div className="flex items-center gap-2">
          <h1 className="!font-semibold text-2xl">
            فیتنو
          </h1>

          <GoListUnordered className="w-[35px] h-[35px] text-[#3B3B3B]" />
        </div>

      </div>
    </div>
  );
}

export default HeaderGym;