"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useScreenSize } from "@/app/utils/screenSize";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { Float, OrbitControls } from "@react-three/drei";


function MyDesigns() {
  const [clicked, setClicked] = useState(false)
  const ref = useRef(null);
  const inView = useInView(ref)

  return useScreenSize().isDesktopOrLaptop ? (
    <motion.div
      ref={ref}
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat',
        backgroundImage: 'url("data:image/svg+xml;utf8,%3Csvg width=%222000%22 height=%221400%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cstyle%3E.shadow_right{-webkit-filter:drop-shadow(-5px -5px 15px %23b6d8c0);filter:drop-shadow(-5px -5px 15px %23b6d8c0)}.shadow_left{-webkit-filter:drop-shadow(5px 5px 15px %23b6d8c0);filter:drop-shadow(5px 5px 15px %23b6d8c0)}%3C%2Fstyle%3E%3Cdefs%3E%3ClinearGradient id=%22gradient__0%22 x1=%220%22 y1=%220%22 x2=%220%22 y2=%221%22%3E%3Cstop stop-color=%22%23b6d8c0%22 offset=%220%25%22%2F%3E%3Cstop stop-color=%22%23c8d9bf%22 offset=%2210%25%22%2F%3E%3Cstop stop-color=%22%23dadabd%22 offset=%2220%25%22%2F%3E%3Cstop stop-color=%22%23ecdbbc%22 offset=%2230%25%22%2F%3E%3Cstop stop-color=%22%23fedcba%22 offset=%2240%25%22%2F%3E%3Cstop stop-color=%22%23fff%22 offset=%2250%25%22%2F%3E%3Cstop stop-color=%22%23fedcba%22 offset=%2260%25%22%2F%3E%3Cstop stop-color=%22%23ecdbbc%22 offset=%2270%25%22%2F%3E%3Cstop stop-color=%22%23dadabd%22 offset=%2280%25%22%2F%3E%3Cstop stop-color=%22%23c8d9bf%22 offset=%2290%25%22%2F%3E%3Cstop stop-color=%22%23b6d8c0%22 offset=%22100%25%22%2F%3E%3C%2FlinearGradient%3E%3Cfilter id=%22grain%22 x=%22-1000%22 y=%22-700%22 width=%224000%22 height=%222800%22 filterUnits=%22userSpaceOnUse%22%3E&gt;%3CfeFlood flood-color=%22%23fff%22 result=%22neutral-gray%22%2F%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%222.5%22 numOctaves=%22100%22 stitchTiles=%22stitch%22 result=%22noise%22%2F%3E%3CfeColorMatrix in=%22noise%22 type=%22saturate%22 values=%220%22 result=%22destaturatedNoise%22%2F%3E%3CfeComponentTransfer in=%22desaturatedNoise%22 result=%22theNoise%22%3E%3CfeFuncA type=%22table%22 tableValues=%220 0 0.4 0%22%2F%3E%3C%2FfeComponentTransfer%3E%3CfeBlend in=%22SourceGraphic%22 in2=%22theNoise%22 mode=%22soft-light%22 result=%22noisy-image%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Cg filter=%22url(%23grain)%22%3E%3Cpath fill=%22%23b6d8c0%22 d=%22M0 0h2000v1400H0z%22%2F%3E%3Cpath id=%22rect__4%22 fill=%22url(%23gradient__0)%22 d=%22M888.889 311.111h222.222v777.778H888.889z%22%2F%3E%3Cpath class=%22shadow_left%22 id=%22rect__5%22 fill=%22url(%23gradient__0)%22 d=%22M1111.111 233.333h222.222v933.333h-222.222z%22%2F%3E%3Cpath class=%22shadow_left%22 id=%22rect__6%22 fill=%22url(%23gradient__0)%22 d=%22M1333.333 155.556h222.222v1088.889h-222.222z%22%2F%3E%3Cpath class=%22shadow_left%22 id=%22rect__7%22 fill=%22url(%23gradient__0)%22 d=%22M1555.556 77.778h222.222v1244.444h-222.222z%22%2F%3E%3Cpath class=%22shadow_left%22 id=%22rect__8%22 fill=%22url(%23gradient__0)%22 d=%22M1777.778 0H2000v1400h-222.222z%22%2F%3E%3Cpath class=%22shadow_right%22 id=%22rect__3%22 fill=%22url(%23gradient__0)%22 d=%22M666.667 233.333h222.222v933.333H666.667z%22%2F%3E%3Cpath class=%22shadow_right%22 id=%22rect__2%22 fill=%22url(%23gradient__0)%22 d=%22M444.444 155.556h222.222v1088.889H444.444z%22%2F%3E%3Cpath class=%22shadow_right%22 id=%22rect__1%22 fill=%22url(%23gradient__0)%22 d=%22M222.222 77.778h222.222v1244.444H222.222z%22%2F%3E%3Cpath class=%22shadow_right%22 id=%22rect__0%22 fill=%22url(%23gradient__0)%22 d=%22M0 0h222.222v1400H0z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E")',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden h-auto w-screen flex items-center justify-center text-black relative"
    >

      <div className="text-black w-1/2 h-full p-20">
        <h1 style={{ fontFamily: 'Bebas-Regular' }} className="text-4xl font-bold text-start text-white w-auto backdrop-blur-lg">
          Some of my design works
        </h1>
        <h2 className="text-white font-semibold text-lg">Designed Stunning Logos, Posters and Banners for Cooker</h2>
        <div className="flex items-center justify-around my-14">
          <div className="m-2">
            <Image alt="d1" src={require('../../app/Icons/d1.png')} height={600} width={300} />
            <p style={{ fontSize: 8 }} className="font-bold mx-1">Poster1.png</p>
          </div>
          <div className="m-2">
            <Image alt="d2" src={require('../../app/Icons/d2.png')} height={600} width={300} />
            <p style={{ fontSize: 8 }} className="font-bold mx-1">Poster2.png</p>
          </div>
          <div className="m-2">
            <Image alt="d3" src={require('../../app/Icons/d3.png')} height={600} width={300} />
            <p style={{ fontSize: 8 }} className="font-bold mx-1">Poster3.png</p>
          </div>
        </div>

        <div className="flex">
          <div className=" font-bold flex-col m-4 text-xs text-white">
            <div className="h-14 w-14 rounded-md" style={{ backgroundColor: '#ffffff' }} />
            <p className="mt-1">#FFFFFF</p>
          </div>
          <div className=" font-bold flex-col m-4 text-xs text-white">
            <div className="h-14 w-14 rounded-md" style={{ backgroundColor: '#EE3947' }} />
            <p className="mt-1">#EE3947</p>
          </div>
          <div className=" font-bold flex-col m-4 text-xs text-white">
            <div className="h-14 w-14 rounded-md" style={{ backgroundColor: '#FFE15D' }} />
            <p className="mt-1">#FFE15D</p>
          </div>
          <div className=" font-bold flex-col m-4 text-xs text-white">
            <div className="h-14 w-14 rounded-md" style={{ backgroundColor: '#E27C88' }} />
            <p className="mt-1">#E27C88</p>
          </div>
          <div className=" font-bold flex-col m-4 text-xs text-white">
            <div className="h-14 w-14 rounded-md" style={{ backgroundColor: '#564900' }} />
            <p className="mt-1">#564900</p>
          </div>
          <div className=" font-bold flex-col m-4 text-xs text-white">
            <div className="h-14 w-14 rounded-md" style={{ backgroundColor: '#756300' }} />
            <p className="mt-1">#756300</p>
          </div>
        </div>


      </div>
      {inView ? (
        <div className="w-1/2 h-screen p-20 ">
          <div className="flex items-center justify-evenly my-10">
            <div>
              <Image alt="d4" src={require('../../public/logo512.png')} height={100} width={100} className="rounded-md" />
              <p style={{ fontSize: 8 }} className="font-bold m-1">Cooker_Logo.png</p>
            </div>
            <div>
              <Image alt='d5' src={require('../../public/cpp.png')} height={100} width={100} className="rounded-md" />
              <p style={{ fontSize: 8 }} className="font-bold m-1">Cooker_Partner.png</p>
            </div>
            <div>
              <Image alt="d6" src={require('../../public/cdp.png')} height={100} width={100} className="rounded-md" />
              <p style={{ fontSize: 8 }} className="font-bold m-1">Cooker_Delivery.png</p>
            </div>
          </div>

          <div className="overflow-hidden mx-14">
            <Image alt="d7" src={require('../../app/Icons/d4.gif')} height={200} width={500} className="rounded-2xl" />
            <Image alt="d8" src={require('../../app/Icons/d5.png')} height={200} width={500} className="rounded-2xl" />
          </div>
        </div>
      ) : null}
    </motion.div>
  ) : !clicked ? <motion.div className=""
    ref={ref}
    initial={{ opacity: 0 }}
    animate={{ opacity: inView ? 1 : 0 }}
    transition={{ duration: 1 }}>


    <div className="relative " style={{
      width: '100vw',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'repeat',
      backgroundImage: 'url("data:image/svg+xml;utf8,%3Csvg width=%222000%22 height=%221400%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cstyle%3E.shadow_right{-webkit-filter:drop-shadow(-5px -5px 15px %23b6d8c0);filter:drop-shadow(-5px -5px 15px %23b6d8c0)}.shadow_left{-webkit-filter:drop-shadow(5px 5px 15px %23b6d8c0);filter:drop-shadow(5px 5px 15px %23b6d8c0)}%3C%2Fstyle%3E%3Cdefs%3E%3ClinearGradient id=%22gradient__0%22 x1=%220%22 y1=%220%22 x2=%220%22 y2=%221%22%3E%3Cstop stop-color=%22%23b6d8c0%22 offset=%220%25%22%2F%3E%3Cstop stop-color=%22%23c8d9bf%22 offset=%2210%25%22%2F%3E%3Cstop stop-color=%22%23dadabd%22 offset=%2220%25%22%2F%3E%3Cstop stop-color=%22%23ecdbbc%22 offset=%2230%25%22%2F%3E%3Cstop stop-color=%22%23fedcba%22 offset=%2240%25%22%2F%3E%3Cstop stop-color=%22%23fff%22 offset=%2250%25%22%2F%3E%3Cstop stop-color=%22%23fedcba%22 offset=%2260%25%22%2F%3E%3Cstop stop-color=%22%23ecdbbc%22 offset=%2270%25%22%2F%3E%3Cstop stop-color=%22%23dadabd%22 offset=%2280%25%22%2F%3E%3Cstop stop-color=%22%23c8d9bf%22 offset=%2290%25%22%2F%3E%3Cstop stop-color=%22%23b6d8c0%22 offset=%22100%25%22%2F%3E%3C%2FlinearGradient%3E%3Cfilter id=%22grain%22 x=%22-1000%22 y=%22-700%22 width=%224000%22 height=%222800%22 filterUnits=%22userSpaceOnUse%22%3E&gt;%3CfeFlood flood-color=%22%23fff%22 result=%22neutral-gray%22%2F%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%222.5%22 numOctaves=%22100%22 stitchTiles=%22stitch%22 result=%22noise%22%2F%3E%3CfeColorMatrix in=%22noise%22 type=%22saturate%22 values=%220%22 result=%22destaturatedNoise%22%2F%3E%3CfeComponentTransfer in=%22desaturatedNoise%22 result=%22theNoise%22%3E%3CfeFuncA type=%22table%22 tableValues=%220 0 0.4 0%22%2F%3E%3C%2FfeComponentTransfer%3E%3CfeBlend in=%22SourceGraphic%22 in2=%22theNoise%22 mode=%22soft-light%22 result=%22noisy-image%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Cg filter=%22url(%23grain)%22%3E%3Cpath fill=%22%23b6d8c0%22 d=%22M0 0h2000v1400H0z%22%2F%3E%3Cpath id=%22rect__4%22 fill=%22url(%23gradient__0)%22 d=%22M888.889 311.111h222.222v777.778H888.889z%22%2F%3E%3Cpath class=%22shadow_left%22 id=%22rect__5%22 fill=%22url(%23gradient__0)%22 d=%22M1111.111 233.333h222.222v933.333h-222.222z%22%2F%3E%3Cpath class=%22shadow_left%22 id=%22rect__6%22 fill=%22url(%23gradient__0)%22 d=%22M1333.333 155.556h222.222v1088.889h-222.222z%22%2F%3E%3Cpath class=%22shadow_left%22 id=%22rect__7%22 fill=%22url(%23gradient__0)%22 d=%22M1555.556 77.778h222.222v1244.444h-222.222z%22%2F%3E%3Cpath class=%22shadow_left%22 id=%22rect__8%22 fill=%22url(%23gradient__0)%22 d=%22M1777.778 0H2000v1400h-222.222z%22%2F%3E%3Cpath class=%22shadow_right%22 id=%22rect__3%22 fill=%22url(%23gradient__0)%22 d=%22M666.667 233.333h222.222v933.333H666.667z%22%2F%3E%3Cpath class=%22shadow_right%22 id=%22rect__2%22 fill=%22url(%23gradient__0)%22 d=%22M444.444 155.556h222.222v1088.889H444.444z%22%2F%3E%3Cpath class=%22shadow_right%22 id=%22rect__1%22 fill=%22url(%23gradient__0)%22 d=%22M222.222 77.778h222.222v1244.444H222.222z%22%2F%3E%3Cpath class=%22shadow_right%22 id=%22rect__0%22 fill=%22url(%23gradient__0)%22 d=%22M0 0h222.222v1400H0z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E")',
    }}>

      <h1 style={{ fontFamily: 'Bebas-Regular' }} className="text-2xl font-semibold text-center p-5 ">
        Some of my design works
      </h1>
      <h2 className="text-white font-semibold mx-10 text-sm">Designed Stunning Logos, Posters and Banners for Cooker</h2>

      <div className="flex items-center justify-between m-10">
        <Image alt="d9" src={require('../../public/logo512.png')} height={75} width={75} />
        <Image alt="d10" src={require('../../public/cdp.png')} height={75} width={75} />
        <Image alt="d11" src={require('../../public/cpp.png')} height={75} width={75} />
      </div>

      <div className="flex items-center justify-between m-10">
        <motion.div onClick={() => setClicked('1')}>
          <Image alt="d12" src={require('../../app/Icons/d1.png')} height={200} width={100} />
        </motion.div>
        <motion.div onClick={() => setClicked('2')}>
          <Image alt="d13" src={require('../../app/Icons/d2.png')} height={200} width={100} />
        </motion.div>
        <motion.div onClick={() => setClicked('3')}>
          <Image alt="d14" src={require('../../app/Icons/d3.png')} height={200} width={100} />
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center overflow-hidden mx-14">
        <Image alt="d15" src={require('../../app/Icons/d4.gif')} height={200} width={500} className="rounded-2xl" />
        <Image alt="d16" src={require('../../app/Icons/d5.png')} height={200} width={500} className="rounded-2xl" />
      </div>
    </div>

  </motion.div> :

    <div className="h-screen w-screen flex items-center justify-center relative" >
      <div onClick={() => setClicked(false)} className="absolute flex-col right-5 top-32 font-bold flex items-center justify-center z-50">
        <Image alt="d17" src={require('../../app/Icons/close.png')} height={55} width={55} />
        <p>Close</p></div>
      <Image alt="d18" src={clicked === '1' ? require('../../app/Icons/d1.png') : clicked === '2' ? require('../../app/Icons/d2.png') : require('../../app/Icons/d3.png')} height={720} width={480} />
    </div>
}

export default MyDesigns;
