"use client";

import * as THREE from "three";
import { useRef, useState, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  TrackballControls,
  Text,
  OrbitControls,
  Stars,
} from "@react-three/drei";
import { getRandomRainbowColor } from "@/app/utils/rainbowColor";
import Image from "next/image";
import { useScreenSize } from "@/app/utils/screenSize";
import { useInView } from "framer-motion";

const skillsArr = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "ES6",
  "Node.js",
  "Express.js",
  "Tailwind",
  "Firebase",
  "Git",
  "GitHub",
  "React Native",
  "Next.js",
  "Figma",
  "Photoshop",
  "Expo",
];

function Word({ children, ...props }) {
  const color = new THREE.Color();
  const fontProps = {
    font: "/fonts/BebasNeue-Regular.ttf",
    fontWeight: "800",
    fontSize: 2.5,
    letterSpacing: -0.05,
    lineHeight: 1,
    "material-toneMapped": false,
  };
  const ref = useRef();

  const [hovered, setHovered] = useState(false);
  const [colorRandom, setColorRandom] = useState(false);
  const over = (e) => (e.stopPropagation(), setHovered(true));
  const out = () => setHovered(false);
  getRandomRainbowColor().then((e) => {
    setColorRandom(e);
  });
  // Change the mouse cursor on hover
  useEffect(() => {
    if (hovered) document.body.style.cursor = "pointer";
    return () => (document.body.style.cursor = "auto");
  }, [hovered]);
  // Tie component to the render-loop
  useFrame(({ camera }) => {
    // Make text face the camera
    ref.current.quaternion.copy(camera.quaternion);
    // Animate font color
    ref.current.material.color.lerp(
      color.set(hovered ? "#fa2720" : colorRandom),
      0.1
    );
  });

  return (
    <Text
      ref={ref}
      onPointerOver={over}
      onPointerOut={out}
      onClick={() => console.log("clicked")}
      {...props}
      {...fontProps}
    >
      {children}
    </Text>
  );
}

function Cloud({ count = 4, radius = 20 }) {
  // Create a count x count random words with spherical distribution
  const words = useMemo(() => {
    let skillsArrCount = 0;
    const temp = [];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;
    for (let i = 1; i < count + 1; i++)
      for (let j = 0; j < count; j++)
        temp.push([
          new THREE.Vector3().setFromSpherical(
            spherical.set(radius, phiSpan * i, thetaSpan * j)
          ),
          skillsArr[skillsArrCount] ? skillsArr[skillsArrCount++] : "",
        ]);
    return temp;
  }, [count, radius]);
  return words.map(([pos, word], index) => (
    <Word key={index} position={pos}>{word}</Word>
  ));
}

