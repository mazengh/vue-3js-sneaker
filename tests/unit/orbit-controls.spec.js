import * as THREE from 'three';
import { mount } from '@vue/test-utils';
import OrbitControls from '@/components/3D/OrbitControls';
import EventBus from '@/event-bus';

describe('three.js perspective camera Vue component', () => {
  let wrapper;
  let componentWrapper;

  beforeEach(() => {
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 2000);
    const domElement = document.createElement('CANVAS');

    wrapper = mount({
      render() {
        return (
          <OrbitControls
            camera={camera}
            domElement={domElement}
            scopedSlots={{ default: () => <div></div> }}
          />
        );
      },
    });

    componentWrapper = wrapper.get(OrbitControls);
  });

  it('checks three.js oribit controls were created', () => {
    expect(componentWrapper.vm.$data.controls).toBeDefined();
  });

  it('checks three.js orbit controls emits render on change event', () => {
    let emitted = false;
    EventBus.$on('render', () => {
      emitted = true;
    });

    // call controls reset function to trigger a change event
    componentWrapper.vm.$data.controls.reset();

    expect(emitted).toBeTruthy();
  });
});
