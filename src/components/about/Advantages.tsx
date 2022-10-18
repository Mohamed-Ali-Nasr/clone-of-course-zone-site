import correctIcon from "../../helpers/images/accept.png";

const Advantages = () => {
  return (
    <div className="flex flex-col gap-20">
      <p
        data-aos="fade-right"
        data-aos-delay="200"
        className="text-[#ffffff] mt-[3rem] lg:mt-[1.5rem] text-[1.7rem] lg:text-[2rem] font-light leading-[35px] lg:leading-10 text-[#ffffffb3]"
      >
        Lorem ipsum dolor sit,
        <br />
        consectetur adipisicing asd elasit.
        <br /> Iusto minus maiores autem.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-[70px] mt-[30px] lg:block">
        <h1
          data-aos="fade-right"
          data-aos-delay="200"
          className="flex items-center font-bold mt-[-90px] lg:mt-2 text-[1.5rem] lg:text-[1.7rem] text-[#ffffff]"
        >
          <img
            src={correctIcon}
            alt="advantage icon"
            className="w-[25px] lg:w-[30px] mt-[1px] mr-[15px]"
          />
          Fully
          <span className="text-[#4bae4f] ml-[5px]"> Calmness</span>
        </h1>
        <h1
          data-aos="fade-right"
          data-aos-delay="300"
          className="flex items-center font-bold mt-[-90px] lg:mt-2 text-[1.5rem] lg:text-[1.7rem] text-[#ffffff]"
        >
          <img
            src={correctIcon}
            alt="advantage icon"
            className="w-[25px] lg:w-[30px] mt-[1px] mr-[15px]"
          />
          Unlimeted
          <span className="text-[#4bae4f] ml-[5px]"> Wifi</span>
        </h1>
        <h1
          data-aos="fade-right"
          data-aos-delay="400"
          className="flex items-center font-bold mt-[-90px] lg:mt-2 text-[1.5rem] lg:text-[1.7rem] text-[#ffffff]"
        >
          <img
            src={correctIcon}
            alt="advantage icon"
            className="w-[25px] lg:w-[30px] mt-[1px] mr-[15px]"
          />
          Working
          <span className="text-[#4bae4f] ml-[5px]"> Offices</span>
        </h1>
      </div>
    </div>
  );
};

export default Advantages;
