<script>
import * as THREE from 'three';

export default {
  name: 'point-light',
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
    position: {
      type: Object,
      default: () => ({ x: 0, y: 1, z: 0 }),
    },
  },
  created() {
    const pointLight = new THREE.PointLight(this.color, this.intensity, this.distance);
    pointLight.position.set(this.position.x, this.position.y, this.position.z);
    this.$emit('created', pointLight);
  },
  render() {
    return null;
  },
};
</script>
