import React, { Component } from "react";
import API from "../utils/API";

import Card from "../components/Card/Card";
import Col from "../components/Col/Col";
import Container from "../components/Container/Container";
import Row from "../components/Row/Row";
import Saved from "../components/Saved/Saved";

class BooksSaved extends Component {
    state = {
        savedBooks: [],
    }

    componentDidMount() {
        API.getBooks()
            .then(res => this.setState({ books: res.data }))
            .catch(err => console.error(err));
    }

    loadBooks = () => {
        API.getBooks()
          .then(res =>
            this.setState({ books: res.data })
          )
          .catch(err => console.log(err));
      };
    
      handleDeleteBook = id => {
        API.deleteBook(id)
          .then(res => this.loadBooks())
          .catch(err => console.log(err));
      }

    render() {
        return (
<Container>
        <Row>
          <Col>
            {this.state.books.length ? (
              <Card heading="Saved Books">
                {this.state.books.map(book => (
                  <Saved
                    key={book._id}
                    src={book 
                      ? book.src 
                      : "N/A"}
                    title={book.title}
                    author={book.author.join(", ")}
                    date={book.date}
                    description={book.description}
                    link={book.link}
                    handleDeleteBook={() => this.handleDeleteBook(book._id)}
                  />
                ))}
              </Card>
            ) : (
              <Card heading="Saved Books"></Card>
            )}
          </Col>
        </Row>
      </Container>
        )
    }
}

export default BooksSaved;