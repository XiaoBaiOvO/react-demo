import axios from "axios";
import {setUserName} from "../store/userSlice";

export const initAxios = dispatch => {
    axios.defaults.baseURL = "/api";
    axios.defaults.validateStatus = status => {
        [401, 500].includes(status) && dispatch(setUserName(""));
        return true;
    };
};

export const demo1 = async () => (await axios.get("1"));
export const demo2 = async (body) => (await axios.post("1", body)).data;
export const demo3 = async () => (await axios.post("1", {test: ""})).data;