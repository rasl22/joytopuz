import React, { useState } from "react";
import moment from "moment";

const ChatForm = () => {
  const [dateExtrance, setDateExtrance] = useState("");
  const [dateUntil, setDateUntil] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("998");

  // const newDate = moment(new Date()).format("YYYY-MM-DD");
  // setDateExtrance(newDate);
  // console.log(newDate);
  const handlerChat = () => {
    console.log("Chat sended");
  };

  return (
    <div className="fixed z-[100] top-[47%] right-10 p-8 border-[2px] border-primary bg-lightWhite rounded-xl shadow-[-5px_0_50px_5px_#ffba9d]">
      <form onSubmit={handlerChat}>
        <div className="flex justify-between items-center border hover:border-primary rounded-md border-secondGrey text-sm ">
          <input
            type="text"
            className="outline-none text-lightGrey  px-[11px] py-[7px] rounded-md focus:border-primary"
            placeholder="Price"
          />
          <span className="pr-2">UZS</span>
        </div>
        <div className="flex gap-2 my-2">
          <div className="border hover:border-primary rounded-md border-secondGrey  px-[11px] py-[7px] text-sm">
            <input
              type="date"
              id="start"
              value={dateExtrance}
              onChange={(e) => setDateExtrance(e.target.value)}
              placeholder="Extrance"
              min="2023-01-01"
              max="2025-12-31"
              className="outline-none cursor-pointer"
            />
          </div>
          <div className="border focus:border-primary hover:border-primary rounded-md border-secondGrey  px-[11px] py-[7px] text-sm">
            <input
              type="date"
              id="finish"
              value={dateUntil}
              onChange={(e) => setDateUntil(e.target.value)}
              min="2023-01-02"
              max="2025-12-31"
              className="outline-none cursor-pointer"
              placeholder="Until"
            />
          </div>
        </div>
        <div>
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full text-lightGrey  bg-gray-50 rounded-lg border border-secondGrey text-sm focus:border-primary outline-none hover:border-primary"
            placeholder="Write your thoughts here..."></textarea>
        </div>
        <div className="my-4 border hover:border-primary rounded-md border-secondGrey  px-[11px] py-[7px] text-sm">
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="outline-none"
          />
        </div>
        <button
          className="w-full px-2 py-[11px] border-none outline-none bg-primary text-sm  rounded-md text-lightWhite"
          type="submit">
          Post advertisement
        </button>
      </form>
    </div>
  );
};

export default ChatForm;
