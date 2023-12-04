import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="container  bg-header-img  bg-bottom bg-cover">
      <div className=" flex justify-between py-6 items-center text-white font-nokia-bold w-[80%] mx-auto">
        <div className=" cursor-pointer ">
          <h3>
            <strong className="text-2xl">Ezra</strong> Seminary
          </h3>
        </div>
        <nav>
          <ul className="hidden md:flex space-x-4 cursor-pointer text-sm justify-center items-center">
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
            <li className="hover:text-gray-400 text-base ">
              <NavLink to="/createAccount">
                <button type="button" className="bg-[#EA9215] rounded-full py-1 px-2">Create Account</button>
                </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
