import { FC } from "react";

interface IServices {
  title: string;
  image: string;
  section: string;
  delay: number;
}

const ServiceCard: FC<IServices> = ({ title, image, section, delay }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      className="h-[170px] lg:h-[210px] w-full md:min-w-[400px] lg:min-w-[450px] pb-[5px] pt-5 rounded-[15px] bg-[#20253d] lg:py-5 px-[30px] flex flex-col justify-between overflow-hidden relative hover:shadow-[0px_0px_20px_0px_rgba(57,67,112,0.64)]"
    >
      <div className="text-[#ffffff] font-medium lg:text-[3rem] lg:leading-[50px] text-[2.5rem] leading-[40px]">
        {title.split(" ")[0]}
        <br />
        {title.split(" ")[1]}
      </div>
      <a
        href={"#" + section}
        className="text-[#ffffff] font-medium text-[1.5rem] leading-[50px]"
      >
        Learn more <span className="ml-[10px]">+</span>
      </a>
      <img
        className={`lg:w-[220px] absolute right-[-1%] lg:bottom-[-4%] w-[190px] bottom-[-5%] ${
          section === "about" &&
          "lg:w-[230px] lg:bottom-[-20%] w-[200px] bottom-[-23%] right-[-3%]"
        }`}
        src={image}
        alt="workspace"
      />
    </div>
  );
};

export default ServiceCard;
