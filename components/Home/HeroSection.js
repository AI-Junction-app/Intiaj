"use client";

import React, { Suspense } from "react";
import { motion } from "framer-motion";

import Typewriter from "typewriter-effect";
import Navbar from "./Navbar";
import { HeroThreeD } from "./HeroThreeD";
import Link from "next/link";

const words = [
  "<p style='color: deepskyblue'>freelancer</p>",
  "<p style='color: #32cfaf'>web developer</p>",
  "<p style='color: yellow'>mobile app developer</p>",
];

function HeroSection() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1 }}
      className={'w-screen md:flex md:flex-row'}
    >
      <div
        className="text-2xl font-bold w-screen md:text-5xl md:w-1/2"
        style={{ color: "black" }}
      >
        <Navbar />

        <div className="px-5 py-10 md:py-16 md:px-20">
          <h1 className="text-3xl md:text-5xl font-bold text-black selection:bg-rose-500 selection:text-white pt-20">
            Hi! {`I’m`} Intiaj Islam,
          </h1>

          <div style={{ height: 70 }} className="font-bold  md:text-5xl">
            <Typewriter
              options={{
                strings: words,
                autoStart: true,
                loop: true,
                cursor: "",
              }}
            />
          </div>

          <span className="text-gray-400 md:w-3/4 text-base flex flex-wrap">
            I can conjur a website from nothing into existence, fully formed. I do
            not use tricks, nor is this magic. I specialize in manipulating the
            very fabric of the web, its raw materials of HTML, CSS, JavaScript,
            and SVG. I can plan, design, build, launch, and maintain a website
            myself—did I mention that I build mobile apps too?
          </span>

          <Link href={'/contact'}>
            <button class="bg-purple-500 hover:bg-pink-500 text-white font-semibold py-2 px-4 rounded flex items-center text-base mt-4 w-40">
              <span class="mr-2">
                <svg class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M10 3a7 7 0 100 14 7 7 0 000-14zm0 12a5 5 0 100-10 5 5 0 000 10zm0-7a2 2 0 100-4 2 2 0 000 4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              Get Started
            </button>
          </Link>

        </div>


      </div>

      <div
        className='w-screen h-96 md:w-1/2 md:h-screen'
        style={{
          overflow: "hidden",
        }}
      >

        <Suspense
          fallback={() => null}
        >
          <HeroThreeD />
        </Suspense>
      </div>
    </motion.div>
  );
}

export default HeroSection;
