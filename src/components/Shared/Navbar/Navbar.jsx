import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo/logo.jpg";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import Avater from "./Avater";

const Navbar = () => {
  const { user, logOut, loading } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "LogOut successfull",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => console.log(error));
  };

  const NavOptions = (
    <>
      <li className="">
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "red" : "",
              textDecoration:isActive? "underline":"",
            };
          }}
          to="/"
          className="bg-transparent font-semibold hover:scale-125  hover:text-purple-400 hover:font-bold transition text-black"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
        to='/allinstructor'
        style={({ isActive }) => {
          return {
            color: isActive ? "red" : "",
            textDecoration:isActive? "underline":"",
          };
        }}
          className="bg-transparent  font-semibold hover:scale-125  hover:text-purple-500 hover:font-bold transition text-black"
        >
          Instructors
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "red" : "",
              textDecoration:isActive? "underline":"",
            };
          }}
          to="/allclass"
          className="bg-transparent font-semibold  hover:scale-125  hover:text-purple-600 hover:font-bold transition text-black"
        >
          Classes
        </NavLink>
      </li>

      {user && (
        <li>
          <NavLink
          to='/dashboard'
          style={({ isActive }) => {
            return {
              color: isActive ? "red" : "",
              textDecoration:isActive? "underline":"",
            };
          }}
            className="bg-transparent font-semibold  hover:scale-125  hover:text-purple-600 hover:font-bold transition text-black"
          >
            Dashboard
          </NavLink>
        </li>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar fixed  z-10    bg-white ">
        {loading && <h1>loading........</h1>}
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {NavOptions}
            </ul>
          </div>
          <Link to="/">
            <div className="ml-8 flex justify-center gap-1 group items-center">
              <img src={logo} className="w-14 h-12" alt="" />
              <h1 className=" group-hover:scale-110 text-2xl font-bold italic hidden md:block text-transparent bg-gradient-to-r from-purple-400 to-purple-800 bg-clip-text transition ">
                {" "}
                Dance Studio
              </h1>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{NavOptions}</ul>
        </div>
        <div className="navbar-end">
          <Avater></Avater>
          {user ? (
            <>
              <button
                onClick={handleLogOut}
                className="btn  ml-4 btn-sm btn-primary"
              >
                LogOut
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className=" ml-4 mr-10 bg-transparent  font-semibold  hover:scale-125  hover:text-purple-600 hover:font-bold transition text-black"
              >
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
