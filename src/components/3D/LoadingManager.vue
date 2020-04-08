<script>
import * as THREE from 'three';
import EventBus from '@/event-bus';

export default {
  name: 'loading-manager',
  props: {},
  data() {
    return {
      manager: null,
    };
  },
  created() {
    this.manager = new THREE.LoadingManager();
    this.manager.onStart = this.onStart;
    this.manager.onLoad = this.onLoad;
    this.manager.onError = this.onError;
  },
  methods: {
    onStart() {
      EventBus.$emit('loading', true);
    },
    onLoad() {
      EventBus.$emit('loading', false);
    },
    onError(url) {
      EventBus.$emit('loading', false);
      console.log(`Error loading: ${url}`);
    },
  },
  render() {
    return this.$scopedSlots.default({
      manager: this.manager,
    });
  },
};
</script>
