import React from 'react';
import { shallow } from 'enzyme';
import Home from '../views/Home';
import BooksList from '../components/BooksList';
import store from '../store/store';

describe('<Home />', () => {
  describe('renders', () => {
    it('without crashing', () => {
      shallow(<Home store={store} />);
    });

    it('bookList component', () => {
      const wrapper = shallow(<Home store={store} />);
      expect(wrapper.find(BooksList).exists());
    });
  });
});
