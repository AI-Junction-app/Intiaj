import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from 'three'
export function Laptop(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/laptop.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (typeof document !== "undefined") {
      // Set the ArmatureAction to loop only once
      actions["ArmatureAction"].timeScale = 0.2;
      // Set the ArmatureAction to loop once
      actions["ArmatureAction"].setLoop(THREE.LoopOnce, 1);

      // Play the animation
      actions["ArmatureAction"].play();
    }

  }, [])
  return (
    <group ref={group} {...props} dispose={null} position={[-1, 0, 1]}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Armature_3" position={[0, 0.006, -0.1]}>
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.Material}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_8"
                    geometry={nodes.Object_8.geometry}
                    material={materials["Material.001"]}
                    skeleton={nodes.Object_8.skeleton}
                  />
                  <skinnedMesh
                    name="Object_9"
                    geometry={nodes.Object_9.geometry}
                    material={materials["Material.002"]}
                    skeleton={nodes.Object_9.skeleton}
                  />
                  <skinnedMesh
                    name="Object_10"
                    geometry={nodes.Object_10.geometry}
                    material={materials["Material.003"]}
                    skeleton={nodes.Object_10.skeleton}
                  />
                  <skinnedMesh
                    name="Object_11"
                    geometry={nodes.Object_11.geometry}
                    material={materials["Material.004"]}
                    skeleton={nodes.Object_11.skeleton}
                  />
                  <skinnedMesh
                    name="Object_12"
                    geometry={nodes.Object_12.geometry}
                    material={materials["Material.005"]}
                    skeleton={nodes.Object_12.skeleton}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/laptop.glb");