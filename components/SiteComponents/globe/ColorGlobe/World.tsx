/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.2 world.glb
Author: Loïc Norgeot (https://sketchfab.com/norgeotloic)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/a-windy-day-fb78f4cc938144e6902dd5cff354d525
Title: A Windy Day
*/

import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";

export function World(props) {
  const group = useRef();
  const { nodes, materials, animations }: any = useGLTF("/model/world.glb");

  return (
    <group ref={group} scale={2.5} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="sketchfabtimeframe">
            <group name="Object_2" scale={2}>
              <group name="frame_49">
                {/* <points name="Object_4" scale={[0.01, .01, .5]} geometry={nodes.Object_4.geometry} material={materials['Scene_-_Root']} /> */}
                <points
                  name="Object_4"
                  geometry={nodes.Object_4.geometry}
                  material={materials["Scene_-_Root"]}
                />
                {/* <points name="Object_5" geometry={nodes.Object_5.geometry} material={materials['Scene_-_Root']} /> */}
                {/* <points name="Object_6" geometry={nodes.Object_6.geometry} material={materials['Scene_-_Root']} /> */}
              </group>
            </group>
            <group name="Object_247">
              <group name="frame_0">
                <points
                  name="Object_249"
                  geometry={nodes.Object_249.geometry}
                  material={materials["Scene_-_Root"]}
                />
                <points
                  name="Object_250"
                  geometry={nodes.Object_250.geometry}
                  material={materials["Scene_-_Root"]}
                />
                <points
                  name="Object_251"
                  geometry={nodes.Object_251.geometry}
                  material={materials["Scene_-_Root"]}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/world.glb");
