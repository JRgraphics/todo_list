import React from "react";
import "./Item.css";

import ListButton from "../ListButton/ListButton";

function Item(props) {
  return (
    <li
      className="list-group-item dark-bg border-0 px-0"
      id={props.item._id}
      key={props.item._id}
    >
      <span className="item-text float-left">{props.item.description}</span>

      <ListButton type={"delete"} item={props.item} />
    </li>
  );
}

export default Item;
