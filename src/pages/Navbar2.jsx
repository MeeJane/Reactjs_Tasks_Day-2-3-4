import { NavLink } from "react-router-dom";
import "./Navbar2.css";

function Navbar2() {
  return (
    <nav className="nav2">
      <NavLink to="/" className="nav2-link">
        Home
      </NavLink>

      <NavLink to="/services2" className="nav2-link">
        Services
      </NavLink>

      <NavLink to="/contact2" className="nav2-link">
        Contact
      </NavLink>
    </nav>
  );
}

export default Navbar2;
