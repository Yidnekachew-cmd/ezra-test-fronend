import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container flex justify-between mt-6 px-12 items-center">
        <div className=" cursor-pointer ">
          <h3>
            <strong className="text-2xl">Ezra</strong> Seminary
          </h3>
        </div>
        <nav>
          <ul className="hidden md:flex space-x-4 cursor-pointer">
            <li className="hover:text-gray-400">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="hover:text-gray-400">
              <NavLink to="/courses">Courses</NavLink>
            </li>
            <li className="hover:text-gray-400">
              <NavLink to="/sabbathSchool">Sabbath School</NavLink>
            </li>
            <li className="hover:text-gray-400">
              <NavLink to="/devotion">Devotion</NavLink>
            </li>
            <li className="hover:text-gray-400">
              <NavLink to="/aboutUs">About Us</NavLink>
            </li>
            <li className="hover:text-gray-400">
              <NavLink to="/contactUs">Contact Us</NavLink>
            </li>
            <li className="hover:text-gray-400">
              <NavLink to="/logIn">Log In</NavLink>
            </li>
            <li className="hover:text-gray-400">
              <NavLink to="/createAccount">Create Account</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
