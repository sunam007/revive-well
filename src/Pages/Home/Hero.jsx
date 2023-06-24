import React from "react";
import hero from "../../assets/images/hero.jpg";
import Headline from "../../components/Title";
import Paragraph from "../../components/Paragraph";
import Title from "../../components/Title";

function Hero() {
  return (
    <div className="hero md:mt-16">
      <div className="hero-content flex-col lg:flex-row space-y-4 md:spcae-y-0 lg:space-x-12">
        <img src={hero} className=" w-full lg:w-1/2 rounded-sm shadow-sm" />

        <div className="space-y-4">
          <Title>Enjoy A Stress Free Life</Title>
          <Paragraph>
            We provide compassionate support and expert guidance, empowering you
            to overcome challenges, find balance, and embrace a fulfilling life
            of well-being.
          </Paragraph>
          <button className="btn btn-primary">Book Appointment</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
