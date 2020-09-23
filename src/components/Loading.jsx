import React from 'react';
import styled from 'styled-components';
import Spinner from '../assets/svg/spinner.svg';

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  height: calc(100vh - 90px);
  width: 100%;
  left: 0;
  bottom: 0;
  background-color: #fcf9f4;
  z-index: 1;

  img {
      height: 80px;
  }
`;

const Loading = () => (
  <LoadingContainer>
    <img src={Spinner} alt="spinner" />
  </LoadingContainer>
);

export default Loading;
