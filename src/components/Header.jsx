import { NavLink } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import { useAuthContext } from "../hooks/useAuthContext";

const Header = () => {
  const { user } = useAuthContext();
  return (
    <header className="  bg-header-img  bg-bottom bg-cover">
      <div className=" flex justify-between py-6 items-center text-white font-nokia-bold w-[80%] mx-auto">
        <div className="flex justify-center items-center space-x-3 cursor-pointer ">
          <img src="src/assets/ezra-logo.svg" alt="" />
          <h3>
            <strong className="text-2xl">Ezra</strong> Seminary
          </h3>
        </div>
        <nav>
          <ul className="font-Lato-Regular tracking-wide hidden md:flex space-x-4 cursor-pointer text-sm justify-center items-center">
            <li className="hover:text-accent-4">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="hover:text-accent-4">
              <NavLink to="/courses">Courses</NavLink>
            </li>
            <li className="hover:text-accent-4">
              <NavLink to="/sabbathSchool">Sabbath School</NavLink>
            </li>
            <li className="hover:text-accent-4">
              <NavLink to="/devotion">Devotion</NavLink>
            </li>
            <li className="hover:text-accent-4">
              <NavLink to="/aboutUs">About Us</NavLink>
            </li>
            <li className="hover:text-accent-4">
              <NavLink to="/contactUs">Contact Us</NavLink>
            </li>
            {user ? (
              <LogoutButton />
            ) : (
              <li className="hover:text-gray-400">
                <NavLink to="/logIn">Log In</NavLink>
              </li>
            )}
            <li className="hover:text-gray-400 text-base ">
              <NavLink to="/createAccount">
                <button type="button" className="font-nokia-bold bg-accent-6 rounded-full py-2 px-5 hover:bg-accent-7 text-white transition-colors">Create Account</button>
                </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
