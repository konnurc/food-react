import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import FooterComponent from "./components/FooterComponent";

const App = () => {
    return(
        <div className="page-container">
            <HeaderComponent />
            <BodyComponent />
            <FooterComponent />
        </div>
    )
}

var root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);