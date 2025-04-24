import React from "react";
import ParallalxImage from "../ParallalxImage";

const AboutUs = () => {
  return (
    <div id="aboutUs" className="section">
      <div className="img">
        <ParallalxImage src="/portrait1.jpg" alt=""/>
        <div className="about-content">
          <h2 className=" text-white">About Us</h2>
          <h1>Fueled by Passion. Powered by Innovation.</h1>
          <p className="">
            Pixel Pulse is dedicated to delivering high-quality gaming
            peripherals to gamers worldwide.
          </p>
          <p>
            Our team of experts engineers top-tier gaming gear designed for
            precision, comfort, and durability.{" "}
          </p>
          <p>
            Whether you're a competitive esports player or a casual gamer, we
            have the right tools to elevate your gaming experience.
          </p>
          <p className="text-xl text-gray-400 mt-4">
            Join the Pixel Pulse community and experience gaming like never
            before.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
