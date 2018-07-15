import Vuex from 'vuex';
import { shallowMount, createLocalVue  } from '@vue/test-utils'
import ContentDetail from '@/components/ContentDetail.vue'

const localVue = createLocalVue();

localVue.use(Vuex);


describe('ContentDetail.vue', () => {
  it('renders status_str when passed', () => {
    const msg = 'İçeriği 4 saat 4 dakika içinde kontrol etmeniz gerekir'
    const wrapper = shallowMount(ContentDetail, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
