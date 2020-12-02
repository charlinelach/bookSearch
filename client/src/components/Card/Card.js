import React from "react";
import "./style.css";

const Card = props => {
    return (
        <div className="card text-center">
            <div className="card-header">
                <h3>{props.heading}</h3>
            </div>
            <div className="card-body text-left">{props.children}</div>
        </div>
    );
}

export default Card;