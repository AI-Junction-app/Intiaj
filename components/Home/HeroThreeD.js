"use client";

import * as THREE from "three";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import {
  CameraControls,
  Sparkles,
  MeshDistortMaterial,
  Environment,
  useCursor,
} from "@react-three/drei";
import { angleToRadians } from "../utils/Angle";
import { useEffect, useRef, useState } from "react";
import { Laptop } from "./Laptop";
import { Tree } from "./Tree";
import { CloudOne } from "./CloudOne";
import { Flowers } from "./Flowers";
import { Column } from "./Column";
import { HtmlLogo } from "./HtmlLogo";
import { CssLogo } from "./CssLogo";
import { ReactLogo } from "./ReactLogo";
import { Cat } from "./Cat";
import { Birds } from "./Birds";
import { CrismasTree } from "./CrismasTree";
import { Flowers2 } from "./Flowers2";
import { DaftPunk } from "./DaftPunk";
import { Fire } from "./Fire";
import { useScreenSize } from "../../app/utils/screenSize";


export const HeroThreeD = () => {
  const texture = new THREE.TextureLoader().load("/javascript-logo.png");
  return (
    <Canvas
      className={useScreenSize().isDesktopOrLaptop ? 'h-screen' : 'h-1/2'}
      style={{
        cursor: "grab",
      }}
      gl={{ localClippingEnabled: true }}
      camera={{ fov: 85, position: [0, 0.7, 3.2] }}
      eventPrefix="client"
      shadows="soft"
    >
      <Frame />
      <Floor />
      <Laptop />
      <Tree position={[-1.75, 0, -2.5]} />

      <Flowers />
      <Column x={-1.65} y={0} z={0.25} />
      <HtmlLogo x={-1.5} y={1} z={0.25} />
      <Column x={-0.78} y={0} z={-0.75} />
      <CssLogo x={-0.65} y={1.5} z={-0.75} />
      <Column x={0.55} y={0} z={-0.75} />
      <mesh scale={0.5} position={[0.65, 1.7, -0.75]} castShadow>
        <boxGeometry args={[1.25, 1.25, 0.03]} />
        <meshStandardMaterial map={texture} metalness={0.3} roughness={0.01} />
      </mesh>
      <Column x={1.35} y={0} z={0.25} />
      <ReactLogo x={1.5} y={1.6} z={0.25} />

      <Cat />

      <Birds />

      <DaftPunk />

      <Fire />

      <CrismasTree x={-1.3} y={-0.10} z={-1.3} />
      <CrismasTree x={0} y={-0.10} z={-2} />
      <CrismasTree x={0.6} y={-0.10} z={-1} />

      <Flowers2 />



      <CloudOne
        x={0}
        y={50}
        z={-20}
        rx={-angleToRadians(5)}
        ry={angleToRadians(10)}
        rz={0}
      />
      <CloudOne x={-50} y={10} z={0} rx={0} ry={0} rz={0} />

      <directionalLight
        position={[0, 0, 1]}
        intensity={1.5}
        color={"#ffffff"}
      />
      <directionalLight
        position={[0, 4, 0]}
        intensity={0.5}
        color={"#ffffff"}
      />
      <ambientLight intensity={0.3} />

      <Sparkles
        count={50}
        size={1}
        speed={0.4}
        color={"#f6e5f6"}
        position={[0, 0.5, 0]}
      />

      <spotLight
        args={["white"]}
        distance={100}
        intensity={1}
        position={[0, 1, 0]}
        castShadow
      />

      <Environment background>
        <mesh scale={10}>
          <sphereGeometry args={[1, 64, 64]} />
          <meshBasicMaterial color="#3CA1D5" side={THREE.BackSide} />
        </mesh>
      </Environment>

      <CameraControls
        makeDefault
        minAzimuthAngle={-Math.PI / 2.5}
        maxAzimuthAngle={Math.PI / 2.5}
        minPolarAngle={0.5}
        maxPolarAngle={Math.PI / 2.2}
      />
    </Canvas>
  );
};

function Frame() {
  const texture = new THREE.TextureLoader().load("/intiaj.jpeg");
  const ref = useRef(null);
  const [hovered, hover] = useState(false);
  useCursor(hovered);
  useFrame(() => {
    ref.current.distort = THREE.MathUtils.lerp(
      ref.current.distort,
      hovered ? 0.4 : 0,
      hovered ? 0.05 : 0.01
    );
  });
  return (
    <mesh position={[0, 0.5, 0]} castShadow onPointerOver={() => hover(true)}>
      <boxGeometry args={[1, 1.5, 0.03]} />
      <MeshDistortMaterial ref={ref} map={texture} speed={5} />
    </mesh>
  );
}

function Floor() {

  return (
    <mesh scale={1.1} rotation={[-angleToRadians(90), 0, 0]} receiveShadow>
      <planeGeometry args={[10, 10]} />
      <meshToonMaterial color={"#39B1A1"} />
    </mesh>
  );
}
