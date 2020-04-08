<script>
import * as THREE from 'three';

export default {
  name: 'perspective-camera',
  props: {
    fov: {
      type: Number,
      default: 50,
    },
    aspect: {
      type: Number,
      default: 1,
    },
    near: {
      type: Number,
      default: 0.1,
    },
    far: {
      type: Number,
      default: 2000,
    },
    position: {
      type: Object,
      default: () => ({ x: 0, y: 1, z: 0 }),
    },
  },
  data() {
    return {
      camera: null,
    };
  },
  watch: {
    aspect(updatedAspect) {
      this.camera.aspect = updatedAspect;
      this.camera.updateProjectionMatrix();
    },
  },
  created() {
    this.camera = new THREE.PerspectiveCamera(this.fov, this.aspect, this.near, this.far);
    this.camera.position.set(this.position.x, this.position.y, this.position.z);
  },
  render() {
    return this.$scopedSlots.default({ camera: this.camera });
  },
};
</script>
