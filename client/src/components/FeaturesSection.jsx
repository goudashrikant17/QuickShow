import { ArrowRight } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import BlurCircle from "./BlurCircle";
import { dummyShowsData } from "../assets/assets";
import MovieCaed from "./MovieCard";

const FeaturesSection = () => {
  const navigate = useNavigate();

  return (
    <div className=" relative md:px-16 lg:px-24 overflow-hidden">
      <BlurCircle top="0" right="-80px" />
      <div className=" flex items-center justify-between pt-20 pb-10">
        <p className=" text-gray-300 font-medium text-lg">Now Showing</p>
        <button
          onClick={() => {
            navigate("/movies");
            scrollTo(0, 0);
          }}
          className=" group flex items-center gap-2 text-sm text-gray-300"
        >
          View All{" "}
          <ArrowRight className=" w-4.5 h-4.5 group-hover:translate-x-0.5 transition" />
        </button>
      </div>

      <div className=" p-5 flex justify-center flex-wrap max-sm:justify-center gap-8 mt-8">
        {dummyShowsData.slice(0, 6).map((show) => (
          <MovieCaed key={show._id} movie={show} />
        ))}
      </div>

      <div
        onClick={() => {
          navigate("/movies");
          scrollTo(0, 0);
        }}
        className=" flex items-center justify-center w-full"
      >
        <button className=" bg-primary px-8 py-3 font-medium text-sm rounded-md">
          Show more
        </button>
      </div>
    </div>
  );
};

export default FeaturesSection;
