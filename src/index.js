import {Provider, useDispatch} from "react-redux";
import {BrowserRouter, useRoutes} from "react-router-dom";
import index from "./store";
import { createRoot } from 'react-dom/client';

import {routes} from "./config/routes";
import {useLayoutEffect} from "react";
import {initAxios} from "./config/api";

const App = () => {
    const dispatch = useDispatch();
    useLayoutEffect(() => {
        initAxios(dispatch);
    });
    return useRoutes(routes)
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Provider store={index} >
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
)
