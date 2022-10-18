import React, { FC } from "react";

const Cursor: FC<{ slideTo: (n: number) => void; activeSlide: number }> = ({
  slideTo,
  activeSlide,
}) => {
  return (
    <div className="hidden md:flex justify-center gap-[10px] mt-[30px] mb-[-10px]">
      <div
        onClick={() => slideTo(1)}
        className={`w-[15px] h-[15px] rounded-full cursor-pointer bg-[#ffffff] opacity-20 duration-300 ${
          activeSlide === 1 && "!opacity-100"
        }`}
      ></div>
      <div
        onClick={() => slideTo(2)}
        className={`w-[15px] h-[15px] rounded-full cursor-pointer bg-[#ffffff] opacity-20 duration-300 ${
          activeSlide === 2 && "!opacity-100"
        }`}
      ></div>
    </div>
  );
};

export default Cursor;
