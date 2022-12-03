import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice";

const index = configureStore({
    reducer: {
        user: userReducer,
    }
});

export default index;
