import { Addons, Header, Home, Login, Postpaid, Prepaid, Register, } from "./components"
import { BrowserRouter,Routes , Route } from "react-router-dom"
import "./App.css"
const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/login" element ={<Login/>}/>
        <Route path="/register" element ={<Register/>}/>
        <Route path="/postpaid" element ={<Postpaid/>}/>
        <Route path="/prepaid" element ={<Prepaid/>}/>
        <Route path="/add" element ={<Addons/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
