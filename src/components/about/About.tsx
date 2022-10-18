import React from "react";
import AnimatedTitle from "../AnimatedTitle";
import Advantages from "./Advantages";
import SliderImgs from "./SliderImgs";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-[80vh] bg-[#03022c] text-center pb-[40px]"
    >
      <div className="container">
        <AnimatedTitle name="Why Us ?" />
        <main className="py-[10px] px-0 flex justify-between items-center flex-col lg:flex-row gap-[50px]">
          <Advantages />
          <SliderImgs />
        </main>
      </div>
    </section>
  );
};

export default About;
