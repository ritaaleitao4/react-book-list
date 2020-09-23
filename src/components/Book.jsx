import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BookItem = styled.li`
  width: 30%;
  margin 1.5%;
  list-style-type: none;
  position: relative;
  background-color: #fff;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: none;
  transition: box-shadow .35s ease-in-out;

  &:hover {
    box-shadow: 0 2px 15px 5px rgba(68,68,68,.16);
  }
`;

const ImgContainer = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  overflow: hidden;

  img {
    object-fit: cover;
    width: 100%;
    height: auto;
  }
`;

const InfoContainer = styled.div`
  padding: 10px;

  time {
    font-size: 10px;
    display: block;
  }

  h3 {
    margin: 5px 0;
  } 

  h6 {
    margin: 0;
  } 
`;

const Book = (props) => {
  const {
    cover, published_at, name, author,
  } = props;

  return (
    <BookItem>
      <ImgContainer>
        <img src={cover} alt={`cover-${name}`} />
      </ImgContainer>
      <InfoContainer>
        <time dateTime={published_at} pubdate="pubdate">{published_at}</time>
        <h3>{name}</h3>
        <h6>{author}</h6>
      </InfoContainer>
    </BookItem>
  );
};

Book.propTypes = {
  cover: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  published_at: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
