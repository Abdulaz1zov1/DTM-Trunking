import { combineReducers } from 'redux';
import sidebar from "./reducers/sidebar";
import auth from "./reducers/auth";

export default combineReducers({
    sidebar, auth
});