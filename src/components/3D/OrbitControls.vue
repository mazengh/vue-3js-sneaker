<script>
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import EventBus from '@/event-bus';

export default {
  name: 'orbit-controls',
  props: {
    camera: {
      type: Object,
      required: true,
    },
    domElement: {
      type: HTMLCanvasElement,
      required: true,
    },
  },
  data() {
    return {
      controls: null,
    };
  },
  mounted() {
    this.controls = new OrbitControls(this.camera, this.domElement);
    this.updateControls();
    this.controls.addEventListener('change', this.render);
  },
  beforeDestroy() {
    this.controls.removeEventListener('change', this.render);
  },
  methods: {
    updateControls() {
      this.controls.update();
    },
    render() {
      EventBus.$emit('render');
    },
  },
  render() {
    return null;
  },
};
</script>
