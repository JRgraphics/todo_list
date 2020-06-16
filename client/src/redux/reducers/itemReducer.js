import { v4 as uuid } from "uuid";

import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from "../types/types";

const initialState = {
  items: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
      };

    case ADD_ITEM:
      return {
        ...state,
        items: [action.payload, ...state.item],
      };

    default:
      return {
        state,
      };
  }
}
