import React from "react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import "./Navbar.css";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {})
      .catch((err) => console.log(err));
  };

  const navItems = (
    <>
      <li>
        <NavLink className="hover-underline-nav-link" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="hover-underline-nav-link" to="/about">
          About
        </NavLink>
      </li>
      <li>
        <NavLink className="hover-underline-nav-link" to="/services">
          Services
        </NavLink>
      </li>
      <li>
        <NavLink className="hover-underline-nav-link" to="/appointment">
          Appointment
        </NavLink>
      </li>

      {/* {user?.uid ? (
        <li>
          <button className="logout-button" onClick={handleSignOut}>
            Logout
          </button>
        </li>
      ) : (
        <li>
          <NavLink className="hover-underline-nav-link" to="/login">
            Login
          </NavLink>
        </li>
      )} */}
    </>
  );

  return (
    <div className="navbar bg-green-100 text-green-950 h-16">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-green-100 text-green-950 w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/" className="lg:ml-24 text-xl hover:cursor-pointer">
          Revive Well
        </Link>
      </div>
      <div className="navbar-center  hidden lg:flex">
        <ul className="menu-horizontal space-x-4 px-1">{navItems}</ul>
      </div>
      <div className="navbar-end  lg:flex space-x-4 mr-4">
        {/* Avatar shows only when logged in */}

        {user?.uid && (
          <span className="border-2 p-2 rounded truncate border-emerald-500">
            {user?.email}
          </span>
        )}
        {/* Logout button shows only when user logged in */}
        {user?.uid ? (
          <button className="logout-button" onClick={handleSignOut}>
            Logout
          </button>
        ) : (
          <NavLink className="hover-underline-nav-link" to="/login">
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
