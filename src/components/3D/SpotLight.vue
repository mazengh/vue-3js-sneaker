<script>
import * as THREE from 'three';

export default {
  name: 'hemisphere-light',
  props: {
    color: {
      type: Number,
      default: 0xffffff,
    },
    intensity: {
      type: Number,
      default: 1,
    },
    distance: {
      type: Number,
      default: 0,
    },
    castShadow: {
      type: Boolean,
      default: false,
    },
    shadowNear: {
      type: Number,
      default: 0,
    },
    shadowFar: {
      type: Number,
      default: 0,
    },
    shadowFov: {
      type: Number,
      default: 0,
    },
    position: {
      type: Object,
      default: () => ({ x: 0, y: 1, z: 0 }),
    },
  },
  created() {
    const spotLight = new THREE.SpotLight(this.color, this.intensity, this.distance);
    spotLight.position.set(this.position.x, this.position.y, this.position.z);

    spotLight.castShadow = this.castShadow;
    if (this.castShadow) {
      spotLight.shadow.camera.near = this.shadowNear;
      spotLight.shadow.camera.far = this.shadowFar;
      spotLight.shadow.camera.fov = this.shadowFov;
    }

    this.$emit('created', spotLight);
  },
  render() {
    return null;
  },
};
</script>
