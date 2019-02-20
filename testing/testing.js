import Vue from 'vue';
import SearchInput from '@/components/searchLocation.vue';

it('text is correct', () => {
    const Constructor = Vue.extend(SearchInput);
    const LocationComponent = new Constructor().$mount();

    expect(LocationComponent.label).toBe('Pick-up Location');
    expect(SearchComponent.placeholder).toBe('city, airport, station, region and district...');
});