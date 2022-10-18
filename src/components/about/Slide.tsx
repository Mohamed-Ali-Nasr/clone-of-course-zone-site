import React, { FC } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  activeSliderImgsState,
  sliderImages,
} from "../../atoms/ActiveSliderImgs";

const Slide: FC<{ imgIndex: number }> = ({ imgIndex }) => {
  const [activeSlider, setActiveSlider] = useRecoilState(activeSliderImgsState);
  const imgs = useRecoilValue<any>(sliderImages);

  return (
    <div
      className={`h-[90%] overflow-hidden cursor-pointer duration-[0.4s] bg-[#ff87dd] ${
        activeSlider === imgIndex
          ? "rounded-[10px] shadow-[0px_0px_20px_0px_rgba(135,161,255,0.53)]"
          : ""
      } ${imgIndex === 1 && "rounded-bl-[10px]"}
      ${imgIndex === 4 && "rounded-br-[10px]"}`}
      onClick={() => setActiveSlider(imgIndex)}
    >
      <img
        src={imgs["slide" + imgIndex]}
        alt="workspace slide"
        className={`w-full h-full object-cover duration-300 ${
          activeSlider === imgIndex && "opacity-60"
        }`}
      />
    </div>
  );
};

export default Slide;
