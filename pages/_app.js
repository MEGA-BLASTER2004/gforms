import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";
import "../styles/globals.css";
import { configureStore } from "@reduxjs/toolkit";
import reducers from "../reducers";

const store = configureStore({ reducer: reducers }, applyMiddleware(thunk));

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;
