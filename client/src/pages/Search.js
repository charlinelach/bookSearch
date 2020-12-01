import React from "react";
import API from "../utils/API";

import Card from "../components/Card/Card";
import Col from "../components/Col/Col";
import Container from "../components/Container/Container";
import Form from "../components/Form/Form";
import Jumbo from "../components/Jumbo/Jumbo";
import Results from "../components/Results/Results";
import Row from "../components/Row/Row";


class Search extends React.Component {
    state = {
        value: "",
        books: []
    };

    searchBooks = query => {
        API.searchBooks(query)
            .then(res =>
                this.setState(
                    {
                        books: res.data.items,
                        search: ""
                    },
                    console.log(res.data.items)
                )
            )
            .catch(err => console.log(err));
    };


    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBooks(this.state.search);
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    deleteBook = id => {
        API.deleteBook(id)
            .then(res => console.log(res.status))
            .catch(err => console.log(err));
    };

    // saves book to database
    handleSaveBook = bookData => {
        API.saveBook(bookData)
            .then(res => alert("Book Saved!"))
            .catch(err => console.log(err));
    };

    // componentDidMount() {
    //     this.searchBook();
    // }

    // makeBook = bookData => {
    //     return {
    //         _id: bookData.id,
    //         title: bookData.volumeInfo.title,
    //         authors: bookData.volumeInfo.authors,
    //         description: bookData.volumeInfo.description,
    //         image: bookData.volumeInfo.imageLinks.thumbnail,
    //         link: bookData.volumeInfo.previewLink
    //     }
    // }

    // searchBook = query => {
    //     API.getBook(query)
    //         .then(res => this.setState({ books: res.data.items.map(bookData => this.makeBook(bookData)) }))
    //         .catch(err => console.error(err));
    // };


    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-12">
                        <Jumbo />
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <Card heading="Google's Book Spy">
                            <Form
                                value={this.state.search}
                                handleInputChange={this.handleInputChange}
                                handleFormSubmit={this.handleFormSubmit}
                            />
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        {this.state.books.length ? (
                            <Card heading="Results">
                                {this.state.books.map(book => (
                                    <Results
                                        key={book.id}
                                        src={book.volumeInfo.imageLinks
                                            ? book.volumeInfo.imageLinks.thumbnail
                                            : "http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/book-icon.png"}
                                        title={book.volumeInfo.title}
                                        authors={book.volumeInfo.authors
                                            ? book.volumeInfo.authors.join(", ")
                                            : "N/A"}
                                        date={book.volumeInfo.publishedDate}
                                        description={book.volumeInfo.description}
                                        link={book.volumeInfo.infoLink}
                                        handleSaveBook={() => this.handleSaveBook({
                                            title: book.volumeInfo.title,
                                            src: book.volumeInfo.imageLinks
                                                ? book.volumeInfo.imageLinks.thumbnail
                                                : "http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/book-icon.png",
                                            authors: book.volumeInfo.authors,
                                            date: book.volumeInfo.publishedDate,
                                            description: book.volumeInfo.description,
                                            link: book.volumeInfo.infoLink
                                        })}
                                    />
                                ))}
                            </Card>
                        ) : (
                                <Card heading="Search Results"></Card>
                            )}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Search;