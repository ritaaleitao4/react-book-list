import React from 'react';
import { shallow } from 'enzyme';
import BooksList from '../components/BooksList';
import Book from '../components/Book';
import Mock from '../../db.json';

const mockStore = {
  books: [...Mock.books],
  itemsToShow: 6,
  loading: false,
};

const changeMock = () => {
  mockStore.itemsToShow += 6;
};

describe('<BooksList />', () => {
  describe('renders', () => {
    const wrapper = shallow(
      <BooksList
        {...mockStore}
        loadMore={() => changeMock()}
      />,
    );

    it('without crashing', () => {
      shallow(<BooksList {...mockStore} loadMore={() => {}} />);
    });

    it('book component', () => {
      expect(wrapper.find(Book).exists());
    });

    it('click button load more', () => {
      const loadMoreButton = wrapper.find('.btn-load-more');
      loadMoreButton.simulate('click');
      expect(mockStore.itemsToShow).toEqual(12);
    });
  });
});
