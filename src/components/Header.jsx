import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import { useAuthContext } from "../hooks/useAuthContext";
import { FaRegUserCircle, FaBars, FaTimes } from "react-icons/fa";
import { useOnClickOutside } from "./useOnClickOutside";
import { Button } from "./ui/button";

const Header = () => {
  const { user } = useAuthContext();
  const [showAccountModal, setShowAccountModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleAccountClick = () => {
    setShowAccountModal((prev) => !prev);
  };

  const handleMenuClick = () => {
    setShowMenu((prev) => !prev);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  // To access the dom element || useRef is used to create a ref(reference) object
  const ref = useRef();

  // A logic that watches for clicks outside the dropdown panel to close it
  useOnClickOutside(ref, showAccountModal, () => setShowAccountModal(false));

  return (
    <header className="bg-header-img bg-bottom bg-cover relative">
      <div className=" flex justify-between py-6 items-center text-white font-nokia-bold w-[90%] md:w-[80%] mx-auto ">
        <div className="flex justify-center items-center space-x-3 cursor-pointer ">
          <img src="src/assets/ezra-logo.svg" alt="" />
          <h3>
            <strong className="text-2xl">Ezra</strong> Seminary
          </h3>
        </div>
        <nav>
          <div className="md:hidden">
            <button
              onClick={handleMenuClick}
              className="text-white focus:outline-none "
            >
              {showMenu ? (
                <FaTimes size={24} className="z-20 fixed top-[4%] left-[91%]" />
              ) : (
                <FaBars size={24} className=" fixed top-[4%] left-[91%]" />
              )}
            </button>
          </div>
          <ul
            className={`font-Lato-Regular justify-center items-end tracking-wide space-x-4 cursor-pointer  md:flex ${
              showMenu
                ? "flex flex-col text-2xl font-nokia-bold h-screen bg-secondary-6 overflow-auto bg-opacity-80  w-full z-10 top-0 left-0 bottom-0 transform -translate-x-100 transition-transform ease-in-out duration-200 pr-8 space-y-3 md:flex fixed"
                : "hidden text-sm md:flex justify-center items-center"
            }`}
          >
            <li className="hover:text-accent-6">
              <NavLink to="/" onClick={closeMenu}>
                Home
              </NavLink>
            </li>
            <li className="hover:text-accent-6">
              <NavLink to="/courses" onClick={closeMenu}>
                Courses
              </NavLink>
            </li>
            <li className="hover:text-accent-6">
              <NavLink to="/sabbathSchool" onClick={closeMenu}>
                Sabbath School
              </NavLink>
            </li>
            <li className="hover:text-accent-6">
              <NavLink to="/devotion" onClick={closeMenu}>
                Devotion
              </NavLink>
            </li>
            <li className="hover:text-accent-6">
              <NavLink to="/aboutUs" onClick={closeMenu}>
                About Us
              </NavLink>
            </li>
            <li className="hover:text-accent-6">
              <NavLink to="/contactUs" onClick={closeMenu}>
                Contact Us
              </NavLink>
            </li>
            {user ? (
              <li ref={ref} className="relative">
                <button
                  onClick={handleAccountClick}
                  className="bg-accent-6 rounded-full p-1 hover:bg-accent-7 text-base focus:outline-none flex"
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
                    <Button size="round">Create Account</Button>
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
