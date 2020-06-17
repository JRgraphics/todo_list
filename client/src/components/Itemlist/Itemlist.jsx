import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getItems } from "../../redux/actions/itemActions";
import Item from "../Item/Item";

function Itemlist() {
  const input_el = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItems());
  }, []);
  const todo_items = useSelector((state) => state.item.items, shallowEqual);

  console.log(todo_items);
  return (
    <div className="Itemlist">
      <ul className="list-group">
        {todo_items && todo_items.map((item) => <Item item={item} />)}
      </ul>
    </div>
  );
}

export default Itemlist;