export default function MySkills() {
  const widthNumber = useScreenSize().isDesktopOrLaptop ? 75 : 45;
  const ref = useRef(null);
  const inView = useInView(ref)
  return (
    <div ref={ref}>
      {inView ? <div className=" w-screen md:flex ">
        {/* Left section */}
        <div className="w-screen md:h-screen md:w-1/2 bg-violet-800 p-4">
          <h1
            style={{ fontFamily: 'Bebas-Regular' }}
            className="text-2xl font-semibold mb-4 text-center py-4 text-white"
          >
            My Skills
          </h1>
          {/* Add your text and images here */}
          <div>
            <div className="bg-white p-2 md:p-6 rounded-lg overflow-x-scroll md:no-scrollbar">
              <h1 className="text-black font-extrabold">Front-end Devolopment</h1>

              <div className="flex p-4 items-center justify-between">
                <Image
                  src={require("../../app/Icons/html-5.png")}
                  height={widthNumber}
                  width={widthNumber}
                  alt="HTML"
                />
                <Image
                  src={require("../../app/Icons/css-3.png")}
                  height={widthNumber}
                  width={widthNumber}
                  alt="CSS"
                />
                <Image
                  src={require("../../app/Icons/js.png")}
                  height={widthNumber}
                  width={widthNumber}
                  alt="JavaScript"
                />
                <Image
                  src={require("../../app/Icons/react.png")}
                  height={widthNumber}
                  width={widthNumber}
                  alt="React"
                />
                <div className="flex items-center flex-col">
                  <Image
                    src={require("../../app/Icons/rn.png")}
                    height={widthNumber}
                    width={widthNumber}
                    alt="React Native"
                  />
                  <p className="font-bold text-black text-sm">React Native</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-2 md:p-6 rounded-lg my-4 overflow-x-scroll md:no-scrollbar">
              <h1 className="text-black font-extrabold">Back-end Devolopment</h1>

              <div className="flex p-4 items-center justify-between">
                <div className="flex items-center flex-col">
                  <Image
                    src={require("../../app/Icons/firebase.png")}
                    height={widthNumber}
                    width={widthNumber}
                    alt="Firebase"
                  />
                  <p className="font-bold text-gray-700 text-sm">Firebase</p>
                </div>
                <Image
                  src={require("../../app/Icons/nodejs.png")}
                  height={widthNumber}
                  width={widthNumber}
                  alt="Node.js"
                />
                <Image
                  src={require("../../app/Icons/axios.png")}
                  height={widthNumber}
                  width={widthNumber}
                  alt="Axios"
                />
                <Image
                  src={require("../../app/Icons/vercel.jpg")}
                  height={widthNumber}
                  width={widthNumber}
                  alt="Vercel"
                />
                <Image
                  src={require("../../app/Icons/expo.png")}
                  height={75}
                  width={75}
                  alt="Expo"
                />
              </div>
            </div>

            <div className="bg-white p-2 md:p-6 rounded-lg my-4  overflow-x-scroll md:no-scrollbar">
              <h1 className="text-black font-extrabold">Design Tools</h1>

              <div className="flex p-4 items-center justify-start">
                <div className="flex items-center flex-col mr-16">
                  <Image
                    src={require("../../app/Icons/photoshop.png")}
                    height={widthNumber}
                    width={widthNumber}
                    alt="Photoshop"
                  />
                  <p className="font-bold text-gray-700 text-sm">Photoshop</p>
                </div>

                <div className="flex items-center flex-col">
                  <Image
                    src={require("../../app/Icons/figma.png")}
                    height={widthNumber}
                    width={widthNumber}
                    alt="Figma"
                  />
                  <p className="font-bold text-gray-700 text-sm">Figma</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-2 md:p-6 rounded-lg my-4 overflow-x-scroll md:no-scrollbar">
              <h1 className="text-black font-extrabold">
                Back-end Devolopment
              </h1>

              <div className="flex p-4 items-center justify-between">
                <div className="flex items-center flex-col">
                  <Image
                    src={require("../../app/Icons/firebase.png")}
                    height={widthNumber}
                    width={widthNumber}
                  />
                  <p className="font-bold text-gray-700 text-sm">Firebase</p>
                </div>
                <Image
                  src={require("../../app/Icons/nodejs.png")}
                  height={widthNumber}
                  width={widthNumber}
                />
                <Image
                  src={require("../../app/Icons/axios.png")}
                  height={widthNumber}
                  width={widthNumber}
                />
                <Image
                  src={require("../../app/Icons/vercel.jpg")}
                  height={widthNumber}
                  width={widthNumber}
                />
                <Image
                  src={require("../../app/Icons/expo.png")}
                  height={75}
                  width={75}
                />
              </div>
            </div>

            <div className="bg-white p-2 md:p-6 rounded-lg my-4  overflow-x-scroll md:no-scrollbar">
              <h1 className="text-black font-extrabold">Design Tools</h1>

              <div className="flex p-4 items-center justify-start">
                <div className="flex items-center flex-col mr-16">
                  <Image
                    src={require("../../app/Icons/photoshop.png")}
                    height={widthNumber}
                    width={widthNumber}
                  />
                  <p className="font-bold text-gray-700 text-sm">Photoshop</p>
                </div>

                <div className="flex items-center flex-col">
                  <Image
                    src={require("../../app/Icons/figma.png")}
                    height={widthNumber}
                    width={widthNumber}
                  />
                  <p className="font-bold text-gray-700 text-sm">Figma</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right section */}
        <div className="w-screen h-96 md:h-screen md:w-1/2">
          <Canvas
            dpr={[1, 2]}
            style={{ backgroundColor: "#202025" }}
            environment="warehouse"
            camera={{ position: [0, 0, 35], fov: 75 }}
          >
            <Stars
              radius={100}
              depth={50}
              count={5000}
              factor={4}
              saturation={0}
              fade
              speed={1}
            />

            <fog attach="fog" args={["#202025", 0, 90]} />

            <Cloud count={4} radius={15} />
            <OrbitControls target={[0, 1, 0]} autoRotate />

            <TrackballControls />
          </Canvas>
        </div>
      </div> : <div className="h-screen w-screen" />}
    </div>
  );
}
