import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { angleToRadians } from "../utils/Angle";

export function Flowers2(props) {
  const { nodes, materials } = useGLTF("/flower2.glb");
  return (
    <group {...props} dispose={null} scale={0.012} rotation={[0, angleToRadians(60), angleToRadians(10)]} position={[0.4, -0.1, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle001_Material001_0.geometry}
        material={materials["Material.001"]}
        position={[19.357, 21.387, 11.669]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle006_Circle007_Material001_0.geometry}
        material={materials["Material.001"]}
        position={[-12.33, 25.214, 6.346]}
        scale={100}
      />
    </group>
  );
}

useGLTF.preload("/flower2.glb");