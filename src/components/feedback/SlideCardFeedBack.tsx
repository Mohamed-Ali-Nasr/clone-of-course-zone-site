import React, { FC } from "react";

interface ISlideFeedback {
  name: string;
  job: string;
  feedback: string;
  img: string;
}

const SlideCardFeedBack: FC<ISlideFeedback> = ({
  name,
  job,
  feedback,
  img,
}) => {
  return (
    <>
      <div className="flex justify-center items-center w-[100px] h-[100px] bg-gradient-to-r from-[#935cec] to-[#ff87dd] absolute left-[50%] translate-x-[-50%] top-[-40px] rounded-full border-[4px] border-[#ffffff] overflow-hidden        shadow-[0px_0px_30px_0px_rgba(0,0,0,1)]">
        {img && (
          <img className="w-[105%] absolute top-0" src={img} alt="profile" />
        )}
      </div>
      <div className="h-[80%] pt-[60px] overflow-scroll font-extrabold text-[1.3rem] leading-[30px] scrollbar-hide">
        {feedback}
      </div>
      <div className="h-[25%] border-t-[2px] border-t-[#000000]">
        <div className="text-[2rem] mt-[-2px] font-extrabold text-[#6c2d89]">
          {name}
        </div>
        <div className="text-[1.4rem] -mt-2 font-semibold">{job}</div>
      </div>
    </>
  );
};

export default SlideCardFeedBack;
