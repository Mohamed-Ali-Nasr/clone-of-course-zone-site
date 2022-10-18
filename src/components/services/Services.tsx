import React, { useRef, useState } from "react";
import AnimatedTitle from "../AnimatedTitle";
import ServiceCard from "./ServiceCard";
import workspaceImg from "../../helpers/images/workspace.png";
import coursesImg from "../../helpers/images/courses.png";
import eventsImg from "../../helpers/images/events.png";
import Cursor from "./Cursor";

const Services = () => {
  const slides = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [activeSlide, setActiveSlide] = useState(1);

  const slideTo = (n = 0) => {
    if (n === 1) {
      slides.current.scroll(0, 0);
      setActiveSlide(1);
    } else if (n === 2) {
      slides.current.scroll(700, 0);
      setActiveSlide(2);
    }
  };

  return (
    <section className="bg-[#0a0844] pb-[40px] relative md:before:content-[''] md:before:absolute md:before:top-0 md:before:right-0 md:before:h-full md:before:w-[40%] md:before:z-50 md:before:bg-gradient-to-r from-transparent to-[#0a0844]">
      <div className="container">
        <AnimatedTitle name="Services" />
        <div
          className="flex items-center justify-start h-[70%] gap-5 md:gap-[40px] md:overflow-x-scroll md:overflow-y-hidden mt-[15px] md:pr-[350px] md:scrollbar-hide md:pl-5 px-0 flex-wrap md:flex-nowrap w-full"
          ref={slides}
        >
          <ServiceCard
            title="Quite Places"
            section="about"
            image={workspaceImg}
            delay={100}
          />
          <ServiceCard
            title="Live Courses"
            section="courses"
            image={coursesImg}
            delay={300}
          />
          <ServiceCard
            title="Events Places"
            section="events"
            image={eventsImg}
            delay={500}
          />
        </div>
        <Cursor slideTo={slideTo} activeSlide={activeSlide} />
      </div>
    </section>
  );
};

export default Services;
