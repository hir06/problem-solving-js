import { mount, VueWrapper } from '@vue/test-utils';
import RatingsComponent from './Ratings.vue'; 
import { ComponentPublicInstance } from 'vue';

interface Props {
  rating: number;
  maxRating?: number;
}

const mountWrapper = (propsData: Props): VueWrapper<ComponentPublicInstance> => {
  return mount(RatingsComponent, {
    props: propsData,
  });
};

describe('RatingsComponent', () => {
  it('renders the correct number of full stars based on rating', () => {
    const wrapper = mountWrapper({ rating: 3, maxRating: 5 });
    const fullStars = wrapper.findAll('[data-qa="full-star"]');
    expect(fullStars.length).toBe(3);
  });

  it('renders the correct number of empty stars based on rating and maxRating', () => {
    const wrapper = mountWrapper({ rating: 2, maxRating: 5 });
    const emptyStars = wrapper.findAll('[data-qa="empty-star"]');
    expect(emptyStars.length).toBe(3);
  });

  it('renders the correct rating text', () => {
    const wrapper = mountWrapper({ rating: 4 });
    expect(wrapper.text()).toContain('(4)');
  });

  it('uses 5 as the default value for maxRating when not provided', () => {
    const wrapper = mountWrapper({ rating: 3 });
    expect(wrapper.findAll('.ratings__rating').length).toBe(5);
  });
});