import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { ArrowRight, CalendarRangeIcon, ClockIcon } from "lucide-react";

const HeroSection = () => {

  const navigate = useNavigate();

  return (
    <>
      <div className=' flex flex-col justify-center gap-4 px-6 md:px-16 lg:px-36 bg-[url("/backgroundImage.png")] bg-cover bg-center h-screen'>
        <div>
          <img
            src={assets.marvelLogo}
            alt="Img"
            className=" max-h-11 lg:h-11 mt-20"
          />
        </div>
        <h1 className=" text-5xl md:text-[70px] md:leading-16 font-semibold max-w-110">
          Guardians <br /> of the Galaxy
        </h1>

        <div className=" flex items-center gap-4 text-gray-400 ">
          <span>Action | Adventure | Sci-fi</span>
          <div className=" flex items-center gap-1">
            <CalendarRangeIcon className=" w-4.5 h-4.5" /> 2025
          </div>
          <div className=" flex items-center gap-1">
            <ClockIcon className=" w-4.5 h-4.5" /> 2h 8m
          </div>
        </div>

        <div className=" text-gray-300 max-w-md">
          In a post-apocalyptic world where cities ride on wheels and consume
          each other to survive, two people meet in London and try to stop
          conspirancy.
        </div>

        <button onClick={()=> navigate("/movies")} className=" flex items-center gap-2 bg-primary hover:bg-primary-dull w-fit text-sm px-6 md:px-12 md:py-3 py-3 transition font-medium cursor-pointer rounded-full">
          Explore Movies <ArrowRight className=" w-5 h-5" />
        </button>
      </div>
    </>
  );
};

export default HeroSection;
