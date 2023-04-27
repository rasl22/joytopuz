import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { removeItem } from "../helpers/helpersStorage";
import { logutUser } from "../slice/auth";
import ModalCategory from "./ModalCategory";

const Navbar = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [toggleBtn, setToggleBtn] = useState(false);

  const logoutUser = () => {
    dispatch(logutUser());
    removeItem("user");
    navigate("/login");
  };
  return (
    <>
      <div className="fixed top-0 w-full z-[999] opacity-1 bg-[#fff]">
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
                  onClick={() => setToggleBtn((prev) => !prev)}
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
      {toggleBtn && (
        <>
          <div className="fixed z-[99] w-full h-full backdrop-blur-md ">
            <div className="fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
              <div className="w-[440px] h-[50vh] border">
                <span onClick={() => setToggleBtn((prev) => !prev)}>X</span>
                <h1>What do yo want to add?</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati quaerat alias itaque accusantium cumque tenetur sunt
                  iste? Est alias perferendis odit veniam ipsum, illo id, in
                  fuga consectetur, sequi saepe amet tempora porro voluptate
                  sapiente commodi minus dolorum consequatur iur{" "}
                </p>
              </div>
              <div className="grid grid-cols-2"></div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
