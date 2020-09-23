import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getBooks, setDisplayedItems } from '../store/actions/booksAction';
import BooksList from '../components/BooksList';

const Container = styled.div`
  max-width: 1040px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
`;

const Title = styled.h1`
  text-align: center;
  color: #1dc7cd;
  font-weight: 800;
  position: sticky;
`;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      itemsToShow: 6,
      loading: true,
    };
  }

  componentDidMount() {
    // get books for local state
    this.getBooksForLocalData();

    // get books for redux
    this.props.getBooks();
  }

  getBooksForLocalData= async () => {
    try {
      await axios.get(process.env.REACT_APP_API_URL).then(({ data }) => {
        this.setState({
          books: data,
          loading: false,
        });
      });
    } catch (e) {
      console.log('error', e);
    }
  }

  setDisplayedItemsLocalData = () => {
    this.setState({
      itemsToShow: this.state.itemsToShow + 6,
    });
  }

  render() {
    return (
      <Container>
        <Title>
          Books List - Local Data
        </Title>
        <BooksList {...this.state} loadMore={() => this.setDisplayedItemsLocalData()} />

        <Title>
          Books List - Redux
        </Title>
        <BooksList {...this.props.books} loadMore={() => this.props.setDisplayedItems()} />
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  books: state.books,
});

export default connect(mapStateToProps, { getBooks, setDisplayedItems })(Home);
