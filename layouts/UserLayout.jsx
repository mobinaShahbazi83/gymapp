import Header from "../components/layout/user/Header"

function UserLayout({children}) {
  return ( 
     <main>
      <Header/>
      {children}
    </main>
  )
}

export default UserLayout