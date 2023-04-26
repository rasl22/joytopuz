import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../service/auth";
import Input from "../ui/input";
import ValidationError from "../components/ValidationError";
import Footer from "../components/Footer";
import { signUserFailure, signUserStart, signUserSuccess } from "../slice/auth";
import axios from "axios";

const Register = () => {
  const [firstname, setFirtsname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [toggle, setToggle] = useState(true);

  const user = {
    firstname: firstname,
    lastname: lastname,
    phone: phone,
    password: password,
  };

  const phoneCode = {
    phone: phone,
    code: code,
  };

  const phoneNumber = {
    phone: phone,
  };

  const resendVerificationCode = async () => {
    try {
      const resendCode = await AuthService.resendCode(phoneNumber);
      console.log("Sending verification code");
    } catch (error) {
      console.log("Error sending verification code");
    }
  };

  const confirmCode = async () => {
    // dispatch(signUserStart());
    const response = await AuthService.confirmNumberCode(phoneCode);
    console.log(response);
  };

  const registerHandler = async (e) => {
    e.preventDefault();

    if (user.firstname.length < 3 || user.lastname.length < 3) {
      alert("Plese enter name or surname than 3 characters");
    } else if (user.phone.length !== 12) {
      alert("Plese enter 12 characters (998)-XXX-XX-XX");
    } else if (user.password.length < 6) {
      alert("Please enter password more than 6 characters");
    } else {
      const response = await AuthService.userRegister(user);
      console.log(response.data);
      if (response.data.message === "Phone unique") {
        alert("This number has already been registered");
      } else {
        setToggle((prev) => !prev);
        console.log("Success toggle paged");
      }
    }
  };

  useEffect(() => {
    if (isLoggedIn) navigate("/");
  }, [isLoggedIn]);

  return (
    <>
      <div className="mt-24 flex justify-center items-center">
        <div>
          {!toggle ? (
            <>
              <form>
                <Input
                  label={"Введите код из SMS"}
                  state={code}
                  setState={setCode}
                  type={"text"}
                />
                <button
                  className="w-full bg-backBtn font-bold text-[#fff] text-4 h-[52px] rounded-[6px]"
                  type="button"
                  disabled={isLoggedIn}
                  onClick={confirmCode}>
                  {isLoggedIn ? "Loading..." : "Подвердить"}
                </button>
                <p className="text-center mt-4">Код отправлен на номер</p>

                <p className="text-center">+{phoneCode.phone}</p>

                <p
                  onClick={resendVerificationCode}
                  className="text-center mt-4 text-backBtn cursor-pointer">
                  Отправить занова
                </p>
                <p
                  onClick={()=>setToggle(prev=>!prev)}
                  className="text-center mt-2 cursor-pointer text-backBtn">
                  Другой номер
                </p>
              </form>
            </>
          ) : (
            <>
              <form>
                {/* <ValidationError /> */}
                <Input
                  label={"Name"}
                  state={firstname}
                  setState={setFirtsname}
                  type={"text"}
                />

                <Input
                  label={"Surname"}
                  state={lastname}
                  setState={setLastname}
                  type={"text"}
                />

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
                  onClick={registerHandler}>
                  {isLoggedIn ? "Loading..." : "Sign up"}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
