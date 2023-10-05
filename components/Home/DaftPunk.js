import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function DaftPunk() {
  const { nodes, materials } = useGLTF("/daft_punk.glb");
  return (
    <group dispose={null} scale={0.005} position={[2,-0.35,-2.3]}>
      <group
        position={[23.265, -0.115, 20.319]}
        rotation={[-1.566, 0, Math.PI / 2]}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[21.871, 90.855, -9.488]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[-1.256, 1.294, 1.174]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Object004_Material_#26_0"].geometry}
              material={materials.Material_26}
              position={[-12.929, 1.006, 0]}
            />
          </group>
          <group
            position={[21.871, 90.855, -9.534]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[-1.256, 1.256, 1.174]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["visor001_Material_#24_0"].geometry}
              material={materials.Material_24}
              position={[-12.929, 1.006, 0]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Object005_Material_#25_0"].geometry}
            material={materials.Material_25}
            position={[22.318, 94.618, 25.425]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[1.126, 1.126, 0.832]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Object006_Material_#26_0"].geometry}
            material={materials.Material_26}
            position={[22.318, 94.402, 25.425]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[1.126, 1.126, 0.832]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/daft_punk.glb");
