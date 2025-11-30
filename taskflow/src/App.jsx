import AboutUs from "./Components/About/About"
import ContactUs from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import Navbar from "./Components/Header/Navbar"
import Home from "./Components/Home/Home"
import Signup from "./Pages/Signup"
import config from "./config/config"
import Landing from "./Pages/Landing"
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login"


function App() {
  console.log(config.appwrite_table_id)
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App