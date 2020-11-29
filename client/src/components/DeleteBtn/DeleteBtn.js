import React from "react";

function DeleteBtn(props) {
    return (
        <button type="button" className="btn btn-danger" {...props}>
            Delete
        </button>
    );
}

export default DeleteBtn;