<script>
import * as THREE from 'three';
import EventBus from '@/event-bus';

export default {
  name: 'mesh-lambert-material',
  props: {
    meshName: {
      type: String,
      required: true,
    },
    color: {
      Type: Number,
      default: 0x000000,
    },
  },
  data() {
    return {
      material: null,
    };
  },
  watch: {
    color(val) {
      this.material.color.setHex(val);
      EventBus.$emit('render');
    },
  },
  beforeMount() {
    this.material = new THREE.MeshLambertMaterial({ color: this.color });
    EventBus.$emit('materialCreated', { material: this.material, meshName: this.meshName });
  },
  render() {
    return null;
  },
};
</script>
