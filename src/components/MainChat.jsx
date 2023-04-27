import { useState } from "react";
import { TbBrandWechat } from "react-icons/tb";
import ChatForm from "./ChatForm";

const MainChat = () => {
  const [toggleChat, setToggleChat] = useState(false);
  console.log(toggleChat);
  return (
    <>
      <div className="fixed right-10 bottom-10 cursor-pointer z-[99]">
        <div
          className="w-20 h-20 rounded-[50%] bg-[#61BD4F] flex items-center justify-center"
          onClick={() => setToggleChat((prev) => !prev)}>
          <TbBrandWechat size={40} color="#fff" />
        </div>
      </div>
      <div>{toggleChat && <ChatForm />}</div>
    </>
  );
};

export default MainChat;
