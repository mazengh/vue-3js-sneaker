<script>
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import EventBus from '@/event-bus';

const textureLoader = new THREE.TextureLoader();

export default {
  name: 'gltf',
  props: {
    path: {
      type: String,
      required: true,
    },
    manager: {
      type: Object,
      default: null,
    },
    scale: {
      type: Number,
      default: 1,
    },
    meshColors: {
      type: Object,
      default: () => ({}),
    },
    meshTextures: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      loader: null,
      model: null,
      defaultMaterial: {},
    };
  },
  created() {
    this.loader = new GLTFLoader(this.manager);
    this.load();
  },
  watch: {
    meshColors: {
      deep: true,
      handler() {
        this.changeMeshColor();
      },
    },
    meshTextures: {
      deep: true,
      handler() {
        this.changeMeshTexture();
      },
    },
  },
  methods: {
    load() {
      this.loader.load(this.path, (gltf) => {
        this.model = gltf.scene;
        this.model.scale.set(this.scale, this.scale, this.scale);
        this.changeMeshColor();
        this.$emit('created', this.model);
      });
    },
    changeMeshColor() {
      this.model.traverse((child) => {
        if (child.isMesh && child.name in this.meshColors) {
          const currentChild = child;
          currentChild.material.color = new THREE.Color(this.meshColors[child.name]);
          EventBus.$emit('render');
        }
      });
    },
    changeMeshTexture() {
      this.model.traverse((child) => {
        if (child.isMesh && child.name in this.meshTextures) {
          this.saveDefaultTexture(child);
          const texturePath = this.meshTextures[child.name];
          const currentChild = child;

          if (!texturePath && child.name in this.defaultMaterial) {
            currentChild.material = this.defaultMaterial[child.name];
            EventBus.$emit('render');
          } else {
            EventBus.$emit('loading', true);
            textureLoader.load(
              texturePath,
              (texture) => {
                currentChild.material = new THREE.MeshBasicMaterial({
                  map: texture,
                });
                EventBus.$emit('render');
                EventBus.$emit('loading', false);
                texture.dispose();
              },
              // onProgress callback currently not supported
              undefined,
              // onError callback
              (err) => {
                console.error(`An error happened: ${err}`);
              },
            );
          }
        }
      });
    },
    saveDefaultTexture(child) {
      if (!this.defaultMaterial[child.name]) {
        this.defaultMaterial[child.name] = child.material.clone();
      }
    },
  },
  render() {
    return null;
  },
};
</script>
