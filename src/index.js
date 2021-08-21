import React from "react";
// import { render } from "react-dom";
import { createRoot } from "react-dom";

import App from "./App.js";

// render(<App />, document.getElementById("root"));

// concurrent mode
createRoot(document.getElementById("root")).render(<App />);
