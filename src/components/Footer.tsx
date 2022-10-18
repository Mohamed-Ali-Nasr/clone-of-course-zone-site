import React from "react";

const Footer = () => {
  return (
    <footer className="min-h-[50vh] bg-[#03022c]">
      <div className="container min-h-[50vh] flex py-10 px-0 flex-col md:flex-row text-center md:text-left justify-between items-center gap-[90px] text-[#ffffff]">
        <div>
          <h1
            data-aos="fade-right"
            className="bg-gradient-to-r from-[#fc5c98] to-[#ff7757] bg-clip-text text-transparent font-bold          text-[2.5rem]"
          >
            Get in touch
          </h1>
          <p
            data-aos="fade-right"
            data-aos-delay="100"
            className="text-[1.3rem] leading-[25px] font-medium opacity-50 mt-[5px] mb-10 md:mb-[60px]"
          >
            Lorem ipsum dolor sit amet elit. dolore vel? Sint et <br />a
            veritatis voluptatibus explicabo tempora
          </p>
          <a
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-offset="-50"
            href="#contact"
            className="btn text-[1.4rem] py-[3px] px-[30px]"
          >
            Contact
          </a>
        </div>
        <div>
          <h1
            data-aos="fade-left"
            data-aos-delay="100"
            className="bg-gradient-to-r from-[#fc5c98] to-[#ff7757] bg-clip-text text-transparent font-bold          text-[2.5rem]"
          >
            Links
          </h1>
          <div className="flex flex-col text-center md:text-right">
            <a
              data-aos="fade-left"
              data-aos-delay="200"
              href="#home"
              className="text-[1.5rem] text-[#ffffff80] hover:text-[#ffffff] mb-2"
            >
              Home
            </a>
            <a
              data-aos="fade-left"
              data-aos-delay="300"
              href="#about"
              className="text-[1.5rem] text-[#ffffff80] hover:text-[#ffffff] mb-2"
            >
              About
            </a>
            <a
              data-aos="fade-left"
              data-aos-delay="400"
              href="#events"
              className="text-[1.5rem] text-[#ffffff80] hover:text-[#ffffff] mb-2"
            >
              Events
            </a>
            <a
              data-aos="fade-left"
              data-aos-delay="500"
              data-aos-offset="-50"
              href="#courses"
              className="text-[1.5rem] text-[#ffffff80] hover:text-[#ffffff] mb-6"
            >
              Courses
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
