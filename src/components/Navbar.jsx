import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { removeItem } from "../helpers/helpersStorage";
import { logutUser } from "../slice/auth";

const Navbar = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutUser = () => {
    dispatch(logutUser());
    removeItem("user");
    navigate("/login");
  };
  return (
    <div className=" fixed top-0 w-full z-[999] opacity-1 bg-[#fff]">
      <div className="shadow-[0_5px_50px_rgba(0,0,0,0.09)]">
        <div className="container">
          <div className="mb-[0px] py-[25px] xxs:px-4 flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <img
                src="http://joytop.mbs-edu.uz/static/media/logo.e6fa5e4a.svg"
                alt="logo"
                className="w-[125px] h-[35px]"
              />
            </Link>
            <div className="flex gap-4 items-center text-center">
              <NavLink
                to="/add-point"
                className="text-[14px] outline-none font-bold px-[15px] py-[5px] rounded-[6px] bg-backBtn hover:bg-[#ff9668] text-[#ffeacb]">
                Add Point
              </NavLink>

              {isLoggedIn ? (
                <>
                  <NavLink
                    className="text-[14px] border-[2px] border-[#ff7e47] rounded-[6px] px-[15px] py-[5px] text-[#ff7e47]"
                    onClick={logoutUser}
                    to="/login">
                    Sign out
                  </NavLink>
                  <NavLink
                    to="profile"
                    className="text-[14px] border-[2px] border-[#ff7e47] rounded-[6px] px-[15px] py-[5px] text-[#ff7e47]">
                    Profile
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink
                    to="login"
                    className="text-[14px] border-[2px] border-[#ff7e47] rounded-[6px] px-[15px] py-[5px] text-[#ff7e47]">
                    Sign in
                  </NavLink>
                  <NavLink
                    to="register"
                    className="text-[14px] border-[2px] border-[#ff7e47] rounded-[6px] px-[15px] py-[5px] text-[#ff7e47]">
                    Sign up
                  </NavLink>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
