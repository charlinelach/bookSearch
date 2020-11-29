import React from "react";
import "./style.css";

function Jumbo(props) {
    return (
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 id="display" class="display-4">{props.children}</h1>
                <p id="sub" class="lead">{props.children}</p>
            </div>
        </div>
    );
}

export default Jumbo;