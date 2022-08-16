
import React, { useState, useRef, useEffect } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { Canvas, extend, useThree, useRender } from "@react-three/fiber"
import { AmbientLightProbe, PerspectiveCamera } from "three"


function App() {

const canvas = () =>{

}

  return (
    <div className="App">
      <Canvas>
        <mesh>
          <boxBufferGeometry attach="geometry" args={[1,1,1]}/>
        </mesh>

      </Canvas>
    </div>
  );
}

export default App;
