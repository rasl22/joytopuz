// import { Axios } from "axios";/
import axios from "./api";

const AuthService = {
  async resendCode(phoneNumber) {
    const response = await axios.post("/auth/register/resend", phoneNumber);
    return response;
  },

  async confirmNumberCode(phoneCode) {
    const response = await axios.post("/auth/verification-sms", phoneCode);
    return response;
  },

  async userRegister(user) {
    const response = await axios.post("/auth/register", user);
    return response;
  },

  async userLogin(user) {
    const response = await axios.post("/auth/authenticate", user);
    return response;
  },

  // async getUser(user) {
  //   const response = await axios.get("/auth/authenticate", user);
  //   return response;
  // },
};

export default AuthService;
