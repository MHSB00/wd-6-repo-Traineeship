
import React, { useState, useRef, useEffect } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { Canvas, extend, useThree, useFrame } from "@react-three/fiber"
import { Html, Stats, OrthographicCamera, PerspectiveCamera } from "@react-three/drei";

import "../src/App.css"
import { BoxGeometry } from "three"


extend({ OrbitControls })

function App() {

  const Controls = () => {
    const orbitRef = useRef()
    const { camera, gl } = useThree()

    // useFrame(() => {
    //   orbitRef.current.update()
    // })

    return (
      <orbitControls
        autoRotate
        maxPolarAngle={Math.PI / 3}
        minPolarAngle={Math.PI / 3}
        args={[camera, gl.domElement]}
        ref={orbitRef}
      />
    )
  }




  const Cube = () => (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
      <boxGeometry attach="geometry" args={[1, 1, 1]} />
      <meshBasicMaterial attach="material" color="red" />
    </mesh>
  )

  return (
    <div className="App">
      <Canvas>
        <ambientLight intensity={0.25} />
        <pointLight position={[5, 5, 5]} />
        <PerspectiveCamera/>
        <Cube />
        <Controls />
      </Canvas>
    </div >
  );
}

export default App;
