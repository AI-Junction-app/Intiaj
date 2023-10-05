import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function CrismasTree({ x, y, z }) {
  const { nodes, materials } = useGLTF("/cTree.glb");
  return (
    <group dispose={null} scale={0.0065} castShadow position={[x, y, z]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.initialShadingGroup}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/cTree.glb");
