import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import AnimatedTitle from "../AnimatedTitle";
import coursesData from "../../helpers/data/courses.json";
import SlideCard from "./SlideCard";
import { RiArrowRightSLine } from "react-icons/ri";

const Courses = () => {
  return (
    <section id="courses" className="min-h-[90vh] bg-[#0a0844]">
      <div className="container flex flex-col justify-center pb-[30px]">
        <AnimatedTitle name="Courses" />
        <div className="flex justify-between gap-[30px] items-center mt-5 lg:flex-row flex-col">
          <p
            data-aos="fade-right"
            data-aos-delay="100"
            className="text-[1.2rem] font-light text-[#ffffff7d] text-center lg:text-left"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
            nostrum.
          </p>
          <a
            data-aos="fade-left"
            data-aos-delay="100"
            href=" https://wa.me/201553920327"
            target="_blank"
            className="relative bg-transparent w-[12rem] h-auto translate-y-[-15px] group mt-5 -mb-5 m-auto lg:m-0"
          >
            <span
              className="block relative m-0 w-[3rem] h-[3rem] rounded-[1.625rem] transition-all duration-[0.45s]         ease-[cubic-bezier(0.65,0,0.076,1)] bg-gradient-to-r from-[#935cec] to-[#ff87dd] group-hover:w-full"
              aria-hidden="true"
            >
              <RiArrowRightSLine className="text-[#ffffff] absolute text-4xl transition-all duration-[0.45s]           ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:translate-x-[1rem] group-hover:translate-y-0 top-0 bottom-0 m-auto left-1.5" />
            </span>
            <span className="transition-all duration-[0.45s] ease-[cubic-bezier(0.65,0,0.076,1)] absolute top-0 left-0 bottom-0 right-0 px-0 py-[0.75rem] my-0 mr-0 ml-[1.85rem] md:ml-[4rem] lg:ml-[1.85rem] text-[#ff87dd] font-bold leading-[1.6] text-center tracking-[1px] uppercase scale-[1.2] whitespace-nowrap group-hover:text-[#ffffff] group-hover:scale-[1]">
              Book Now
            </span>
          </a>
        </div>

        <Swiper
          data-aos="fade-up"
          data-aos-delay="200"
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="min-h-[70%] w-full -mb-5 !pt-[70px] !pb-[50px]"
        >
          {/* Mapping on the array (json file) */}
          {coursesData &&
            coursesData.map((course) => (
              <SwiperSlide
                key={course.id}
                className="flex justify-center items-center !w-[290px] lg:!w-[310px] !h-[380px] lg:!h-[400px] rounded-[10px] !bg-[#ffffff]"
              >
                <SlideCard
                  title={course.title}
                  price={course.price}
                  details={course.details}
                  img={course.img}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Courses;
