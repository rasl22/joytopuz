import { useParams } from "react-router-dom";
import { homeCategories } from "../service/homeCategory";
import { Select } from "../ui";
import { useState } from "react";
import { MdLocationPin } from "react-icons/md";
import { FcAddImage } from "react-icons/fc";

const AddPoint = () => {
  const { categoryId } = useParams();
  const [region, setRegion] = useState("Tashkent");
  const [street, setStreet] = useState("Darkhan");

  let newObj = null;

  homeCategories.map((item) => {
    if (item.id === categoryId) {
      return (newObj = item);
    }
  });
  console.log(newObj);

  return (
    <div className="container pt-[135px]">
      <h1 className="text-lightBlack text-[32px] font-bold ">
        Post an ad: {newObj.nameUz}
      </h1>
      <div>
        <div className="pt-5 grid grid-cols-2 gap-x-8">
          <div className="flex items-center justify-center">
            <label
              for="upload-file"
              className="h-[303px] px-3 py-2 w-full border border-dashed rounded-md hover:border-secondary hover:bg-secondGrey border-secondGrey cursor-pointer flex flex-wrap ">
              <div className="flex-[33%] flex-col self-center text-center">
                <FcAddImage size={160} />
                <button
                  type="button"
                  className="py-[5px] px-[10px] bg-primary text-lightPrimary text-[14px] rounded-md mt-4">
                  Upload photo
                </button>
              </div>
              <div className="flex-[66%] flex flex-col justify-center text-center">
                <p className="text-[12px]">
                  The number of photos should be more than 5
                </p>
                <p className="text-[12px] my-2">
                  The resolution of each photo should be at least 1080x762 px
                </p>
                <p className="text-[12px]">
                  Each photo should be less than 3Mb
                </p>
              </div>
              <input id="upload-file" type="file" className="hidden" />
            </label>
          </div>
          <div>
            <h1 className="text-2xl text-lightBlack">Price</h1>
            <div className="grid grid-cols-2 gap-x-8 pt-2">
              <div>
                <p className="text-lightGrey text-4">Starting price</p>
                <div className="flex justify-between items-center border hover:border-primary rounded-md border-secondGrey text-sm mt-1">
                  <input
                    type="text"
                    className="h-11 pl-2 rounded-md outline-none text-lightGrey text-[14px] focus:border-primary"
                    placeholder="Price"
                  />
                  <span className="pr-2">UZS</span>
                </div>
              </div>
              <div>
                <p>Starting on sale (optional)</p>
                <div className="flex justify-between items-center border hover:border-primary rounded-md border-secondGrey text-sm mt-1">
                  <input
                    type="text"
                    className="h-11 pl-2 outline-none text-lightGrey  px-[11px] py-[7px] rounded-md focus:border-primary"
                    placeholder="Price"
                  />
                  <span className="pr-2">UZS</span>
                </div>
              </div>
            </div>
            <h1 className="text-2xl text-lightBlack mt-4">Price</h1>
            <div className="grid grid-cols-2 gap-x-8 pt-2">
              <div>
                <p className="text-lightGrey text-4">Region</p>
                <div className="flex justify-between items-center border hover:border-primary rounded-md border-secondGrey text-sm mt-1">
                  <div className="border-none  rounded-md text-[14px] text-lightGrey py-[7px] pl-[11px] w-full  flex items-center outline-none h-11">
                    <label htmlFor={region}></label>
                    <select
                      id={region}
                      name={region}
                      onChange={(e) => setRegion(e.target.value)}>
                      <option value={region}>{region}</option>
                      <option value={region}>{region}</option>
                    </select>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-lightGrey text-4">Region</p>
                <div className="flex justify-between items-center border hover:border-primary rounded-md border-secondGrey text-sm mt-1">
                  <div className="border-none  rounded-md text-[14px] text-lightGrey py-[7px] pl-[11px] w-full  flex items-center h-11">
                    <label htmlFor={region}></label>
                    <select
                      id={street}
                      name={street}
                      onChange={(e) => setRegion(e.target.value)}>
                      <option value={street}>{street}</option>
                      <option value={street}>{street}</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <button
              type="button"
              className="flex items-center mt-4 px-[16px] py-[10px] rounded-md text-lightWhite bg-primary">
              <MdLocationPin size={20} />
              Choose geolocation
            </button>
          </div>
          <div>
            <h1 className="mt-4 mb-1 text-lightGrey">Add video</h1>
            <div className="rounded-md border border-secondGrey text-lightBlack  h-11 flex">
              <span className="bg-secondGrey flex items-center text-[14px] px-[8px] py-[12px] w-[20%]">
                Video link
              </span>
              <input
                type="text"
                placeholder="youtube.com"
                className="pl-2 border-none w-full outline-none rounded-r-md"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 mt-8 gap-x-8">
          <div>
            <h1 className="text-2xl text-lightBlack font-semibold">
              Main information
            </h1>
            <div className=" gap-x-8 pt-2">
              <div>
                <p className="text-lightGrey text-4">Name</p>
                <div className="flex justify-between items-center border hover:border-primary rounded-md border-secondGrey text-sm mt-1 w-[268px]">
                  <input
                    type="text"
                    className="h-11 w-full pl-2 rounded-md outline-none text-lightGrey text-[14px] focus:border-primary"
                    placeholder="Name"
                  />
                </div>
              </div>
            </div>

            <h1 className="text-2xl text-lightBlack mt-4">Conveniences</h1>
            <div className="gap-x-8 pt-2">
              <div>
                <p className="text-lightGrey text-4">Select conveniences</p>
                <div className="flex justify-between items-center border hover:border-primary rounded-md border-secondGrey text-sm mt-1">
                  <div className="border-none  rounded-md text-[14px] text-lightGrey py-[7px] pl-[11px] w-full  flex items-center outline-none h-11">
                    <label htmlFor={region}></label>
                    <select
                      id={region}
                      name={region}
                      onChange={(e) => setRegion(e.target.value)}>
                      <option value={region}>{region}</option>
                      <option value={region}>{region}</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-2xl text-lightBlack font-semibold">Rules</h1>
            <div className="grid grid-cols-2 mt-2">
              <div>
                <h1 className="text-lightGrey">Smoking availible</h1>
                <input
                  type="radio"
                  id="smoking"
                  name="smoking"
                  value="true"
                  className="mr-1 "
                />
                 
                <label for="smoking" className="text-lightGrey">
                  Yes
                </label>
                <input
                  type="radio"
                  id="smoking"
                  name="smoking"
                  value="false"
                  className="ml-4 mr-1"
                />
                 
                <label for="smoking" className="text-lightGrey">
                  No
                </label>
              </div>
              <div>
                <h1 className="text-lightGrey">Alcohol availible</h1>
                <input
                  type="radio"
                  id="alcohol"
                  name="alcahol"
                  value="true"
                  className="mr-1 mt-2 "
                />
                 
                <label for="alcahol" className="text-lightGrey">
                  Yes
                </label>
                <input
                  type="radio"
                  id="alcahol"
                  name="alcahol"
                  value="false"
                  className="ml-4 mr-1 mt-2"
                />
                 
                <label for="alcahol" className="text-lightGrey">
                  No
                </label>
              </div>
              <div className="my-11">
                <h1 className="text-lightGrey">Pet availible</h1>
                <input
                  type="radio"
                  id="pet"
                  name="pet"
                  value="true"
                  className="mr-1 mt-2"
                />
                 
                <label for="pet" className="text-lightGrey">
                  Yes
                </label>
                <input
                  type="radio"
                  id="pet"
                  name="pet"
                  value="false"
                  className="ml-4 mr-1"
                />
                 
                <label for="pet" className="text-lightGrey">
                  No
                </label>
              </div>
              <div className="my-11">
                <h1 className="text-lightGrey">Availible only family</h1>
                <input
                  type="radio"
                  id="family"
                  name="family"
                  value="true"
                  className="mr-1 mt-2"
                />
                 
                <label for="family" className="text-lightGrey">
                  Yes
                </label>
                <input
                  type="radio"
                  id="family"
                  name="family"
                  value="false"
                  className="ml-4 mr-1"
                />
                 
                <label for="family" className="text-lightGrey">
                  No
                </label>
              </div>
              <div className="my-11">
                <h1 className="text-lightGrey">Loudy music availible</h1>
                <input
                  type="radio"
                  id="music"
                  name="music"
                  value="true"
                  className="mr-1 mt-2"
                />
                 
                <label for="music" className="text-lightGrey">
                  Yes
                </label>
                <input
                  type="radio"
                  id="music"
                  name="music"
                  value="false"
                  className="ml-4 mr-1"
                />
                 
                <label for="music" className="text-lightGrey">
                  No
                </label>
              </div>
              <div className="my-11">
                <h1 className="text-lightGrey">Party availible</h1>
                <input
                  type="radio"
                  id="party"
                  name="party"
                  value="true"
                  className="mr-1 mt-2"
                />
                 
                <label for="party" className="text-lightGrey">
                  Yes
                </label>
                <input
                  type="radio"
                  id="party"
                  name="party"
                  value="false"
                  className="ml-4 mr-1"
                />
                 
                <label for="party" className="text-lightGrey">
                  No
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPoint;
