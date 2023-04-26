import React from "react";
import { MdOutlineVilla, MdVilla } from "react-icons/md";
import { Link } from "react-router-dom";
import HomeCard from "../components/HomeCard";

const Home = () => {
  return (
    <div className="container gap-8  grid xxs:grid-cols-1 xxs:px-0  justify-items-center sm:grid-cols-3 sm:px-0 pt-[145px] pb-10">
      <HomeCard />
    </div>
  );
};

export default Home;
