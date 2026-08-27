import HeaderGym from "../components/layout/gym/Header"


function GymLayout({children}) {
  return (
   <HeaderGym>
    {children}
   </HeaderGym>
  )
}

export default GymLayout