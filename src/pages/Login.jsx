import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUserFailure, signUserStart, signUserSuccess } from "../slice/auth";
import AuthService from "../service/auth";
import Input from "../ui/input";
import ValidationError from "../components/ValidationError";
import Footer from "../components/Footer";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.auth);

  const loginHandler = async (e) => {
    e.preventDefault();
    dispatch(signUserStart());
    const user = { phone: phone, password: password };
    const response = await AuthService.userLogin(user);

    if (response === undefined || response === null) {
      alert(response.data.message);
    } else {
      if (response.data.isError === true) {
        alert(response.data.message);
      } else {
        dispatch(signUserSuccess(response.data.data));
        navigate("/");
      }
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);

  return (
    <>
      <div className="mt-24 flex justify-center items-center">
        <div className="">
          <form className="">
            <ValidationError />

            <Input
              label={"Enter your phone number"}
              state={phone}
              setState={setPhone}
              type={"tel"}
            />

            <Input
              label={"Password"}
              state={password}
              setState={setPassword}
              type={"password"}
            />

            <button
              className="w-full bg-backBtn font-bold text-[#fff] text-4 h-[52px] rounded-[6px]"
              type="submit"
              disabled={isLoggedIn}
              onClick={loginHandler}>
              {isLoggedIn ? "Loading..." : "Sign in"}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
