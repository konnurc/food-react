import React from "react";
import ReactDOM from "react-dom/client";

var parent = React.createElement("div", {id: "parent"} , [
             React.createElement("div", {id: "child1"} , [
                React.createElement("h1", {id: "heading-1"} , "Child1 Heading -1"),
                React.createElement("h2", {id: "heading-1"} , "Child1 Heading -2")
            ]),
            React.createElement("div", {id: "child2"} , [
                React.createElement("h1", {id: "heading-1"} , "Child2 Heading -1"),
                React.createElement("h2", {id: "heading-1"} , "Child2    Heading -2")
            ])
        ]);
        console.log(parent);
        var root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(parent)