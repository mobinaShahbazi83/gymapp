import HeaderGym from "../components/layout/gym/Header";
import Sidebar from "../components/layout/gym/Sidebar";

function GymLayout({ children }) {
  return (
    <div className="w-full min-h-screen flex">

      {/* MAIN - سمت چپ */}
      <div className="w-[calc(100%-235px)] min-h-screen">

        {/* HEADER */}
        <div className="w-full">
          <HeaderGym />
        </div>

        {/* CHILDREN */}
        <main className="w-full">
          {children}
        </main>

      </div>

      {/* SIDEBAR - سمت راست */}
      <div className="w-[235px] min-h-screen">
        <Sidebar />
      </div>

    </div>
  );
}

export default GymLayout;