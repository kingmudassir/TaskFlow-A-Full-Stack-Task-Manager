import AboutUs from "./Components/About/About"
import ContactUs from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import Navbar from "./Components/Header/Navbar"
import Home from "./Components/Home/Home"
import Signup from "./Pages/Signup"
import config from "./config/config"
import Landing from "./Pages/Landing"
import { Routes, Route } from "react-router-dom";


function App() {
  console.log(config.appwrite_table_id)
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  )
}

export default App