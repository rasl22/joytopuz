import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { IoBedOutline } from "react-icons/io5";
import { SiHomeassistant } from "react-icons/si";

const Dacha = () => {
  return (
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
  );
};

export default Dacha;
