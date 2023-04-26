import React, { useState } from "react";

const input = ({ label, state, setState, type = "text" }) => {
  const [value, setValue] = useState(state);
  return (
    <div className="mb-[8px] flex flex-col w-[300px]">
      <label
        htmlFor="floatingInput"
        className="mb-[5px]  text-[#575757] text-4 font-normal">
        {label}
      </label>
      <input
        type={type}
        className="w-full h-[50px] font-normal px-[11px] py-[7px] mb-6 text-[14px] text-[#575757] outline-[#575757] rounded-[6px] border-[1px] border-[#e5e5ea]"
        placeholder={label}
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
    </div>
  );
};

export default input;
