import React from "react";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../redux/actions/itemActions";
import "./ListButton.css";

import delete_icon from "../../assets/icons/delete [#1487].png";

function ListButton(props) {
  const dispatch = useDispatch();
  return (
    <button
      className="todo-list-button float-right"
      onClick={() => {
        dispatch(deleteItem(props.item._id));
      }}
    >
      <img src={delete_icon} alt={"icon"} />
    </button>
  );
}

export default ListButton;
