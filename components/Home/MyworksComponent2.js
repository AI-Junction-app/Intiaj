"use client";

import React, { useRef } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import Image from "next/image";
import { useScreenSize } from "@/app/utils/screenSize";
import Link from "next/link";


export default function MyworksComponent2() {

  const ref = useRef(null);
  const inView = useInView(ref)
  return useScreenSize().isDesktopOrLaptop ? (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="bg-indigo-300 overflow-hidden max-h-screen flex items-center justify-center text-black"
    >
      {inView ? <div className="text-black flex-1 flex items-center justify-center flex-col">
        <h1 style={{ fontFamily: 'Bebas-Regular' }} className="text-3xl text-center w-64 font-semibold text-indigo-950">
          Cooker Delivery Partner | Cooker Partner | Cooker Admin
        </h1>

        <h2 className="text-sm my-4 font-semibold text-gray-800 mx-24 text-center">Cooker Partner is a powerful mobile application designed to empower restaurant owners and seamlessly integrate them into the Cooker ecosystem.
          This extension of Cooker allows restaurant owners to efficiently manage orders, menus, payments, and order history.
          I collaborated with Cooker Partner to enhance its user experience,
          and I&apos;m thrilled to showcase its capabilities and innovations.</h2>

        <div className="flex items-center justify-center  my-8 rounded-lg">
          <Link href={{
            pathname: '/works',
            query: { project: 'cpp' }
          }}>
            <div className="w-40 h-12 bg-yellow-400 rounded-lg flex justify-center items-center hover:brightness-90 shadow-lg shadow-yellow-300">
              <p style={{ fontFamily: 'Bebas-Regular' }} className="text-xl text-white">View Project</p>
            </div>
          </Link>
        </div>
      </div> : null}


      {inView ? (
        <div className="w-3/5 flex flex-row justify-around">
          <motion.div
            initial={{ y: 500 }}
            animate={{ y: -1400 }}
            transition={{ duration: 20, repeat: Infinity }}
          >
            <Image alt="ca4"
              src={require("../../app/Icons/ca4.png")}
              height={500}
              width={200}
              style={{ marginBottom: 200 }}
            />
            <Image alt="ca5"
              src={require("../../app/Icons/ca2.png")}
              height={500}
              width={200}
              style={{ marginBottom: 200 }}
            />
            <Image alt="ca6" src={require("../../app/Icons/ca3.jpg")} height={500} width={200} />
          </motion.div>

          <motion.div
            initial={{ y: 500 }}
            animate={{ y: -1400 }}
            transition={{ duration: 15, repeat: Infinity }}
          >
            <Image alt="ca7"
              src={require("../../app/Icons/cpp1.png")}
              height={500}
              width={200}
              style={{ marginBottom: 200 }}
            />
            <Image alt="ca8"
              src={require("../../app/Icons/cpp2.png")}
              height={500}
              width={200}
              style={{ marginBottom: 200 }}
            />
            <Image alt="ca9" src={require("../../app/Icons/ca5.png")} height={500} width={200} />
          </motion.div>

          <motion.div
            initial={{ y: 500 }}
            animate={{ y: -1400 }}
            transition={{ duration: 20, repeat: Infinity }}
          >
            <Image alt="ca10"
              src={require("../../app/Icons/cpp4.png")}
              height={500}
              width={200}
              style={{ marginBottom: 200 }}
            />
            <Image alt="ca11"
              src={require("../../app/Icons/cpp5.png")}
              height={500}
              width={200}
              style={{ marginBottom: 200 }}
            />
            <Image alt="ca21" src={require("../../app/Icons/cpp6.png")} height={500} width={200} />
          </motion.div>
        </div>
      ) : null}
    </motion.div>
  ) : <AnimatePresence>
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden h-auto text-black pt-10 bg-indigo-300"
    >
      {inView ? <div>
        <div className="text-black flex-1 flex items-center justify-center flex-col">
          <h1 style={{ fontFamily: 'Bebas-Regular' }} className="text-2xl font-semibold text-center w-64">
            Cooker Delivery Partner | Cooker Partner | Cooker Admin
          </h1>
          <h2 className="text-sm my-4 font-semibold text-gray-800 mx-10 text-start">Cooker Partner is a powerful mobile application designed to empower restaurant owners and seamlessly integrate them into the Cooker ecosystem.
            This extension of Cooker allows restaurant owners to efficiently manage orders, menus, payments, and order history.
            I collaborated with Cooker Partner to enhance its user experience,
            and I&apos;m thrilled to showcase its capabilities and innovations.</h2>
        </div>

        <div >
          <motion.div
            className="flex items-center flex-row my-5"
            initial={{ x: 400 }}
            animate={{ x: -500 }}
            transition={{ duration: 10, repeat: Infinity, }}
          >
            <Image alt='ca1'
              src={require("../../app/Icons/ca1.gif")}
              height={250}
              width={100}
              className="mx-5"
            />
            <Image alt='ca2'
              src={require("../../app/Icons/ca2.png")}
              height={250}
              width={100}
              className="mx-5"
            />
            <Image alt='ca3' src={require("../../app/Icons/ca3.jpg")} height={250}
              width={100} className="mx-5" />
            <Image alt='ca4' src={require("../../app/Icons/ca5.png")} height={250}
              width={100} className="mx-5" />

          </motion.div>
          <motion.div
            className="flex items-center flex-row my-5"
            initial={{ x: 500 }}
            animate={{ x: -600 }}
            transition={{ duration: 11, repeat: Infinity, }}
          >
            <Image alt='ca5'
              src={require("../../app/Icons/cpp1.png")}
              height={250}
              width={100}
              className="mx-5"
            />
            <Image alt='ca6'
              src={require("../../app/Icons/cpp2.png")}
              height={250}
              width={100}
              className="mx-5"
            />
            <Image alt='ca7' src={require("../../app/Icons/cpp4.png")} height={250}
              width={100} className="mx-5" />
            <Image alt='ca8' src={require("../../app/Icons/cpp5.png")} height={250}
              width={100} className="mx-5" />


          </motion.div>

          <div className="flex items-center justify-center my-8 rounded-lg">
            <Link href={{
              pathname: '/works',
              query: { project: 'cpp' }
            }}>
              <div className="w-40 h-12 bg-yellow-400 rounded-lg flex justify-center items-center shadow-lg shadow-yellow-300">
                <p className="font-bold text-black">View Project</p>
              </div>
            </Link>
          </div>

        </div>

      </div> : <div className="h-screen w-screen"></div>}


    </motion.div>
  </AnimatePresence>
}
