import React from "react";
import GirlImg from "../assets/girl.png";
import Fitness from '../assets/fitness.png'

const Hero = () => {
  return (
    <div className="w-screen h-5/6  flex p-4">
      <div className="w-1/2 ">
        <div className="hero min-h-screen">
          <div className="hero-content text-center">
            <div className="flex flex-col justify-center items-center  max-w-md">
              <img src={Fitness} alt='little-logo' className="w-40 mb-8"/>
              <h1 className="text-6xl text-gray-600 font-black">Start Now !</h1>
              <p className="py-6 text-xl text-gray-700">
              Sports have an immense impact on a person’s daily life and health. They do not just give you an interesting routine but also a healthy body.  Primary health care doctors recommend taking part in sports on a regular basis. There are countless benefits of sports, so why don't you start right now?!
              </p>
             
            </div>
          </div>
        </div>
      </div>
      <img
        src={GirlImg}
        alt="Girl"
        className="w-1/2 h-[700px] mr-6 rounded-md shadow-md rounded-bl-[180px]"
      />
    </div>

  );
};

export default Hero;
