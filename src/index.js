import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Main from "./Main";

ReactDom.render(
    <BrowserRouter>
        <Main />
    </BrowserRouter>, 
    document.getElementById("root")
);