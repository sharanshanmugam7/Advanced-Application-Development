import { Addons, AddonsA, Dash, DashA, Header, Home, HomeA, Login, LoginA, 
  Postpaid, PostpaidA, Prepaid, PrepaidA, Register, } from "./components"
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
        <Route path="/admin-login" element ={<LoginA/>}/>
        <Route path="/home" element ={<HomeA/>}/>
        <Route path="/add-admin" element ={<AddonsA/>}/>
        <Route path="/register" element ={<Register/>}/>
        <Route path="/postpaid-admin" element ={<PostpaidA/>}/>
        <Route path="/prepaid-admin" element ={<PrepaidA/>}/>
        <Route path="/dashboard" element ={<Dash/>}/>
        <Route path="/dashboard-admin" element ={<DashA/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
