import React from "react";
import ReactDOM from "react-dom";
const heading = React.createElement('h1', {
        className: 'header',
        id: 'header',
        style: {
            fontSize: '20px',
            color: 'red'
        }
    },
    'Hello World!!!');
const root = ReactDOM.createRoot(
    document.getElementById("root")
);
root.render(heading);