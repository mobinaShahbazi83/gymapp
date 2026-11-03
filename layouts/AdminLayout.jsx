import HeaderAdmin from "../components/layout/admin/Header"
import SidebarAdmin from "../components/layout/admin/Sidebar"


function AdminLayout( {children}) {
  return (
    <div className="w-full min-h-screen flex">

      {/* MAIN - سمت چپ */}
      <div className="w-[calc(100%-235px)] min-h-screen">

        {/* HEADER */}
        <div className="w-full">
          <HeaderAdmin />
        </div>

        {/* CHILDREN */}
        <main className="w-full">
          {children}
        </main>

      </div>

      {/* SIDEBAR - سمت راست */}
      <div className="w-[235px] min-h-screen">
        <SidebarAdmin />
      </div>

    </div>
  )
}

export default AdminLayout