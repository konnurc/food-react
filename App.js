import React from "react";
import ReactDOM from "react-dom/client";

var rupees = 1000;
var title = React.createElement("span", {}, "minicart Title");
var titleJSX = <span>Minicart KSX Title</span>;

const HeaderComponent = () => {
    return (
        <div className="container">
             {rupees},
        {title},
        {titleJSX}

            Header Component
        </div>
    );
}

var root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeaderComponent />)