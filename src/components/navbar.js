import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link to="/">
        <img src="/Icon/logo.svg" />
      </Link>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link>
          <li>Details</li>
        </Link>
        <Link>
          <li>Watchlist</li>
        </Link>
      </ul>
    </div>
  );
};
export default Navbar;
