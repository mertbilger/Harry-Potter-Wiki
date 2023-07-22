/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 scene.gltf 
Author: Léonard_Doye Alias Leoskateman (https://sketchfab.com/leoskateman)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/old-french-mail-box-33d4fdde1bbb4a6b956fdc6ec2b3dda5
Title: Old French Mail Box
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/contact/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[-0.651, 1.022, 0.322]} rotation={[-2.13, 1.065, 0.622]}>
        <mesh geometry={nodes.Model_material0_0.geometry} material={materials.material0} rotation={[-Math.PI, 0, 0]} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')