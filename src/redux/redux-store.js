import {createStore} from "redux";
import formReducer from "./form-reducer";

const store = createStore(formReducer);

window.store = store;
export default store;