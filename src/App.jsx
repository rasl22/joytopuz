import { Route, Routes, useParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUserSuccess } from "./slice/auth";
import MainChat from "./components/MainChat";
import Profile from "./pages/Profile";
import {
  Dachas,
  Apartments,
  Extreams,
  Hotels,
  Resorts,
  Tours,
} from "./category";
import AddPoint from "./pages/AddPoint";

function App() {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const userData = JSON.parse(window.localStorage.getItem("user"));

  const getUser = async () => {
    try {
      if (userData !== null && userData !== undefined) {
        dispatch(signUserSuccess(userData));
      }
    } catch (error) {
      console.log("Error getting user");
    }
  };
  useEffect(() => {
    if (userData !== null && userData !== undefined) {
      getUser();
    }
  }, []);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/villas" element={<Dachas />} />
        <Route path="/apartment" element={<Apartments />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/resorts" element={<Resorts />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/extreme" element={<Extreams />} />
        <Route path="/add/:categoryId" element={<AddPoint />} />
      </Routes>
      <MainChat />
    </div>
  );
}

export default App;
