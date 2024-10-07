import Nav from "../Nav/Nav"
import { Outlet } from "react-router-dom"
import Footer from "../Footer/Footer"

function App() {

  return (
    <>
      <Nav/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
