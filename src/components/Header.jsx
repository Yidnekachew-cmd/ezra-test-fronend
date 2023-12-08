import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import { useAuthContext } from "../hooks/useAuthContext";
import { FaRegUserCircle } from "react-icons/fa";
import { useOnClickOutside } from "./useOnClickOutside";

const Header = () => {
  const { user } = useAuthContext();
  const [showAccountModal, setShowAccountModal] = useState(false);

  const handleAccountClick = () => {
    setShowAccountModal((prev) => !prev);
  };
  
  // To access the dom element || useRef is used to create a ref(reference) object
  const ref = useRef();

  // A logic that watches for clicks outside the dropdown panel to close it
  useOnClickOutside(ref, showAccountModal, () => setShowAccountModal(false));

  return (
    <header className="bg-header-img bg-bottom bg-cover backdrop-blur-md">
      <div className=" flex justify-between py-6 items-center text-white font-nokia-bold w-[90%] md:w-[80%] mx-auto">
        <div className="flex justify-center items-center space-x-3 cursor-pointer ">
          <img src="src/assets/ezra-logo.svg" alt="" />
          <h3>
            <strong className="text-2xl">Ezra</strong> Seminary
          </h3>
        </div>
        <nav>
          <ul className="font-Lato-Regular tracking-wide hidden md:flex space-x-4 cursor-pointer text-sm justify-center items-center">
            <li className="hover:text-accent-6">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="hover:text-accent-6">
              <NavLink to="/courses">Courses</NavLink>
            </li>
            <li className="hover:text-accent-6">
              <NavLink to="/sabbathSchool">Sabbath School</NavLink>
            </li>
            <li className="hover:text-accent-6">
              <NavLink to="/devotion">Devotion</NavLink>
            </li>
            <li className="hover:text-accent-6">
              <NavLink to="/aboutUs">About Us</NavLink>
            </li>
            <li className="hover:text-accent-6">
              <NavLink to="/contactUs">Contact Us</NavLink>
            </li>
            {user ? (
              <li ref={ref} className="relative">
                <button
                  onClick={handleAccountClick}
                  className="bg-accent-6 hover:bg-accent-7 text-base focus:outline-none flex"
                >
                  <FaRegUserCircle user={user} />
                </button>
                {showAccountModal && (
                  <div className="absolute top-[40px] right-0 bg-accent-6 shadow-lg rounded-md z-10">
                    <div className="px-4 py-2 border-b">
                      Logged in as: {user.email}
                    </div>
                    <div className="px-4 py-2 border-b">Role: {user.role}</div>
                    <div className="px-4 py-2 border-b">
                      <NavLink to="/profile">Profile Settings</NavLink>
                    </div>
                    <div className="px-4 py-2">
                      <LogoutButton />
                    </div>
                  </div>
                )}
              </li>
            ) : (
              <>
                <li className="hover:text-gray-400">
                  <NavLink to="/logIn">Log In</NavLink>
                </li>
                <li className="hover:text-gray-400 text-base ">
                  <NavLink to="/signup">
                    <button
                      type="button"
                      className="font-nokia-bold bg-accent-6 rounded-full py-2 px-5 hover:bg-accent-7 text-white transition-colors"
                    >
                      Create Account
                    </button>
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
