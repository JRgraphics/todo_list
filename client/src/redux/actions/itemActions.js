import {
  GET_ITEMS_REQUEST,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_ERROR,
} from "../types/types";
import axios from "axios";

export const getItems = () => (dispatch) => {
  dispatch(getItemsRequest());
  axios
    .get("api/items")
    .then((res) => {
      dispatch(getItemsSuccess(res.data));
    })
    .catch((err) => dispatch(getItemsError(err)));
};

export const getItemsRequest = () => {
  return {
    type: GET_ITEMS_REQUEST,
  };
};

export const getItemsSuccess = (items) => {
  return {
    type: GET_ITEMS_SUCCESS,
    payload: items,
  };
};

export const getItemsError = (error) => {
  return {
    type: GET_ITEMS_ERROR,
    payload: error,
  };
};

export const addItem = (item) => (dispatch) => {
  axios.post("api/items", item).then((res) => dispatch(getItems()));
};

export const deleteItem = (id) => (dispatch) => {
  axios.delete("api/items/" + id).then((res) => dispatch(getItems()));
};
