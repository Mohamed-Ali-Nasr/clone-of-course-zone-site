import { atom } from "recoil";
import slide1 from "../helpers/images/slide1.jpg";
import slide2 from "../helpers/images/slide2.jpg";
import slide3 from "../helpers/images/slide3.jpg";
import slide4 from "../helpers/images/slide4.jpg";

export const activeSliderImgsState = atom({
  key: "activeSliderImgsState",
  default: 1,
});

export const sliderImages = atom({
  key: "sliderImages",
  default: {
    slide1: slide1,
    slide2: slide2,
    slide3: slide3,
    slide4: slide4,
  },
});
