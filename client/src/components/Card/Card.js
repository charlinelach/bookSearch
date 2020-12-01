import React from "react";
import "./style.css";

function Card(props) {
    return (
        <div class="card align-left">
            <div class="card-body">
                {props.children}
            </div>
        </div>
    );
}

export default Card;