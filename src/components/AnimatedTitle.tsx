import React, { FC } from "react";

const AnimatedTitle: FC<{ name: string }> = ({ name }) => {
  return (
    <div
      data-aos="fade-right"
      className={`main-title ${
        name === "Events" && "max-h-[50px] pt-11 flex justify-center lg:block"
      }`}
    >
      {name}
    </div>
  );
};

export default AnimatedTitle;
