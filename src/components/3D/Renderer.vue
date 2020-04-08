<template>
  <div class="renderer">
    <slot :dom-element="domElement"></slot>
  </div>
</template>

<script>
import * as THREE from 'three';
import EventBus from '@/event-bus';

export default {
  name: 'renderer',
  props: {
    scene: {
      type: Object,
      default: null,
    },
    camera: {
      type: Object,
      default: null,
    },
    dimensions: {
      type: Object,
      default: null,
    },
    clearColor: {
      type: Number,
      default: 0xfafafa,
    },
  },
  data() {
    return {
      renderer: null,
    };
  },
  computed: {
    width() {
      return this.dimensions ? this.dimensions.width : 0;
    },
    height() {
      return this.dimensions ? this.dimensions.height : 0;
    },
    domElement() {
      return this.renderer ? this.renderer.domElement : null;
    },
  },
  methods: {
    render() {
      this.renderer.render(this.scene, this.camera);
    },
    getDimensions() {},
  },
  watch: {
    dimensions(val) {
      this.renderer.setSize(val.width, val.height);
      this.render();
    },
  },
  created() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setClearColor(this.clearColor);
  },
  mounted() {
    this.$el.appendChild(this.renderer.domElement);
    this.render();

    EventBus.$on('render', (fn) => {
      if (fn) {
        fn(this.render);
      } else {
        this.render();
      }
    });
  },
};
</script>

<style lang="postcss">
.renderer {
  @apply rounded-lg shadow overflow-hidden;
}
</style>
