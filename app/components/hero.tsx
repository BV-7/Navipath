import React from "react";
import AnimatedGlobe from "./animated-globe";

function Hero() {
    return (
        <section id="Hero">
          <div className="flex flex-col items-center justify-center h-[90vh] text-center p-4">
            <div className="mb-0 flex flex-row items-center gap-4 w-[90%]">
              <div className="flex flex-col justify-center items-center gap-4 text-left">
                <h1 className="text-[7vh] mb-2 max-w-[45vw] m-0">Navigation made Smarter using Navipath.</h1>
                <p className="text-[3vh] mb-2 max-w-[45vw] m-0">Your ultimate navigation solution for seamless travel experiences.</p>
              </div>
              <AnimatedGlobe/>
            </div>
            <a href="login.tsx">
              <button className="px-8 py-4 text-[2vh] bg-[#0070f3] text-white border-0 rounded-[5px] cursor-pointer">
                Get Started
              </button>
            </a>
          </div>
        </section>
    );
}

export default Hero;