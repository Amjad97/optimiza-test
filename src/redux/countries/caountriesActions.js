import axios from "axios";
import {
  FETCH_COUNTRIES_REQUEST,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAILURE,
} from "./countriesTypes";

// fetch countries request
const fetchCountriesRequest = () => {
  return {
    type: FETCH_COUNTRIES_REQUEST,
  };
};

// fetch countries request success
const fetchCountriesSuccess = (countries) => {
  return {
    type: FETCH_COUNTRIES_SUCCESS,
    payload: countries,
  };
};

// fetch countries request failure
const fetchCountriesFailure = (error) => {
  return {
    type: FETCH_COUNTRIES_FAILURE,
    payload: error,
  };
};

// fetch countries method
export const fetchCountries = () => {
  return (dispatch) => {
    dispatch(fetchCountriesRequest);
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        const countries = response.data;
        dispatch(fetchCountriesSuccess(countries));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchCountriesFailure(errorMsg));
      });
  };
};
