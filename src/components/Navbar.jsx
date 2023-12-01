import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();

  const handleclick = () => {
    logout();
    localStorage.removeItem("user");
    // window.location.reload();
  };

  return (
    <header className="nav-bar-header">
      <div className="container">
        <Link to="/">
          <h1>Ezra Seminary</h1>
        </Link>
        <nav className="nav-form">
          {user && (
            <div className="links">
              <span>Hello, {user && user.email}</span>
              <button className="logout" onClick={handleclick}>
                Logout
              </button>
            </div>
          )}
          {!user && (
            <div>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
