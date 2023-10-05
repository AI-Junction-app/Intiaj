"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";

import { useScreenSize } from "@/app/utils/screenSize";
import Link from "next/link";

function MyworksComponent() {

  const ref = useRef(null);
  const inView = useInView(ref)

  return useScreenSize().isDesktopOrLaptop ? (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="bg-yellow-300 overflow-hidden h-screen flex items-center justify-center text-black "
      >
        {inView ? <div className="w-2/5 flex flex-col items-center justify-center text-center">
          <h1 style={{ color: "#756300" }} className="text-5xl font-bold ">
            Cooker
          </h1>
          <h2 style={{ fontFamily: 'Bebas-Regular' }} className="text-md text-gray-800">
            A Food Delivery App
          </h2>
          <h2 className="text-sm my-4 font-semibold text-gray-800 mx-24" >Cooker is a cutting-edge mobile application meticulously designed to revolutionize the food delivery experience.
            It&apos;s all about bringing the world of culinary delights to your doorstep, seamlessly and effortlessly.</h2>
          <div className="mx-24 flex flex-wrap justify-center">
            <p className="bg-white ml-2 my-1 text-black px-2 py-1 rounded-md text-xs font-bold shadow-sm shadow-slate-400">Modern Design</p>
            <p className="bg-white ml-2 my-1 text-black px-2 py-1 rounded-md text-xs font-bold shadow-sm shadow-slate-400">Real-time Functionality</p>
            <p className="bg-white ml-2 my-1 text-black px-2 py-1 rounded-md text-xs font-bold shadow-sm shadow-slate-400">Feature-Rich</p>
            <p className="bg-white ml-2 my-1 text-black px-2 py-1 rounded-md text-xs font-bold shadow-sm shadow-slate-400">Secure Payments</p>
          </div>
          <div className="flex items-center justify-center my-8 rounded-lg">
            <Link href={{
              pathname: '/works',
              query: { project: 'cooker' }
            }}>
              <div className="w-40 h-12 bg-indigo-400 rounded-lg flex justify-center hover:brightness-90 items-center shadow-lg shadow-indigo-300">
                <p style={{ fontFamily: 'Bebas-Regular' }} className="text-xl text-white">View Project</p>
              </div>
            </Link>
          </div>
        </div> : null}
        {inView ? <div className="w-3/5 flex flex-row justify-around">
          <motion.div
            initial={{ y: 500 }}
            animate={{ y: -1500 }}
            transition={{ duration: 15, repeat: Infinity, }}
          >
            <Image alt='works1'
              src={require("../../app/Icons/1.png")}
              height={500}
              width={200}
              style={{ marginBottom: 200 }}
            />
            <Image alt='works2'
              src={require("../../app/Icons/2.png")}
              height={500}
              width={200}
              style={{ marginBottom: 200 }}
            />
            <Image alt='works3' src={require("../../app/Icons/3.png")} height={500} width={200} />
          </motion.div>

          <motion.div
            initial={{ y: 500 }}
            animate={{ y: -1500 }}
            transition={{ duration: 10, repeat: Infinity, }}
          >
            <Image alt='works4'
              src={require("../../app/Icons/4.png")}
              height={500}
              width={200}
              style={{ marginBottom: 200 }}
            />
            <Image alt='works5'
              src={require("../../app/Icons/5.png")}
              height={500}
              width={200}
              style={{ marginBottom: 200 }}
            />
            <Image alt='works6' src={require("../../app/Icons/6.png")} height={500} width={200} />
          </motion.div>

          <motion.div
            initial={{ y: 500 }}
            animate={{ y: -1500 }}
            transition={{ duration: 15, repeat: Infinity, }}
          >
            <Image alt='works7'
              src={require("../../app/Icons/7.png")}
              height={500}
              width={200}
              style={{ marginBottom: 200 }}
            />
            <Image alt='works8'
              src={require("../../app/Icons/8.png")}
              height={500}
              width={200}
              style={{ marginBottom: 200 }}
            />
            <Image alt='works9' src={require("../../app/Icons/9.png")} height={500} width={200} />
          </motion.div>
        </div> : null}
      </motion.div>
    </AnimatePresence>
  ) : <AnimatePresence>
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="bg-yellow-300 overflow-hidden text-black pt-10"
    >
      {inView ? <div className="w-screen flex flex-col items-center justify-center">
        <h1 style={{ color: "#756300" }} className="text-4xl font-bold ">
          Cooker
        </h1>
        <h2 style={{ fontFamily: 'Bebas-Regular' }} className="text-md  text-gray-800">
          A Food Delivery App
        </h2>

        <h2 className="text-sm my-4 font-semibold text-gray-800 mx-10 text-start" >Cooker is a cutting-edge mobile application meticulously
          designed to revolutionize the food delivery experience.
          It&apos;s all about bringing the world of culinary delights to your doorstep,
          seamlessly and effortlessly.</h2>
        <div className="mx-4 flex flex-wrap justify-center">
          <p className="bg-white ml-2 my-1 text-black px-2 py-1 rounded-md text-xs font-bold shadow-sm shadow-slate-400">Modern Design</p>
          <p className="bg-white ml-2 my-1 text-black px-2 py-1 rounded-md text-xs font-bold shadow-sm shadow-slate-400">Real-time Functionality</p>
          <p className="bg-white ml-2 my-1 text-black px-2 py-1 rounded-md text-xs font-bold shadow-sm shadow-slate-400">Feature-Rich</p>
          <p className="bg-white ml-2 my-1 text-black px-2 py-1 rounded-md text-xs font-bold shadow-sm shadow-slate-400">Secure Payments</p>
        </div>

      </div> : null}
      {
        inView ?
          <div >
            <motion.div
              className="flex items-center flex-row my-5"
              initial={{ x: 500 }}
              animate={{ x: -700 }}
              transition={{ duration: 20, repeat: Infinity, }}
            >
              <Image alt='works1'
                src={require("../../app/Icons/1.png")}
                height={250}
                width={100}
                className="mx-5"
              />
              <Image alt='works2'
                src={require("../../app/Icons/2.png")}
                height={250}
                width={100}
                className="mx-5"
              />
              <Image alt='works3' src={require("../../app/Icons/3.png")} height={250}
                width={100} className="mx-5" />
              <Image alt='works4'
                src={require("../../app/Icons/7.png")}
                height={250}
                width={100}
                className="mx-5"
              />
            </motion.div>
            <motion.div
              className="flex items-center flex-row my-5"
              initial={{ x: 600 }}
              animate={{ x: -900 }}
              transition={{ duration: 22, repeat: Infinity, }}
            >
              <Image alt='works5'
                src={require("../../app/Icons/4.png")}
                height={250}
                width={100}
                className="mx-5"
              />
              <Image alt='works6'
                src={require("../../app/Icons/5.png")}
                height={250}
                width={100}
                className="mx-5"
              />
              <Image alt='works7' src={require("../../app/Icons/6.png")} height={250}
                width={100} className="mx-5" />
              <Image alt='works8'
                src={require("../../app/Icons/8.png")}
                height={250}
                width={100}
                className="mx-5"
              />
              <Image alt='works9' src={require("../../app/Icons/9.png")} height={250}
                width={100} className="mx-5" />
            </motion.div>

          </div> : null
      }
      <div className="flex items-center justify-center my-8 rounded-lg">
        <Link href={{
          pathname: '/works',
          query: { project: 'cooker' }
        }}>
          <div className="w-40 h-12 bg-indigo-400 rounded-lg flex justify-center items-center shadow-lg shadow-indigo-300">
            <p style={{ fontFamily: 'Bebas-Regular' }} className="text-lg text-white">View Project</p>
          </div>
        </Link>
      </div>

    </motion.div>
  </AnimatePresence>;
}

export default MyworksComponent;
