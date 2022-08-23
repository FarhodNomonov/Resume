import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import { Provider } from "react-intl/src/components/injectIntl";
import App from "./App";
import Wrapper from "./components/Wrapper";
import "./assets/scss/styles.css";
import { store } from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Wrapper>
        <Provider store={store}>
          <App />
        </Provider>
      </Wrapper>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
