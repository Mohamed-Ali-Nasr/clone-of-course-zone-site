import eventsModel from "../helpers/images/eventsModel.png";
import shadowImg from "../helpers/images/shadowImg.png";
import AnimatedTitle from "./AnimatedTitle";

const Events = () => {
  return (
    <section
      id="events"
      className="min-h-[80vh] lg:min-h-[90vh] flex flex-col gap-5 lg:gap-10 pb-[30px] overflow-hidden relative bg-gradient-to-r from-[#0a0844] to-[#6c2d89]"
    >
      <div className="container title">
        <AnimatedTitle name="Events" />
      </div>
      <div className="container flex justify-between flex-col lg:flex-row text-center lg:text-left items-center min-h-[80vh]">
        <div className="w-[80%] lg:w-1/2 min-h-[80vh] flex flex-col justify-center text-[#ffffff] z-10">
          <h1
            data-aos="fade-right"
            className="text-[3.3rem] lg:text-[4.1rem] leading-[60px] lg:leading-[80px] capitalize font-bold mt-[-2rem]"
          >
            You want a place for your{" "}
            <span className="text-[#ff478c]">event</span> ?
          </h1>
          <p
            data-aos="fade-right"
            data-aos-delay="150"
            className="text-[1.5rem] lg:text-[1.7rem] capitalize text-[#ffffff99] font-light mt-[1rem]"
          >
            Feel free to communicate with us
          </p>
          <a
            data-aos="fade-right"
            data-aos-delay="200"
            className="btn origin-center mt-6 mx-auto lg:mx-0 lg:origin-left scale-[0.8] lg:scale-90 lg:mt-[4rem]"
            href="#contact"
          >
            Get Started
          </a>
        </div>
        <div
          className="flex flex-col items-center lg:mb-[-70px] lg:p-0 lg:mt-0 ml-10 mb-0 mt-[-50px] pb-[30px]"
          data-aos="fade-left"
          data-aos-delay="50"
        >
          <img
            className="w-[400px] lg:w-[500px] duration-300 animate-[model_2s_ease-in-out_infinite_alternate]"
            src={eventsModel}
            alt="model"
          />
          <img
            className="w-[400px] lg:w-[500px] duration-300 ml-[-90px] animate-[shadow_2s_ease-in-out_infinite_alternate]"
            src={shadowImg}
            alt="shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default Events;
