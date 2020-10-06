import auth from "./auth";
import { reducer as formReducer } from "redux-form";
const { combineReducers } = require("redux");

export default combineReducers({
  auth,
  form: formReducer,
});
