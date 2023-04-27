import React, { useState } from "react";
import moment from "moment";

const ChatForm = () => {
  const [dateExtrance, setDateExtrance] = useState("");
  const [dateUntil, setDateUntil] = useState("");

  // const newDate = moment(new Date()).format("YYYY-MM-DD");
  // setDateExtrance(newDate);
  // console.log(newDate);

  return (
    <div className="fixed z-[100] top-[50%] right-10 p-8 border border-primary bg-lightWhite">
      <form>
        <div>
          <input type="text" className="border hover:border-primary rounded-md border-lightGrey outline-none" />
        </div>
        <div>
          <input
            type="date"
            id="start"
            value={dateExtrance}
            onChange={(e) => setDateExtrance(e.target.value)}
            placeholder="Extrance"
            min="2023-01-01"
            max="2025-12-31"
            className="rounded-md"
          />
          <input
            type="date"
            id="finish"
            value={dateUntil}
            onChange={(e) => setDateUntil(e.target.value)}
            min="2023-01-02"
            max="2025-12-31"
            className="rounded-md"

          />
        </div>
      </form>
    </div>
  );
};

export default ChatForm;
