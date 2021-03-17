import {createStore} from "redux";
import pageReducer from "./reducer";

const store = createStore(pageReducer);

export { store };