import { SiSourceengine } from "react-icons/si";
const Footer = () => {
  return (
    <div className="text-center w-full mt-12 bg-backBtn relative">
      <div className="flex justify-center">
        <img
          src="http://joytop.mbs-edu.uz/static/media/footerimg.bf623880.svg"
          alt="Logo"
          className="w-[215px] h-[200px]"
        />
      </div>
      <p className="font-bold text-[#fff] pb-4">JOYTOP.UZ © {new Date().getFullYear()}</p>
      <div className="w-20 flex items-center text-[#fff] absolute left-10 bottom-5">
        <SiSourceengine size={30} color="#fff" />
        dev
      </div>
    </div>
  );
};

export default Footer;
