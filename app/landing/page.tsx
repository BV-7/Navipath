import React from "react";
import Link from "next/link";
import Image from "next/image";
import AnimatedGlobe from "../ui/animated-globe";
import Map from "../ui/map"
import Anchor from "../graphics/anchor.png"
import Cloud from "../graphics/cloud.png"
import Document from "../graphics/google-docs.png"; 
import Continent from "../graphics/continents.png";
import Person from "../graphics/person.png";

function Landing(){
    return(
      <>
      <main>
        <section id="Hero" style={{margin:"0"}}>
          <div className="flex flex-col items-center justify-center h-[90vh] text-center p-4 m-0">
            <div className="m-0 flex flex-row items-center gap-4 w-[80vw] h-[75vh]">
              <div className="flex flex-col justify-center items-center gap-4 text-left m-0">
                <h1 className="text-[7vh] m-0 max-w-[45vw]">Navigation made Smarter using Navipath.</h1>
                <p className="text-[3vh] m-0 max-w-[45vw]">Your ultimate navigation solution for seamless travel experiences.</p>
              </div>
              <AnimatedGlobe/>
            </div>
            <div style={{display:'flex', gap:'2vw',margin: "0"}}>
              <Link href="../login">
                <button className="px-8 py-4 text-[2vh] bg-[#0070f3] text-white border-0 rounded-[5px] cursor-pointer">
                  Get Started
                </button>
              </Link>
              <Link href="../contact">
                <button className="px-8 py-4 text-[2vh] bg-[#0070f3] text-white border-0 rounded-[5px] cursor-pointer">
                  Learn more
                </button>
              </Link>
            </div>
          </div>
        </section>
        <hr />
        <section id='About' style={{margin:"0"}}>
          <div className='flex flex-col h-[90vh] text-center gap-[4vh] p-[4vh]'>
            <h2 className=" text-[5vh] m-0">Why NAVIPATH?</h2>
            <div className='flex flex-row items-center justify-center gap-[4vw]'>
              <div className="p-3 glass-card glass-card::before glass-card::after flex flex-col h-[60vh] w-[20vw] justify-center items-center gap-7">
                <h3 className="text-[3.5vh]">Route Optimization</h3>
                <p className="text-[2vh]">plan efficient path across global seas</p>
                <Image src={Continent} alt='map' className="w-[6.5vw] h-[6.5vw]"/>
              </div>
              <div className="p-3 glass-card glass-card::before glass-card::after flex flex-col h-[60vh] w-[20vw] justify-center items-center gap-7">
                <h3 className="text-[3.5vh]">Reat Time Weather Tracking</h3>
                <p className="text-[2vh]">Visualise winds, currents and risks</p>
                <Image src={Cloud} alt="weather" className="w-[6.5vw] h-[6.5vw]"/>
              </div>
              <div className="p-3 glass-card glass-card::before glass-card::after flex flex-col h-[60vh] w-[20vw] justify-center items-center gap-7">
                <h3 className="text-[3.5vh]">AI Voyage Reports</h3>
                <p className="text-[2vh]">Generate instant voyage summaries</p>
                <Image src={Document} alt="document" className="w-[6.5vw] h-[6.5vw]"/>
              </div>
              <div className="p-3 glass-card glass-card::before glass-card::after flex flex-col h-[60vh] w-[20vw] justify-center items-center gap-7">
                <h3 className="text-[3.5vh]">Fleet Management</h3>
                <p className="text-[2vh]">Stay in command of every vehicle</p>
                <Image src={Anchor} alt="anchor" className="w-[6.5vw] h-[6.5vw]"/>
              </div>
            </div>
          </div>
        </section>
        <hr />
        <section>
          <div className="flex flex-col items-center justify-center m-0 gap-[10vh] p-[4vh]">
            <h3 className="text-[5vh]">Proven at Sea!</h3>
            <div className="flex flex-col m-0 gap-[5vh] justify-center items-center mb-[2vh]">
              <div className="flex h-[15vh] w-[95vw] justify-center items-center gap-0 p-0 m-0 relative">
                <div className="w-[25vw] h-[15vh] flex items-center p-[3vh] rounded-full absolute right-[60vw] bg-black/70">
                  <Image src={Person} alt="person" className="w-[5.5vw] h-[5.5vw] "/>
                  <div className="flex flex-col p-[6vh]">
                    <h5>Arjun Rao</h5>
                    <p>Chief Navigation Officer, MV Oceanic</p>
                  </div>
                </div>
                <div className="w-[75vw] h-[15vh] text-[2.35vh] flex items-center justify-center p-[3vh] rounded-full bg-white/70">
                  <p className="ml-[25vw] text-black">“The live route visualizations are stunningly accurate. Our crew could see current speeds, routes, and weather in real time — that clarity keeps everyone calm, even during rough conditions.”</p>
                </div>
              </div>
              <div className="flex h-[15vh] w-[95vw] justify-center items-center gap-0 p-0 m-0 relative">
                <div className="w-[25vw] h-[15vh] flex items-center p-[3vh] rounded-full absolute right-[60vw] bg-black/70">
                  <Image src={Person} alt="person" className="w-[5.5vw] h-[5.5vw] "/>
                  <div className="flex flex-col p-[6vh]">
                    <h5>Aiden Rathore</h5>
                    <p>Fleet Operation Manager, Blue Harbour Logistics</p>
                  </div>
                </div>
                <div className="w-[75vw] h-[15vh] text-[2.35vh] flex items-center justify-center p-[3vh] rounded-full bg-white/70">
                  <p className="ml-[25vw] text-black">“The live route visualizations are stunningly accurate. Our crew could see current speeds, routes, and weather in real time — that clarity keeps everyone calm, even during rough conditions.”</p>
                </div>
              </div>
              <div className="flex h-[15vh] w-[95vw] justify-center items-center gap-0 p-0 m-0 relative">
                <div className="w-[25vw] h-[15vh] flex items-center p-[3vh] rounded-full absolute right-[60vw] bg-black/70">
                  <Image src={Person} alt="person" className="w-[5.5vw] h-[5.5vw] "/>
                  <div className="flex flex-col p-[6vh]">
                    <h5>Srinidhi Vignesh</h5>
                    <p>Voyage Ananlyst, SeaBridge Navigation</p>
                  </div>
                </div>
                <div className="w-[75vw] h-[15vh] text-[2.35vh] flex items-center justify-center p-[3vh] rounded-full bg-white/70">
                  <p className="ml-[25vw] text-black">“NaviPath changed the way we handle our voyages. I used to rely on five different tools for tracking and reporting — now, it’s all in one place. The AI reports actually make sense, even for someone on deck.”</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr />
        <section id="Contact">
          <div className="flex flex-col items-center justify-center m-0 gap-[1vh] p-[2vh]">
            <h3 className="text-[5vh] m-0">Set Sail Now!!</h3>
            <div className="flex p-[5vh] gap-[10vh] justify-center items-center w-[80vw] h-[37vh]  m-0">
              <div className="flex flex-col text-[2.3vh] ">
                <p className="mb-5 text-[3.5vh]">Address:</p>
                <p>275, Seashore town,</p>
                <p>8th Ave,</p>
                <p>Panaiyur, Chennai,</p>
                <p>Tamil Nadu - 600119.</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-[1em]">
                <p className="text-[3.5vh]">Contact us</p>
                <div className='flex gap-[2em] text-[2.3vh]'>
                  <p>Phone: 6379670870</p>
                  <p>E-mail: <a href="mailto:mail.com">vbala3141@gmail.com</a></p>
                </div>
              </div>
            </div>
            <Map />
          </div>
        </section>
      </main>
    </>
    );
}

export default Landing;