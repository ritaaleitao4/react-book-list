import { GET_BOOKS, DISPLAY_BOOKS } from '../types';

const initialState = {
  books: [],
  itemsToShow: 6,
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...state,
        books: action.payload,
        loading: false,
      };
    case DISPLAY_BOOKS:
      return {
        ...state,
        itemsToShow: state.itemsToShow + 6,
      };
    default:
      return state;
  }
}
