import ReactDOM from "react-dom";
import "./index.css";

import App from "components/pages/App";

import { AppProviders } from "context";

ReactDOM.render(
  <AppProviders>
    <App />
  </AppProviders>,
  document.getElementById("root")
);
