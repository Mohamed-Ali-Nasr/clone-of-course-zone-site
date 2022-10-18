import AnimatedTitle from "../AnimatedTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import feedbacksData from "../../helpers/data/feedbacksData.json";
import SlideCardFeedBack from "./SlideCardFeedBack";

const Feedback = () => {
  return (
    <section
      id="feedbacks"
      className="min-h-[50vh] pb-5 overflow-hidden bg-[#03022c]"
    >
      <div className="container">
        <AnimatedTitle name="Feedbacks" />
        <p
          className="mt-5 text-center md:text-left mb-[10px] text-[1.2rem] font-light text-[#ffffff7d]"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, nostrum.
        </p>

        {/* Slide goas here */}
      </div>
      <div className="h-[54vh] sm:h-[48vh] w-[85%] xl:w-[75%] m-auto mt-20">
        <Swiper
          data-aos="fade-up"
          data-aos-delay="100"
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            550: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="w-full h-[85%] !overflow-visible"
        >
          {feedbacksData &&
            feedbacksData.map((ele) => (
              <SwiperSlide
                key={ele.id}
                className="text-center !mr-5 md:!mr-[50px] text-[18px] bg-[#fff] rounded-[20px] flex flex-col justify-between p-5"
              >
                <SlideCardFeedBack
                  name={ele.name}
                  job={ele.job}
                  feedback={ele.feedback}
                  img={ele.img}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Feedback;
