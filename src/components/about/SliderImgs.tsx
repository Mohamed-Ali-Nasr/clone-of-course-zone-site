import { useRecoilState, useRecoilValue } from "recoil";
import {
  activeSliderImgsState,
  sliderImages,
} from "../../atoms/ActiveSliderImgs";
import Slide from "./Slide";

const SliderImgs = () => {
  const [activeSlider] = useRecoilState(activeSliderImgsState);
  const imgs = useRecoilValue<any>(sliderImages);

  return (
    <div
      data-aos="fade-up"
      data-aos-delay="200"
      className="w-[75%] md:w-[55%] lg:w-[45%] h-4/5 flex flex-col justify-center gap-[15px]"
    >
      <div className="w-full h-full rounded-t-[10px] overflow-hidden">
        <img src={imgs["slide" + activeSlider]} alt="workspace" />
      </div>
      <div className="grid grid-cols-4 gap-[10px]">
        <Slide imgIndex={1} />
        <Slide imgIndex={2} />
        <Slide imgIndex={3} />
        <Slide imgIndex={4} />
      </div>
    </div>
  );
};

export default SliderImgs;
