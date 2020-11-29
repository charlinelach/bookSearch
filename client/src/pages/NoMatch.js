import React from "react";
import Jumbo from "../components/Jumbo/Jumbo";

function NoMatch() {
    return (
        <Jumbo>
            <div id="display">No Book(s) Found</div>
            <div id="sub">Try searching another way, perhaps...</div>
        </Jumbo>
    );
}

export default NoMatch;