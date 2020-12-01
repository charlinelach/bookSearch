import React from "react";
import "./style.css";

function Jumbo(props) {
    return (
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 id="display" class="display-4">Google's Book Spy</h1>
                <p id="sub" class="lead">Find the Book You Seek...</p>
            </div>
        </div>
    );
}

export default Jumbo;