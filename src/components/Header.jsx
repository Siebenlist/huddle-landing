import React from "react";
import logo from "../images/logo.svg";
import sizes from "../images/screen-mockups.svg";
import users from "../images/icon-communities.svg";
import chatting from "../images/icon-messages.svg";

const Header = () => {
   return (
      <div className="flex flex-col justify-center">
         <div className="w-full flex justify-center">
            <div className="flex justify-between items-center w-full max-w-[1500px] h-[80px] mx-5">
               <div className="w-[100px] md:w-[200px]">
                  <img src={logo} alt="" />
               </div>
               <button className="text-[#ff8fd8] font-bold py-1 px-5 rounded-full border-2 border-[#ff8fd8] hover:shadow-xl hover:scale-105 ease-in-out duration-500">
                  Try It Free
               </button>
            </div>
         </div>
         <div className="flex flex-col justify-center items-center text-center">
            <h1 className="text-3xl lg:text-5xl font-bold leading-10 mb-10 mt-[100px]">
               Build The Community Your Fans Will Love
            </h1>
            <p className="w-[90%] lg:text-xl font-medium max-w-[550px] mb-12">
               Huddle re-imagine the way we build communities. You have a voice,
               but so does your audience. Create connections with your users as
               you engage in genuine discussion.
            </p>
            <button className="text-white font-bold py-3 px-10 bg-[#ff52bf] rounded-full shadow-lg hover:scale-105 ease-in-out duration-500">
               Get Starter For Free
            </button>
            <div className="w-[90%] max-w-[1000px] my-[150px]">
               <img src={sizes} alt="" />
            </div>
         </div>
         <div className="flex flex-col sm:flex-row justify-center items-center gap-[100px] sm:gap-[10%]">
            <div className="w-[200px]">
               <div className="">
                  <img src={users} alt="" />
               </div>
               <div className="text-center">
                  <h1 className="text-7xl font-bold">1.4k+</h1>
                  <p>Communities Formed</p>
               </div>
            </div>
            <div className="w-[200px]">
               <div className="w-[40px]">
                  <img src={chatting} alt="" />
               </div>
               <div className="text-center">
                  <h1 className="text-7xl font-bold">2.7m+</h1>
                  <p className="w-[100px] mx-auto">Messages Sent</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Header;
