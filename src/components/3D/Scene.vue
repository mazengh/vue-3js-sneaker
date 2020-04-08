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
      container: null,
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
    setupDimensions() {
      const containerWidth = this.container.clientWidth;
      const containerHeight =
        window.innerWidth > window.innerHeight
          ? (containerWidth * window.innerHeight) / window.innerWidth
          : (containerWidth * window.innerHeight) / window.innerWidth / 2;

      this.dimensions = {
        width: containerWidth,
        height: containerHeight,
      };
    },
  },
  created() {
    this.scene = new THREE.Scene();
  },
  mounted() {
    this.container = document.querySelector('.renderer');
    this.setupDimensions();
    window.addEventListener('resize', this.setupDimensions);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.setupDimensions);
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
