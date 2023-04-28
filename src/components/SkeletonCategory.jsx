import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { IoBedOutline } from "react-icons/io5";
import { SiHomeassistant } from "react-icons/si";
import { homeCategories } from "../service/homeCategory";
import { Link } from "react-router-dom";

const SkeletonCategory = ({ props }) => {
  return (
    <div className="mt-[146px]">
      <div className="flex">
        {homeCategories.map((category) => (
          <Link
            className={`${category.bg} cursor-pointer hover:scale-110 ease-in duration-300 w-[228px] h-[130px] flex justify-center items-center`}
            key={category.id}
            to={`/${category.id}`}
            id={category.id}>
            <div className="flex flex-col items-center">
              <img src={category.icon} alt="img" className="w-[50px] h-full" />
              <h6 className="text-lightWhite">{category.nameUz}</h6>
            </div>
          </Link>
        ))}
      </div>
      <div className="w-[285px] h-[480px]">
        <div className="">
          <img
            src="http://178.218.207.96:8081/api/v1/attach/open/60c42f83-5f66-4cab-87de-43131e0ea6bf"
            alt="img"
          />
          <p>Sale</p>
          <p className="text-center">88</p>
          <p>Name: 123</p>
          <p>Sale price: 50000-UZS</p>
          <p>
            <SlLocationPin />
          </p>
          <div>
            <div>
              <IoBedOutline /> 4
            </div>
            <div>
              <IoBedOutline /> 1
            </div>
          </div>
          <div>
            <SiHomeassistant /> 10
            <p>2023-06-15</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCategory;
