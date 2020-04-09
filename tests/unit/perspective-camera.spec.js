import { mount } from '@vue/test-utils';
import PerspectiveCamera from '@/components/3D/PerspectiveCamera';

describe('three.js perspective camera Vue component', () => {
  let wrapper;
  let componentWrapper;

  beforeEach(() => {
    wrapper = mount({
      render() {
        return <PerspectiveCamera scopedSlots={{ default: () => <div></div> }} />;
      },
    });
    componentWrapper = wrapper.get(PerspectiveCamera);
  });

  it('checks three.js perspective camera was created', () => {
    expect(componentWrapper.vm.$data.camera.type).toEqual('PerspectiveCamera');
  });

  it('checks three.js perspective camera aspect updates', async () => {
    expect(componentWrapper.vm.$data.camera.aspect).toEqual(1);
    componentWrapper.setProps({ aspect: 1.3 });
    await wrapper.vm.$nextTick();
    expect(componentWrapper.vm.$data.camera.aspect).toEqual(1.3);
  });
});
