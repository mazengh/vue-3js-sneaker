import { mount } from '@vue/test-utils';
import HemisphereLight from '@/components/3D/HemisphereLight';

describe('three.js hemisphere light Vue component', () => {
  let wrapper;
  let componentWrapper;

  beforeEach(() => {
    wrapper = mount({
      render() {
        return <HemisphereLight scopedSlots={{ default: () => <div></div> }} />;
      },
    });
    componentWrapper = wrapper.get(HemisphereLight);
  });

  it('checks three.js perspective hemisphere light was emitted', () => {
    expect(componentWrapper.emitted('created')).toBeTruthy();
    expect(componentWrapper.emitted('created')[0][0].type).toEqual('HemisphereLight');
  });
});
