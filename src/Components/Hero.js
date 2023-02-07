import React from "react";

const Hero = () => {
  return (
    <section className="bg-primary px-4 text-white py-12">
      <div className="container mx-auto grid md:grid-cols-2 items-center ">
        <div className="hero-info pb-5">
          <div className="md:text-sm ">current balance</div>
          <div className="flex">
            <h1
              className="text-4xl font-bold leading-loose
	"
            >
              {" "}
              $3,742.15
            </h1>{" "}
            <span className="text-sm text-green-700 py-3 ">+0.55%</span>
          </div>
        </div>

        <div className="w-3/6 flex justify-between text-sm md:w-2/4 ">
          <span className="flex">
            <button className="bg-accent px-4 py-3  rounded-md">buy</button>
            <button className="bg-accent px-4 py-3  rounded-md">sell</button>
          </span>
          <span className="flex">
            <button className="bg-secondary px-4 py-3  rounded-md">send</button>
            <button className="bg-secondary px-4 py-3  rounded-md">
              recieve
            </button>
          </span>
          <span className="flex">
            <button className="bg-secondary px-4 py-3  rounded-md">...</button>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
