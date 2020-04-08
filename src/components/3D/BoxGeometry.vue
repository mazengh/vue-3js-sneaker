<script>
import * as THREE from 'three';
import EventBus from '@/event-bus';

export default {
  name: 'box-geometry',
  props: {
    meshName: {
      type: String,
      required: true,
    },
    width: {
      Type: Number,
      default: 1,
    },
    height: {
      Type: Number,
      default: 1,
    },
    depth: {
      Type: Number,
      default: 1,
    },
  },
  data() {
    return {
      geometry: null,
    };
  },
  beforeMount() {
    this.geometry = new THREE.BoxGeometry(this.width, this.height, this.depth);
    EventBus.$emit('geometryCreated', { geometry: this.geometry, meshName: this.meshName });
  },
  render() {
    return null;
  },
};
</script>
