
import React from "react";
import { useGLTF } from "@react-three/drei";

export function Column({ x, y, z }) {
  const { nodes, materials } = useGLTF("/column.glb");
  return (
    <group dispose={null} scale={0.146} position={[x, y, z]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stone_pillar_Material021_0.geometry}
        material={materials["Material.021"]}
        position={[1, 0.408, 0.214]}
      />
    </group>
  );
}

useGLTF.preload("/column.glb");
