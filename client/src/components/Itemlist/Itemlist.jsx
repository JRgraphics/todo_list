import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getItems, addItem, deleteItem } from "../../redux/actions/itemActions";
import Proptypes from "prop-types";
import { v4 as uuid } from "uuid";

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
      <ul>
        {todo_items &&
          todo_items.map((item) => (
            <li id={item._id} key={item._id}>
              {item.description}
              <button onClick={() => dispatch(deleteItem(item._id))}>
                Delete
              </button>
            </li>
          ))}
      </ul>
      <input ref={input_el} type="text" />
      <button
        onClick={() =>
          dispatch(addItem({ description: input_el.current.value }))
        }
      >
        Add
      </button>
    </div>
  );
}

export default Itemlist;
