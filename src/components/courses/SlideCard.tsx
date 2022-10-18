import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { FaHeadphonesAlt } from "react-icons/fa";
import { FC, useState } from "react";

interface ICourses {
  title: string;
  price: number;
  details: string[];
  img: string;
}

const SlideCard: FC<ICourses> = ({ title, price, details, img }) => {
  const [infoPage, setInfoPage] = useState(false);

  return (
    <div className="h-full flex gap-[2px] rounded-[20px] overflow-hidden duration-[0.4s] group                               hover:shadow-[0px_0px_40px_0px_rgba(147,92,236,0.58)]">
      <div
        className={`min-w-[303px] lg:min-w-[311px] text-left bg-[#ffffff] h-full relative p-5 pb-[10px] duration-300 ease-out translate-x-[-312px] ${
          infoPage ? "translate-x-0" : ""
        }`}
      >
        <div className="text-[1.4rem] text-[#000000] font-extrabold leading-[30px] w-full overflow-y-scroll cursor-auto h-min scrollbar-hide">
          {title}
        </div>
        <button
          className="bg-transparent flex items-center -ml-3 lg:ml-0 mt-4 w-full justify-end gap-[5px] text-[1.2rem] font-bold opacity-50 duration-300 hover:opacity-100 hover:pr-[10px]"
          onClick={() => setInfoPage(false)}
        >
          <IoIosArrowBack />
          Less Details
        </button>
        <ul className="max-h-[55%] mt-5 overflow-y-scroll py-0 pr-[15px] pl-[25px] ul-scroll list-disc">
          {details.map((ele, index) => (
            <li
              key={index}
              className="leading-[20px] capitalize cursor-auto mt-[15px] first:mt-0"
            >
              {ele}
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`min-w-[303px] lg:min-w-[311px] h-full relative p-5 pb-[10px] duration-300 ease-out translate-x-[-312px] bg-[#ffffff] ${
          infoPage ? "translate-x-0" : ""
        }`}
      >
        <div className="w-full h-[40%] bg-gradient-to-r from-[#935cec] to-[#ff87dd] rounded-[20px] overflow-hidden">
          {img && (
            <img
              className="block w-full duration-300 group-hover:opacity-50"
              src={img}
              alt="course"
            />
          )}
        </div>
        <div className="text-start pt-[10px] pl-[5px]">
          <div className="text-[1.5rem] text-[#000000] font-extrabold leading-[30px] w-full h-[130px] overflow-y-scroll cursor-auto scrollbar-hide">
            {title}
          </div>
          <button
            className="bg-transparent flex items-center -mt-2 lg:mt-0 gap-[5px] text-[1.2rem] font-bold opacity-50 duration-300 hover:opacity-100 hover:pl-[10px]"
            onClick={() => setInfoPage(true)}
          >
            More Details
            <IoIosArrowForward />
          </button>
        </div>
        <div className="absolute left-0 bottom-0 h-[15%] w-[87%] ml-[19px] border-t border-t-[#000000] flex justify-between items-center">
          <div className="text-[1.4rem] font-bold mt-[-7px] ml-[5px] flex flex-row-reverse gap-[5px] cursor-auto">
            <span>{price}</span>
            <span>ج.م</span>
          </div>
          <div className="w-[40px] h-[40px] text-[#000000] border-[2px] border-[#000000] rounded-full text-[1.3rem]     pt-[3px] opacity-50 duration-300 cursor-pointer flex items-center justify-center hover:opacity-100">
            <a
              href=" https://wa.me/201553920327"
              target="_blank"
              className="text-[#000000]"
            >
              <FaHeadphonesAlt />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideCard;
