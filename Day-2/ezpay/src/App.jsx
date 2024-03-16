import { Footer, Header, Login, Register, } from "./components"
import { BrowserRouter,Routes , Route } from "react-router-dom"
import "./App.css"
const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/login" element ={<Login/>}/>
        <Route path="/register" element ={<Register/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
