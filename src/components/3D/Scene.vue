<script>
import * as THREE from 'three';
import EventBus from '@/event-bus';

export default {
  name: 'scene',
  props: {},
  data() {
    return {
      scene: null,
      dimensions: null,
    };
  },
  computed: {
    aspect() {
      return this.dimensions ? this.dimensions.width / this.dimensions.height : 1;
    },
  },
  methods: {
    addObject(sceneObject) {
      this.scene.add(sceneObject);
      EventBus.$emit('render');
    },
  },
  created() {
    this.scene = new THREE.Scene();
  },
  mounted() {
    const container = document.querySelector('.renderer');
    const containerWidth = container.clientWidth;
    const containerHeight = (containerWidth * window.innerHeight) / window.innerWidth;

    this.dimensions = {
      width: containerWidth,
      height: containerHeight,
    };
  },
  render() {
    return this.$scopedSlots.default({
      scene: this.scene,
      addObject: this.addObject,
      dimensions: this.dimensions,
      aspect: this.aspect,
    });
  },
};
</script>
