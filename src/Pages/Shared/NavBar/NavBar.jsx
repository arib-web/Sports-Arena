import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import Container from "../../../Components/Container/Container";
import { FaMoon, FaShoppingCart, FaSun } from "react-icons/fa";
import { AuthContext } from "../../../Provider/AuthProviders";
import useCart from "../../../hooks/useCart";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();

  const { theme, toggleTheme } = useContext(AuthContext);

  const themeClass = theme === "dark" ? "dark-theme" : "light-theme";

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  // c
  return (
    <div className={`bg-base-100 shadow-2xl home ${themeClass}`}>
      <Container>
        <div className="navbar flex justify-between items-center h-20">
          <div className="navbar-start">
            <div className="dropdown">
              <button
                tabIndex={0}
                className="btn btn-ghost lg:hidden"
                onClick={toggleMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </button>
              {/* Mobile Menu */}
              <ul
                tabIndex={0}
                className={`menu menu-compact dropdown-content mt-3 p-2 home ${themeClass} shadow bg-base-100 rounded-box w-52 z-10 ${
                  isMenuOpen ? "block" : "hidden"
                }`}
              >
                <li>
                  <Link onClick={closeMenu} to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link onClick={closeMenu} to="/instructors">
                    Instructors
                  </Link>
                </li>
                <li>
                  <Link onClick={closeMenu} to="/classes">
                    Classes
                  </Link>
                </li>
                {user?.email && (
                  <li>
                    <Link onClick={closeMenu} to="/dashboard/mycart">
                      <button className=" gap-2 flex items-center">
                        <FaShoppingCart></FaShoppingCart>
                        <div className="badge badge-secondary">
                          +{cart?.length || 0}
                        </div>
                      </button>
                    </Link>
                  </li>
                )}
              </ul>
            </div>
            <Link className="flex items-center mx-auto md:m-0" to="/">
              <span className="text-xl font-bold">Sports Arena</span>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            {/* Desktop Menu */}
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/instructors">Instructors</Link>
              </li>
              <li>
                <Link to="/classes">Classes</Link>
              </li>
              {user?.email && (
                <li>
                  <Link to="/dashboard/mycart">
                    Dashboard
                    <button className=" gap-2 flex items-center">
                      <FaShoppingCart></FaShoppingCart>
                      <div className="badge badge-secondary">
                        +{cart?.length || 0}
                      </div>
                    </button>
                  </Link>
                </li>
              )}
            </ul>
          </div>
          <div className="navbar-end">
            <button onClick={toggleTheme} className="mr-5"> {theme === "dark" ? <FaSun /> : <FaMoon />}</button>
            {user?.email ? (
              <div className="flex items-center">
                {user.photoURL && (
                  <img
                    className="w-10 h-10 rounded-full"
                    src={user.photoURL}
                    alt="User Profile"
                  />
                )}
                <button className="ml-2 btn" onClick={handleLogOut}>
                  Log out
                </button>
              </div>
            ) : (
              <Link to="/login">
                <button className="ml-2 btn">Login</button>
              </Link>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
