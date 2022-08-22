import React, { Component } from 'react'
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import fragment from "./shader/fragment.glsl";
import vertex from "./shader/vertex.glsl";
import * as dat from "dat.gui";
import gsap from "gsap";

export default class Sketch extends Component {
  
  constructor(options) {
    super(options)
    this.time = 0;
    this.container = document.getElementById('root');
    this.scene = new THREE.Scene();

    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;

    this.camera = new THREE.PerspectiveCamera(70, this.width / this.height, 0.01, 10)
    this.camera.position.z = 1;

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(this.width, this.height);
    
    this.container.appendChild(this.renderer.domElement);

    console.log(this.container);


    this.addObjects()
    this.render();
  }
  
  resize() {

  }

  addObjects() {
    this.geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
    this.material = new THREE.MeshNormalMaterial();

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.mesh);
  }


  render() {
    this.time += 0.05
    this.mesh.rotation.x = this.time / 2000;
    this.mesh.rotation.y = this.time / 2000;

    this.renderer.render(this.scene, this.camera);
    window.requestAnimationFrame(this.render.bind(this));
    return 
  }


}

new Sketch({
  dom: document.getElementById('container')
});