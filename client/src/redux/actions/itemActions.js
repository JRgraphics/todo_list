import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from "../types/types";
import axios from "axios";

export const getItems = () => (dispatch) => {
  axios
    .get("api/items")
    .then((res) => {
      dispatch({
        type: GET_ITEMS,
        payload: res.data,
      });
    })
    .catch((err) => {});
};

export const addItem = (item) => (dispatch) => {
  axios.post("api/items", item).then((res) => dispatch(getItems()));
};

export const deleteItem = (id) => (dispatch) => {
  axios.delete("api/items/" + id).then((res) => dispatch(getItems()));
};
