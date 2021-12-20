<template>  
  <section class="flex w-full justify-center mx-auto md:justify-self-end md:mx-2 order-last md:order-first md:max-w-md max-w-xs">
    <div class="grid w-full sm:grid-cols-2x justify-center justify-items-center">   
      <div id="viewer" class="w-80 h-80"></div>
      <div class="flex sm:flex-col justify-center items-center ml-1">
        <img src="@/assets/gear.svg" alt="settings" class="w-8 mb-5 hidden sm:block">          
        <PortfolioConfigChecker @clicked="switchDevice($event)" :data="isPhone" imgL="tablet" imgR="phone"/>
        <PortfolioConfigChecker @clicked="switchDisplay($event)" :data="display" imgL="switch-off" imgR="switch-on" />
        <PortfolioConfigColor v-for="(color, index) in bodyColors" :key="index" :color="color" @click="setActiveColor(index)" :index="index" :clickedID="selectedColorID" />
      </div>      
    </div>

  </section>  
</template>

<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

import PortfolioConfigChecker from '@/components/PortfolioConfigChecker.vue'
import PortfolioConfigColor from '@/components/PortfolioConfigColor.vue'

export default {
  components: {
      PortfolioConfigChecker,
      PortfolioConfigColor,
  },
  data() {
    return {
      scene: null,
      model: "devices",
      isPhone: true,
      display: true,
      selectedColorID: 0,
      bodyColors: ["rgb(20,20,20)","rgb(248,170,12)","rgb(208,208,227)"],
      frameColors: ["rgb(0,0,0)","rgb(0,0,0)","rgb(225,255,227)"],
    };
  },
  mounted: function() {   
    this.scene = renderModel(this.model);
  },

  methods: {
    setActiveColor(el) {
      this.selectedColorID = el;
      let scene = this.scene;
      scene.traverse(node => {
        if (node.isMesh) {       
          if (node.material.name == "FrameTop") {
            node.material.color = new THREE.Color(this.bodyColors[el]);                
          }
          if (node.material.name == "Body") {
            node.material.color = new THREE.Color(this.frameColors[el]);  
          }
        }
      })
    },
    switchDevice(value) {
      this.isPhone = value;
      let scene = this.scene;
      let tablet = scene.getObjectByName("TABLET");
      let phone = scene.getObjectByName("PHONE");
      tablet.visible = this.isPhone == false ? true : false;
      phone.visible = this.isPhone == true ? true : false;  
    },
    switchDisplay(value) {
      this.display = value;
      let scene = this.scene;
      scene.traverse(node => {
        if(node.isMesh) {          
          if(this.display == false) {            
            if (node.material.name == "Display" || node.material.name == "Display_tablet") node.material.color = new THREE.Color("rgb(0,0,0)");
          } else {
            if (node.material.name == "Display" || node.material.name == "Display_tablet") node.material.color = new THREE.Color("rgb(255,255,255)");
          }
        }
      })
    }
  }
};

function renderModel(loadedModel) {
  let publicPath = process.env.BASE_URL;
  let viewer = document.getElementById("viewer");
  let viewerWidth = viewer.offsetWidth;
  let viewerHeight = viewer.offsetHeight;

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(viewerWidth, viewerHeight);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.shadowMap.enabled = true;
  viewer.appendChild(renderer.domElement);

  const pmremGenerator = new THREE.PMREMGenerator(renderer);
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x859C60);
  scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;
  
  const camera = new THREE.PerspectiveCamera(45, viewerWidth / viewerHeight, 0.25, 20);
  camera.position.set(-4,2,8);
  camera.lookAt(new THREE.Vector3(0,0,0));  

  let light = new THREE.DirectionalLight(0xffffff, 3.0);
  light.position.set(10, 30, 10);
  light.target.position.set(0, 0, 0);
  light.castShadow = true;
  light.shadow.bias = -0.001;
  light.shadow.mapSize.width = 2048;
  light.shadow.mapSize.height = 2048;
  light.shadow.camera.near = 0.1;
  light.shadow.camera.far = 500.0;
  light.shadow.camera.near = 0.5;
  light.shadow.camera.far = 500.0;
  light.shadow.camera.left = 30;
  light.shadow.camera.right = -30;
  light.shadow.camera.top = 30;
  light.shadow.camera.bottom = -30;
  scene.add(light);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enablePan = false;
  controls.minDistance = 3;
  controls.maxDistance = 8;
  controls.target.set(0, 0.0, 0);
  controls.update();
  window.addEventListener("resize", onWindowResize);

  function LoadModel(model) {
    const loader = new GLTFLoader();
    loader.load(model, gltf => {
      gltf.scene.getObjectByName("TABLET").visible = false;
      gltf.scene.traverse(node => {
        node.castShadow = true;
        if (node.isMesh) {
          if (node.material.name == "FrameTop") node.material.color = new THREE.Color("rgb(20,20,20)");                
          if (node.material.name == "Body") node.material.color = new THREE.Color("rgb(0,0,0)");  
        }
      });
      scene.add(gltf.scene);
    });
  }

  function onWindowResize() {
    viewerWidth = viewer.offsetWidth;
    viewerHeight = viewer.offsetHeight;
    camera.aspect = viewerWidth / viewerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(viewerWidth, viewerHeight);
  }

  const animate = function() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  };

  let model = loadedModel;
  LoadModel(`${publicPath}models/${model}.gltf`);
  animate();

  return scene;
}
</script>
