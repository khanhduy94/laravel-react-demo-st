import React from 'react';
import ReactDOM from 'react-dom';
import RouteHandler from './RouteHandler';
import { Provider } from "react-redux";
import { Store } from "./Store/index";

function Root() {
    return (
        <Provider store={Store}>
            <RouteHandler />
        </Provider>
    );
}

export default Root;

if (document.getElementById('root')) {
    ReactDOM.render(<Root />, document.getElementById('root'));
}
