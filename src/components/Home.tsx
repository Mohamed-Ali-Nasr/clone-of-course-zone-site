import { FaPhoneAlt } from "react-icons/fa";
import logoImg from "../helpers/images/logo.png";
import homeModelImg from "../helpers/images/homeModel.png";
import Writer from "./Writer";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen overflow-hidden relative bg-gradient-to-br from-[#0a0844] to-[#6c2d89]"
    >
      <div className="container">
        <nav className="flex justify-between items-end h-[10vh]">
          <img src={logoImg} alt="WorkZone Logo" className="md:w-20 w-[70px]" />
          <a href=" https://wa.me/201553920327" target="_blank">
            <FaPhoneAlt className="text-[#ffffff] text-3xl opacity-40 mb-[5px] cursor-pointer transition-all        duration-[0.4s] hover:opacity-100 hover:scale-[1.1]" />
          </a>
        </nav>
        <header className="flex justify-between h-[65vh] md:h-[75vh] text-center lg:text-left lg:items-center lg:h-[90vh] flex-col pt-[170px] lg:flex-row lg:pt-0">
          <div className="flex flex-col justify-center z-10 text-[#ffffff]">
            <h1
              data-aos="fade-right"
              className="mt-[-2rem] text-[3.5rem] leading-[70px] md:text-[4rem] md:leading-[80px] lg:leading-[90px] lg:text-[4.5rem] xl:text-[5rem] xl:leading-[80px] font-bold"
            >
              Looking For
              <br />
              <Writer /> ..?
            </h1>
            <p
              data-aos="fade-right"
              data-aos-delay="200"
              className="md:text-[2rem] font-light md:mt-6 text-[1.8rem] mt-0"
            >
              You in the right place
            </p>
            <a
              data-aos="fade-right"
              data-aos-delay="400"
              className="lg:mt-20 btn my-[3rem] mx-auto lg:mx-0"
              href="#services"
            >
              Get Started
            </a>
          </div>
        </header>
      </div>
      <div data-aos="fade-up" data-aos-offset="-500" data-aos-duration="600">
        <img
          src={homeModelImg}
          alt="Student Img"
          className="relative right-[-50%] mb-[-10px] translate-x-[-50%]  lg:mb-0 lg:translate-x-0 lg:right-[60px] lg:absolute lg:bottom-0 xl:right-[15%] md:w-[485px] z-10 w-[425px]"
        />
        <div
          className="absolute md:w-[485px] md:h-[605px] bg-[#ff478c] opacity-30 origin-bottom 
          animate-[bg-animate_3s_ease-in-out_infinite_alternate] lg:animate-[bg-animate-lg_3s_ease-in-out_infinite_alternate] xl:animate-[bg-animate-xl_3s_ease-in-out_infinite_alternate]     w-[405px] h-[555px]"
        ></div>
      </div>
    </section>
  );
};

export default Home;
