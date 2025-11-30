import { NavLink, Link, useLocation } from "react-router-dom";
import Logo from "../Logo/Logo";

function Navbar() {
  const { pathname } = useLocation();

  const isLoginPage = pathname === "/login";
  const isSignupPage = pathname === "/signup";
  const isAuthPage = isLoginPage || isSignupPage;

  const items_in_mid_navbar = [
    { name: "Home", href: "/#home" },
    { name: "About Us", href: "/#about" },
    { name: "Contact Us", href: "/#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-linear-to-r from-teal-400 to-cyan-400 shadow-lg select-none">
      
      <NavLink to="/" className="px-2 py-2">
        <Logo />
      </NavLink>

      {!isAuthPage && (
        <ul className="flex space-x-12 text-lg font-semibold text-white">
          {items_in_mid_navbar.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="relative cursor-pointer transition-all hover:scale-110 hover:text-yellow-200"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}

      <ul className="flex space-x-8 text-lg font-semibold text-white">

        {!isLoginPage && (
          <li>
            <Link
              to="/login"
              className="cursor-pointer transition-all duration-300 hover:scale-110 hover:text-yellow-200"
            >
              Login
            </Link>
          </li>
        )}

        {!isSignupPage && (
          <li>
            <Link
              to="/signup"
              className="cursor-pointer transition-all duration-300 hover:scale-110 hover:text-yellow-200"
            >
              Signup
            </Link>
          </li>
        )}

      </ul>
    </nav>
  );
}

export default Navbar;