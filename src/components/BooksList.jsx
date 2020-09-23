import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Book from './Book';
import Loading from './Loading';

const ListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
`;
const BtnLoadMore = styled.button`
  display: block;
  margin: 20px auto 60px;
  outline: none;
  cursor: pointer;
  background-color: #1dc7cd;
  color: #fff;
  position: relative;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  letter-spacing: .48px;
  line-height: 28px;
`;

const BooksList = (props) => {
  const { 
    books, loading, itemsToShow,
  } = props;
  const booksToDisplay = [...books].splice(0, itemsToShow);

  return (
    <>
      {loading && <Loading />}
      <ListContainer>
        {booksToDisplay.map((item) => <Book key={item.book_id} {...item} />)}
      </ListContainer>
      {booksToDisplay.length !== books.length && (
        <BtnLoadMore className="btn-load-more" onClick={() => props.loadMore()}>Load More</BtnLoadMore>
      )}
    </>
  );
};

BooksList.propTypes = {
  books: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  itemsToShow: PropTypes.number.isRequired,
  loadMore: PropTypes.func.isRequired,
};

export default BooksList;
