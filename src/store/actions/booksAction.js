import axios from 'axios';
import { GET_BOOKS, BOOKS_ERROR, DISPLAY_BOOKS } from '../types';

export const getBooks = () => async (dispatch) => {
  try {
    await axios.get(process.env.REACT_APP_API_URL).then(({ data }) => {
      dispatch({
        type: GET_BOOKS,
        payload: data,
      });
    });
  } catch (e) {
    dispatch({
      type: BOOKS_ERROR,
      payload: e,
    });
  }
};

export const setDisplayedItems = () => async (dispatch) => {
  dispatch({ type: DISPLAY_BOOKS });
};
