import { TbBrandWechat } from "react-icons/tb";

const MainChat = () => {
  return (
    <div className="fixed right-10 bottom-10">
      <div className="w-20 h-20 rounded-[50%] bg-[#61BD4F] flex items-center justify-center">
        <TbBrandWechat size={40} color="#fff" />
      </div>
    </div>
  );
};

export default MainChat;
