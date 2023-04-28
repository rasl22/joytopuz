import { homeCategories } from "../service/homeCategory";
import { Link, useParams } from "react-router-dom";

const HomeCard = () => {
  const { slug } = useParams();
  return (

    <>
      {homeCategories.map((category) => (
        <Link
          key={category.id}
          className="xxs:w-full xs:w-[540px] xs:h-[210px] sm:w-full sm:h-[210px] sm:miniContainer md:w-[358px] md:h-[320px] relative cursor-pointer hover:scale-110 ease-in duration-300"
          to={category.id}>
          <div className="relative w-full h-[320px] rounded-[10px]">
            <img
              src={category.img}
              alt="img"
              className="w-full h-full xs:w-[540px] xs:h-[210px] sm:w-full sm:h-[210px]  md:w-[358px] md:h-[320px] rounded-[10px] absolute object-cover "
            />
          </div>
          <div
            className={`${category.bg} bg-opacity-60 rounded-[10px] w-full h-full z-10 absolute top-0`}></div>
          <h1 className="text-[#fff] w-full z-20 text-[30px] font-normal text-center absolute top-[80%]">
            {category.nameUz}
          </h1>
          <div className="absolute w-[90px] top-[30%] left-[36%] z-30">
            <img src={category.icon} alt="img" />
          </div>
        </Link>
      ))}
    </>
  );
};

export default HomeCard;
