import Header from "../components/layout/user/Header";
import MenuBar from "../components/layout/user/MenuBar";

function UserLayout({ children }) {
  return (
    <main className="min-h-screen max-w-[600px] m-auto">

      <Header />

      <div>
        {children}
      </div>

      <MenuBar />

    </main>
  );
}

export default UserLayout;