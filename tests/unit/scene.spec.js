import { mount } from '@vue/test-utils';
import Scene from '@/components/3D/Scene';

describe('three.js scene Vue component', () => {
  it('checks three.js scene was created', () => {
    global.window.innerWidth = 1024;
    global.window.innerHeight = 768;
    const rendererDiv = document.createElement('div');
    rendererDiv.setAttribute('class', 'renderer');
    document.body.appendChild(rendererDiv);
    rendererDiv.width = 800;

    Object.defineProperty(window.HTMLDivElement.prototype, 'clientWidth', {
      get() {
        return this.width || 0;
      },
    });

    const wrapper = mount({
      render() {
        return <Scene scopedSlots={{ default: () => <div class="renderer1" style="width:800px"></div> }} />;
      },
    });
    const componentWrapper = wrapper.get(Scene);

    expect(componentWrapper.vm.$data.scene.isScene).toBeTruthy();
    expect(componentWrapper.vm.$data.dimensions.width).toEqual(800);
    expect(componentWrapper.vm.$data.dimensions.height).toEqual(600);
  });
});
