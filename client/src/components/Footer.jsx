import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer>
      <div className=" sm:mt-32 md:mt-52 px-16 md:px-36 flex flex-col sm:gap-y-10 sm:items-center md:flex-row lg:flex justify-between">
        <div>
          <img src={assets.logo} alt="Logo" />
          <p className=" text-sm text-gray-300 my-5 max-w-md">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
            cum dicta repudiandae quam, voluptatibus nesciunt aperiam quo maxime
            aliquid odit!
          </p>

          <div className=" flex gap-2">
            <img
              src={assets.googlePlay}
              alt="googlePlay"
              className=" h-10 w-auto border border-white rounded"
            />
            <img
              src={assets.appStore}
              alt="app store"
              className=" h-10 w-auto border border-white rounded"
            />
          </div>
        </div>
        <div>
          <h1 className=" text-xl mb-2 md:text-2xl">Company</h1>
          <ul className=" font-extralight">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <h1 className=" text-xl mb-2 md:text-2xl">Get in Touch</h1>
          <ul className=" font-extralight">
            <li>+91-7620761811</li>
            <li>Shrii@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className=" flex flex-col text-center mt-10">
        <hr className=" mx-16 md:mx-36 text-gray-400 h-0.5" />

        <p className=" text-gray-300 my-6">
          {" "}
          Copyright 2025 © Company name. All Right Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
