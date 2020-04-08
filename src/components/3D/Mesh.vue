<script>
import * as THREE from 'three';
import EventBus from '@/event-bus';

export default {
  name: 'mesh',
  props: {
    name: {
      Type: String,
      required: true,
    },
    position: {
      type: Object,
      default: () => ({ x: 0, y: 1, z: 0 }),
    },
  },
  data() {
    return {
      mesh: null,
      material: null,
      geometry: null,
    };
  },
  computed: {
    elementsAreReady() {
      return !!this.material && !!this.geometry;
    },
  },
  watch: {
    elementsAreReady(ready) {
      if (ready) {
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.position.set(this.position.x, this.position.y, this.position.z);
        this.$emit('created', this.mesh);

        // code commented below is an example how to use the render event to animate
        // EventBus.$emit('render', (render) => this.rotate(render));
      }
    },
  },
  created() {
    EventBus.$on('materialCreated', ({ material, meshName }) => {
      if (this.name === meshName) {
        this.material = material;
      }
    });

    EventBus.$on('geometryCreated', ({ geometry, meshName }) => {
      if (this.name === meshName) {
        this.geometry = geometry;
      }
    });
  },
  methods: {
    rotate(render) {
      requestAnimationFrame(() => {
        this.rotate(render);
      });
      this.mesh.rotation.x += 0.04;
      this.mesh.rotation.y += 0.04;
      render();
    },
  },
  render() {
    return null;
  },
};
</script>
