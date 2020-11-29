import React from "react";

function DeleteBtn(props) {
    return (
        <button type="button" className="btn btn-danger" {...props} role="button" tabIndex="0">
            Delete
        </button>
    );
}

export default DeleteBtn;