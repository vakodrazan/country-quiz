import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";
import { ContextProvider } from "./pages/Context"

ReactDOM.render(<ContextProvider>
        <App />
    </ContextProvider>,document.getElementById('root'))