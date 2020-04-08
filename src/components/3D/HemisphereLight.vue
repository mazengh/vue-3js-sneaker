<script>
import * as THREE from 'three';

export default {
  name: 'hemisphere-light',
  props: {
    skyColor: {
      type: Number,
      default: 0xffffff,
    },
    groundColor: {
      type: Number,
      default: 0xffffff,
    },
    intensity: {
      type: Number,
      default: 1,
    },
    position: {
      type: Object,
      default: () => ({ x: 0, y: 1, z: 0 }),
    },
  },
  created() {
    const hemisphereLight = new THREE.HemisphereLight(this.skyColor, this.groundColor, this.intensity);
    hemisphereLight.position.set(this.position.x, this.position.y, this.position.z);
    this.$emit('created', hemisphereLight);
  },
  render() {
    return null;
  },
};
</script>
