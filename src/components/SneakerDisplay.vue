<template>
  <div class="sneaker-display">
    <spinner />
    <scene #default="{scene, dimensions, aspect, addObject}">
      <perspective-camera
        :fov="40"
        :aspect="aspect"
        :near="0.25"
        :far="20"
        :position="{ x: -5, y: 10, z: 12 }"
        #default="{camera}"
      >
        <renderer :scene="scene" :camera="camera" :dimensions="dimensions" #default="{domElement}">
          <orbit-controls :camera="camera" :dom-element="domElement" />
          <hemisphere-light @created="addObject" />
          <spot-light
            :position="{ x: 0, y: 255, z: 50 }"
            :cast-shadow="true"
            :shadow-near="500"
            :shadow-far="4000"
            :shadow-fov="30"
            @created="addObject"
          />
          <spot-light
            :position="{ x: -100, y: 100, z: -150 }"
            :cast-shadow="true"
            :shadow-near="250"
            :shadow-far="2000"
            :shadow-fov="70"
            @created="addObject"
          />
          <point-light :distance="50" :position="{ x: 10, y: 0, z: 25 }" @created="addObject" />
          <point-light :distance="100" :position="{ x: 50, y: 50, z: 50 }" @created="addObject" />

          <mesh name="cubeMesh" :position="{ x: -3, y: 2, z: 2 }" @created="addObject" />
          <box-geometry meshName="cubeMesh" />
          <mesh-lambert-material meshName="cubeMesh" :color="cubeColor" />

          <loading-manager #default="{manager}">
            <gltf
              path="./shoe/scene.gltf"
              :scale="0.7"
              :mesh-colors="meshColors"
              :mesh-textures="meshTextures"
              :manager="manager"
              @created="addObject"
            />
          </loading-manager>
        </renderer>
      </perspective-camera>
    </scene>
  </div>
</template>

<script>
import Scene from '@/components/3D/Scene';
import PerspectiveCamera from '@/components/3D/PerspectiveCamera';
import Renderer from '@/components/3D/Renderer';
import OrbitControls from '@/components/3D/OrbitControls';
import HemisphereLight from '@/components/3D/HemisphereLight';
import SpotLight from '@/components/3D/SpotLight';
import PointLight from '@/components/3D/PointLight';
import Mesh from '@/components/3D/Mesh';
import MeshLambertMaterial from '@/components/3D/MeshLambertMaterial';
import BoxGeometry from '@/components/3D/BoxGeometry';
import LoadingManager from '@/components/3D/LoadingManager';
import Gltf from '@/components/3D/Gltf';
import Spinner from '@/components/Spinner';

export default {
  name: 'sneaker-display',
  components: {
    Scene,
    PerspectiveCamera,
    Renderer,
    OrbitControls,
    HemisphereLight,
    SpotLight,
    PointLight,
    Mesh,
    MeshLambertMaterial,
    BoxGeometry,
    LoadingManager,
    Gltf,
    Spinner,
  },
  computed: {
    cubeColor() {
      return this.$store.getters.cubeColor;
    },
    meshColors() {
      return this.$store.getters.shoeMeshColors;
    },
    meshTextures() {
      return this.$store.getters.shoeMeshTextures;
    },
  },
};
</script>
