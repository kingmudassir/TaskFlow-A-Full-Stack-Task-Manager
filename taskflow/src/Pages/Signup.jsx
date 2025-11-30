import Footer from "../Components/Footer/Footer"
import Navbar from "../Components/Header/Navbar"
import SignupComponent from "../Components/Signup/Signup"

function Signup() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <SignupComponent />
      </main>
      <Footer />
    </div>
  )
}

export default Signup