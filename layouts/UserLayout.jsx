import Header from "../components/layout/user/Header"
import MenuBar from "../components/layout/user/MenuBar"

function UserLayout({children}) {
  return ( 
     <main>
      <Header/>
      {children}
      <MenuBar/>
    </main>
  )
}

export default UserLayout