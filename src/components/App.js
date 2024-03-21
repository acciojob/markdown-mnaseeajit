//<p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>

import React from "react";
import Markdown from "./Markdown";
import "../styles/App.css";

const App = () => {
    return (
        <div className="App">
            <Markdown />
        </div>
    )
}
export default App;