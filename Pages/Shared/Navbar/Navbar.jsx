import { Link, NavLink } from "react-router-dom";
import ButtonOrange from "../ButtonOrange/ButtonOrange";

const Navbar = () => {
  const navMenu = (
    <>
      <li className="hover:text-orange">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-orange" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="hover:text-orange">
        <NavLink
          to="/services"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-orange" : ""
          }
        >
          Services
        </NavLink>
      </li>
      {/* Dashboard */}
      <li>
        <details>
          <summary className="hover:text-orange">Dashboard</summary>
          <ul className="p-2 border-2 w-full">
            <li className="hover:text-orange text-sm">
              <NavLink
                to="/add-service"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-orange" : ""
                }
              >
                Add Service
              </NavLink>
            </li>
            <li className="hover:text-orange text-sm">
              <NavLink
                to="/manage-service"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-orange" : ""
                }
              >
                Manage Service
              </NavLink>
            </li>
            <li className="hover:text-orange text-sm">
              <NavLink
                to="/booked-service"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-orange" : ""
                }
              >
                Booked-Services
              </NavLink>
            </li>
            <li className="hover:text-orange text-sm">
              <NavLink
                to="/service-to-do"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-orange" : ""
                }
              >
                Service-To-Do
              </NavLink>
            </li>
          </ul>
        </details>
      </li>
    </>
  );
  return (
    <nav className="navbar bg-base-100 max-w-7xl mx-auto py-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navMenu}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-3xl">
          Smart<span className="text-orange">Fix</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg font-medium">
          {navMenu}
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/login">
          <ButtonOrange>Login</ButtonOrange>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
