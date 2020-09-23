import React from 'react';
import { shallow } from 'enzyme';
import Book from '../components/Book';
import Mock from '../../db.json';

const mockItem = Mock.books[0];

describe('<Book />', () => {
  describe('renders', () => {
    it('without crashing', () => {
      shallow(<Book {...mockItem} />);
    });

    it('elements values', () => {
      const wrapper = shallow(<Book {...mockItem} />);
      expect(wrapper.find('img').prop('src')).toEqual(mockItem.cover);
      expect(wrapper.find('time').text()).toEqual(mockItem.published_at);
      expect(wrapper.find('h3').text()).toEqual(mockItem.name);
      expect(wrapper.find('h6').text()).toEqual(mockItem.author);
    });
  });
});
