import { useParams } from "react-router-dom";
import { homeCategories } from "../service/homeCategory";
import { Select } from "../ui";
import { useState } from "react";
import { MdLocationPin } from "react-icons/md";

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
              for="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  ariaHidden="true"
                  className="w-10 h-10 mb-3 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
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
            <h1 className="">Add video</h1>
            <div className="rounded-md border border-secondGrey text-lightBlack  h-11 flex">
              <span className="bg-secondGrey flex items-center text-[14px] px-[8px] py-[12px] w-[16%]">
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
                  id="yes"
                  name="yes"
                  value="true"
                  className="mr-1 "
                />
                 
                <label for="javascript" className="text-lightGrey">
                  Yes
                </label>
                <input
                  type="radio"
                  id="no"
                  name="no"
                  value="false"
                  className="ml-4 mr-1"
                />
                 
                <label for="no" className="text-lightGrey">
                  No
                </label>
              </div>
              <div>
                <h1 className="text-lightGrey">Alcohol availible</h1>
                <input
                  type="radio"
                  id="yes"
                  name="yes"
                  value="true"
                  className="mr-1 mt-2 "
                />
                 
                <label for="javascript" className="text-lightGrey">
                  Yes
                </label>
                <input
                  type="radio"
                  id="no"
                  name="no"
                  value="false"
                  className="ml-4 mr-1 mt-2"
                />
                 
                <label for="no" className="text-lightGrey">
                  No
                </label>
              </div>
              <div className="my-11">
                <h1 className="text-lightGrey">Pet availible</h1>
                <input
                  type="radio"
                  id="yes"
                  name="yes"
                  value="true"
                  className="mr-1 mt-2"
                />
                 
                <label for="javascript" className="text-lightGrey">
                  Yes
                </label>
                <input
                  type="radio"
                  id="no"
                  name="no"
                  value="false"
                  className="ml-4 mr-1"
                />
                 
                <label for="no" className="text-lightGrey">
                  No
                </label>
              </div>
              <div className="my-11">
                <h1 className="text-lightGrey">Availible only family</h1>
                <input
                  type="radio"
                  id="yes"
                  name="yes"
                  value="true"
                  className="mr-1 mt-2"
                />
                 
                <label for="javascript" className="text-lightGrey">
                  Yes
                </label>
                <input
                  type="radio"
                  id="no"
                  name="no"
                  value="false"
                  className="ml-4 mr-1"
                />
                 
                <label for="no" className="text-lightGrey">
                  No
                </label>
              </div>
              <div className="my-11">
                <h1 className="text-lightGrey">Loudy music availible</h1>
                <input
                  type="radio"
                  id="yes"
                  name="yes"
                  value="true"
                  className="mr-1 mt-2"
                />
                 
                <label for="javascript" className="text-lightGrey">
                  Yes
                </label>
                <input
                  type="radio"
                  id="no"
                  name="no"
                  value="false"
                  className="ml-4 mr-1"
                />
                 
                <label for="no" className="text-lightGrey">
                  No
                </label>
              </div>
              <div className="my-11">
                <h1 className="text-lightGrey">Party availible</h1>
                <input
                  type="radio"
                  id="yes"
                  name="yes"
                  value="true"
                  className="mr-1 mt-2"
                />
                 
                <label for="javascript" className="text-lightGrey">
                  Yes
                </label>
                <input
                  type="radio"
                  id="no"
                  name="no"
                  value="false"
                  className="ml-4 mr-1"
                />
                 
                <label for="no" className="text-lightGrey">
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
