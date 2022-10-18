import {
  FaHeadphonesAlt,
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

const Links = () => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap justify-center lg:flex-col gap-[40px] lg:gap-[50px] origin-left">
      <div className="flex gap-[30px]">
        <a
          data-aos="zoom-in"
          data-aos-delay="50"
          href="tel:+201553920327"
          target="blank"
          className="flex justify-center items-center text-[#ffffff] w-[70px] lg:w-[90px] h-[70px] lg:h-[90px] rounded-full bg-[#ffffff5f] text-[2.5rem] lg:text-[3rem] hover:bg-[#ffffff] hover:text-[#935cec]   hover:lg:text-[3.5rem] hover:text-[2.5rem] hover:!scale-90 hover:shadow-[0px_0px_40px_rgba(147,92,236,1)]"
        >
          <FaHeadphonesAlt />
        </a>
        <a
          data-aos="zoom-in"
          data-aos-delay="100"
          href="mailto: alrba2003@gmail.com"
          className="flex justify-center items-center text-[#ffffff] w-[70px] lg:w-[90px] h-[70px] lg:h-[90px] rounded-full bg-[#ffffff5f] text-[2.5rem] lg:text-[3rem] hover:bg-[#ffffff] hover:text-[#935cec]   hover:lg:text-[3.5rem] hover:text-[2.5rem] hover:!scale-90 hover:shadow-[0px_0px_40px_rgba(147,92,236,1)]"
        >
          {" "}
          <MdAlternateEmail />
        </a>
      </div>
      <div className="flex gap-[30px]">
        <a
          data-aos="zoom-in"
          data-aos-delay="200"
          href="https://www.facebook.com/WorkZoneOfficial"
          target="blank"
          className="flex justify-center items-center text-[#ffffff] w-[70px] lg:w-[90px] h-[70px] lg:h-[90px] rounded-full bg-[#ffffff5f] text-[2.5rem] lg:text-[3rem] hover:bg-[#ffffff] hover:text-[#935cec]   hover:lg:text-[3.5rem] hover:text-[2.5rem] hover:!scale-90 hover:shadow-[0px_0px_40px_rgba(147,92,236,1)]"
        >
          <FaFacebookF />
        </a>
        <a
          data-aos="zoom-in"
          data-aos-delay="300"
          href=" https://wa.me/201553920327"
          target="_blank"
          className="flex justify-center items-center text-[#ffffff] w-[70px] lg:w-[90px] h-[70px] lg:h-[90px] rounded-full bg-[#ffffff5f] text-[2.5rem] lg:text-[3rem] hover:bg-[#ffffff] hover:text-[#935cec]   hover:lg:text-[3.5rem] hover:text-[2.5rem] hover:!scale-90 hover:shadow-[0px_0px_40px_rgba(147,92,236,1)]"
        >
          <FaWhatsapp />
        </a>
      </div>
      <div className="flex gap-[30px]">
        <a
          data-aos="zoom-in"
          data-aos-delay="400"
          href="https://www.facebook.com/WorkZoneOfficial"
          target="blank"
          className="flex justify-center items-center text-[#ffffff] w-[70px] lg:w-[90px] h-[70px] lg:h-[90px] rounded-full bg-[#ffffff5f] text-[2.5rem] lg:text-[3rem] hover:bg-[#ffffff] hover:text-[#935cec]   hover:lg:text-[3.5rem] hover:text-[2.5rem] hover:!scale-90 hover:shadow-[0px_0px_40px_rgba(147,92,236,1)]"
        >
          <FaInstagram />
        </a>
        <a
          data-aos="zoom-in"
          data-aos-delay="500"
          href="https://www.facebook.com/WorkZoneOfficial"
          target="blank"
          className="flex justify-center items-center text-[#ffffff] w-[70px] lg:w-[90px] h-[70px] lg:h-[90px] rounded-full bg-[#ffffff5f] text-[2.5rem] lg:text-[3rem] hover:bg-[#ffffff] hover:text-[#935cec]   hover:lg:text-[3.5rem] hover:text-[2.5rem] hover:!scale-90 hover:shadow-[0px_0px_40px_rgba(147,92,236,1)]"
        >
          <FaTwitter />
        </a>
      </div>
    </div>
  );
};

export default Links;
