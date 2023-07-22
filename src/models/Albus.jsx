/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 scene.gltf 
Author: EWTube0 (https://sketchfab.com/EWTube0)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/harry-potter-albus-dumbledore-ad6fa36fd38b4e09a7b9f7bb098adf3c
Title: Harry Potter: Albus Dumbledore
*/

import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Albus(props) {
  const { nodes, materials } = useGLTF('/albus/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.Model001_Material001} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.Model001_Material002} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.Model001_Material003} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.Model001_Material004} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.Model001_Material005} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')