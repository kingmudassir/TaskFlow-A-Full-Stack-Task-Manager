import AboutUs from "./Components/About/About"
import ContactUs from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import Navbar from "./Components/Header/Navbar"
import Home from "./Components/Home/Home"

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 bg-linear-to-r from-teal-400 to-cyan-400">
        <Home />
        <AboutUs />
        <ContactUs />
      </main>
      <Footer />
    </div>
  )
}

export default App