import { useState } from "react";
import { TbBrandWechat } from "react-icons/tb";
import ChatForm from "./ChatForm";
import { IoMdClose } from "react-icons/io";

const MainChat = () => {
  const [toggleChat, setToggleChat] = useState(false);
  return (
    <>
      <div className="fixed right-10 bottom-10 cursor-pointer z-[99]">
        <div
          className="w-20 h-20 rounded-[50%] bg-[#61BD4F] flex items-center justify-center"
          onClick={() => setToggleChat((prev) => !prev)}>
          <TbBrandWechat size={40} color="#fff" />
        </div>
      </div>
      {toggleChat && <ChatForm />}
      {toggleChat && (
        <div className="fixed right-[23%] bottom-[48%] border-[2px] border-primary bg-lightWhite w-10 h-10 rounded-[50%] flex items-center justify-center z-[100] hover:bg-darkerWhite">
          <IoMdClose
            size={30}
            color="grey"
            onClick={() => setToggleChat((prev) => !prev)}
            className="cursor-pointer"
          />
        </div>
      )}
    </>
  );
};

export default MainChat;
