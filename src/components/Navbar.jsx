import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { removeItem } from "../helpers/helpersStorage";
import { logutUser } from "../slice/auth";
import { homeCategories } from "../service/homeCategory";
import { IoMdClose } from "react-icons/io";
import { getItem } from "../helpers/helpersStorage";

const Navbar = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [toggleBtn, setToggleBtn] = useState(false);
  const response = JSON.parse(getItem("user"));

  const logoutUser = () => {
    dispatch(logutUser());
    removeItem("user");
    navigate("/login");
  };
  return (
    <>
      <div className="fixed top-0 w-full z-[999] opacity-1 bg-[#fff]">
        <div className="shadow-[0_5px_50px_rgba(0,0,0,0.09)] ">
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
                <span className="relative tracking-[1px]">
                  {response !== null && response.name}
                  <h6 className="after:content-[''] after:absolute hover:text-primary  bg-primary h-[2px] w-full"></h6>
                </span>
                <NavLink
                  onClick={() => setToggleBtn((prev) => !prev)}
                  className="text-[14px] outline-none font-bold px-[15px] py-[5px] rounded-[6px] bg-backBtn hover:bg-[#ff9668] text-[#ffeacb] ">
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
        <div className="fixed z-[99999] w-full h-[100%] backdrop-blur-md">
          <div className="fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 shadow-[0_0_25px_15px_#888888] rounded-[10px] ">
            <div className="bg-lightWhite rounded-lg px-[25px] h-[478px]">
              <div className="flex justify-end pt-4 ">
                <IoMdClose
                  size={30}
                  color="grey"
                  onClick={() => setToggleBtn((prev) => !prev)}
                  className="cursor-pointer"
                />
              </div>
              <h1 className="mb-8 text-[20px] text-lightGrey">
                What do yo want to add?
              </h1>
              <div className="h-[50vh] grid justify-items-center gap-4 grid-cols-2">
                {homeCategories.map((category) => (
                  <Link
                    className={`${category.bg} cursor-pointer hover:scale-110 ease-in duration-300 w-[186px] h-[100px] flex justify-center items-center rounded-lg`}
                    key={category.id}>
                    <div className="flex flex-col items-center">
                      <img
                        src={category.icon}
                        alt="img"
                        className="w-[50px] h-[50px]"
                      />
                      <h6 className="text-lightWhite">{category.nameUz}</h6>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
