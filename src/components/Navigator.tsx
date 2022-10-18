import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { RiHeadphoneFill } from "react-icons/ri";
import { FaBook, FaGraduationCap, FaCalendarPlus } from "react-icons/fa";

const Navigator = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(1);

  const linksScroll = (query: MediaQueryList | MediaQueryListEvent) => {
    console.log(query.matches);

    if (query.matches) {
      // If media query matches
      window.onscroll = () => {
        const scroll = Math.trunc(window.scrollY);
        // Home => 0 : 350
        if (scroll >= 0 && scroll <= 400) setActiveIndex(1);
        // About => 600 : 1250
        else if (scroll >= 600 && scroll <= 1250) setActiveIndex(2);
        // Courses => 1350 : 1950
        else if (scroll >= 1350 && scroll <= 1950) setActiveIndex(3);
        // Events => 1950 : 1850
        else if (scroll >= 1850 && scroll <= 2650) setActiveIndex(4);
        // Contacts => 3200 : 3700
        else if (scroll >= 3200 && scroll <= 3800) setActiveIndex(5);
        else setActiveIndex(null);
      };
    }
  };

  let query = window.matchMedia("(min-width: 1100px)");
  linksScroll(query); // Call listener function at run time
  query.addEventListener("change", linksScroll); // Attach listener function on state changes

  return (
    <div className="h-[70px] w-full sm:w-[420px] z-50 sm:rounded-[100px] fixed left-[50%] translate-x-[-50%] bottom-0 sm:bottom-[40px] bg-[#0000003f] sm:bg-[#ffffff3f] backdrop-blur-[7px] sm:backdrop-blur-[5px] flex justify-evenly items-center sm:border sm:border-[#ffffff] duration-500 border-t border-t-[#0000006f]">
      <a
        href="#home"
        className={`text-[2.3rem] text-[#ffffff] opacity-50 duration-300 mt-[8px] hover:opacity-100 ${
          activeIndex === 1 ? "scale-[1.3] opacity-100 !text-[#fc5c98]" : ""
        }`}
        onClick={() => setActiveIndex(1)}
      >
        <AiFillHome />
      </a>
      <a
        href="#about"
        className={`text-[1.8rem] text-[#ffffff] opacity-50 duration-300 mt-[8px] hover:opacity-100 ${
          activeIndex === 2 ? "scale-[1.3] opacity-100 !text-[#fc5c98]" : ""
        }`}
        onClick={() => setActiveIndex(2)}
      >
        <FaBook />
      </a>
      <a
        href="#courses"
        className={`text-[2.3rem] text-[#ffffff] opacity-50 duration-300 mt-[8px] hover:opacity-100 ${
          activeIndex === 3 ? "scale-[1.3] opacity-100 !text-[#fc5c98]" : ""
        }`}
        onClick={() => setActiveIndex(3)}
      >
        <FaGraduationCap />
      </a>
      <a
        href="#events"
        className={`text-[1.8rem] text-[#ffffff] opacity-50 duration-300 mt-[8px] hover:opacity-100 ${
          activeIndex === 4 ? "scale-[1.3] opacity-100 !text-[#fc5c98]" : ""
        }`}
        onClick={() => setActiveIndex(4)}
      >
        <FaCalendarPlus />
      </a>
      <a
        href="#contact"
        className={`text-[2.3rem] text-[#ffffff] opacity-50 duration-300 mt-[8px] hover:opacity-100 ${
          activeIndex === 5 ? "scale-[1.3] opacity-100 !text-[#fc5c98]" : ""
        }`}
        onClick={() => setActiveIndex(5)}
      >
        <RiHeadphoneFill />
      </a>
    </div>
  );
};

export default Navigator;
