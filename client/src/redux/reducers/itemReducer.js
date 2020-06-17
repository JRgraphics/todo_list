import {
  GET_ITEMS_REQUEST,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_ERROR,
} from "../types/types";

const initialState = {
  items: [],
  loading: false,
  error: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ITEMS_SUCCESS:
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case GET_ITEMS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return {
        state,
      };
  }
}
