import { NavLink } from "react-router-dom";
import "./Nav.scss";

function Nav() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink
            exact
            className="nav__link"
            activeClassName="nav__link--active"
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            exact
            className="nav__link"
            activeClassName="nav__link--active"
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            className="nav__link"
            activeClassName="nav__link--active"
            to="/about/me"
          >
            All About Me
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
