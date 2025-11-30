import Footer from "../Components/Footer/Footer"
import Navbar from "../Components/Header/Navbar"
import LoginComponent from "../Components/Login/Login"

function Login() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <LoginComponent />
      </main>
      <Footer />
    </div>
  )
}

export default Login