import { combineReducers } from "redux";
import { countriesReduser } from "./countries/countriesReducer";

const rootReducer = combineReducers({
  countries: countriesReduser,
});

export default rootReducer;
