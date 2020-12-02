import React from "react";
import Col from "../Col/Col";

function Results(props) {
    return (
        <span>
            <Col size="md-12" style={{ float: "left", marginTop: "20px" }}>
                <p><img alt={props.title} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} /></p>
                <p style={{ fontSize: "30px" }}>{props.title}</p>
                <p><strong>Author:</strong> {props.author}</p>
                <p><strong>Publish Date:</strong> {props.date}</p>
                <p><strong>Google Books Link:</strong> <a href={props.link} target={"_blank"} >{props.title}</a></p>
                <button onClick={props.handleSaveBook} className="btn btn-primary save-btn" style={{ marginBottom: "30px" }}>
                    Save Book
                </button>

                <p style={{ marginBottom: "30px" }}><strong>Description:</strong> {props.description}</p>
            </Col>
            <hr style={{ clear: "both" }} />
        </span>
    );
}

export default Results;