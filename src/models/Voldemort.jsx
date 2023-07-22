/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.9 scene.gltf 
Author: EWTube0 (https://sketchfab.com/EWTube0)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/harry-potter-lord-voldemort-9eac4f88939347638f4cb22323c72bb1
Title: Harry Potter: Lord Voldemort
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Voldemort(props) {
  const { nodes, materials } = useGLTF('/voldemort/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.Model001_Material001} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.Model001_Material002} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.Model001_Material003} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.Model001_Material004} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.Model001_Material005} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.Model001_Material006} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.Model001_Material007} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.Model001_Material008} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')