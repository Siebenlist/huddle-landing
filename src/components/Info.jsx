import React from "react";
import Information from "./CardIndex";
import img1 from "../images/illustration-grow-together.svg";
import img2 from "../images/illustration-flowing-conversation.svg";
import img3 from "../images/illustration-your-users.svg";
import bgtop1 from "../images/bg-section-top-desktop-1.svg";
import bgbottom1 from "../images/bg-section-bottom-desktop-1.svg";
import bgtop2 from "../images/bg-section-top-desktop-2.svg";
import bgbottom2 from "../images/bg-section-bottom-desktop-2.svg";

const Info = () => {
   return (
      <div className="my-[150px]">
         <div className="">
            <img src={bgtop1} alt="" className="w-full" />
            <Information
               imageUrl={img1}
               title="Grow Together"
               desc="Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on a with a feedback form."
            />
            <img src={bgbottom1} alt="" className="w-full" />
         </div>
         <div className="flex flex-col md:flex-row-reverse justify-center items-center gap-10 text-center md:text-left my-[100px]">
            <div className="w-[90%] max-w-[600px]">
               <img src={img2} alt="" />
            </div>
            <div className="flex flex-col items-center">
               <h1 className="text-2xl font-bold mb-5">
                  Flowing Conversations
               </h1>
               <p className="w-[80%] max-w-[700px] text-sm sm:text-base">
                  You wouldn't paginate a conversation in real life, so why do
                  it online? Our threads have just-in-time loading for more
                  natural flow.
               </p>
            </div>
         </div>
         <div>
            <img src={bgtop2} alt="" className="w-full" />
            <Information
               imageUrl={img3}
               title="Grow Together"
               desc="Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on a with a feedback form."
            />
            <img src={bgbottom2} alt="" className=" w-full" />
         </div>
         <div className="my-[150px] text-center">
            <h1 className="text-3xl sm:text-4xl font-bold mb-10">
               Ready To Build Your Community?
            </h1>
            <button className="text-white font-bold py-3 px-10 bg-[#ff52bf] rounded-full shadow-lg hover:scale-105 ease-in-out duration-500">
               Get Starter For Free
            </button>
         </div>
      </div>
   );
};

export default Info;
