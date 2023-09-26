import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const Header = ({ location }) => {
  const menuLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="ml-12">
        <NavLink to="/donations">Donation</NavLink>
      </li>
      <li className="ml-12">
        <NavLink to="/statistics">Statistics</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="flex justify-center">
        <div
          className={`${
            location.pathname === "/" ? "fixed" : ""
          } py-10 navbar container px-8`}
        >
          <div className="navbar-start">
            <Link to="/">
              <img src="/Logo.png" alt="Donation Logo" />
            </Link>
          </div>
          <div className="navbar-end">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost md:hidden">
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
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {menuLinks}
              </ul>
            </div>
            <div className="hidden md:flex">
              <ul className="text-lg menu-horizontal text-[#0B0B0B] px-1">
                {menuLinks}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Header.propTypes = {
  location: PropTypes.object,
};
export default Header;
