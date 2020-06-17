import React, { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getItems } from "../../redux/actions/itemActions";
import Item from "../Item/Item";

function Itemlist() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItems()); // eslint-disable-next-line
  }, []);
  const todo_items = useSelector((state) => state.item.items, shallowEqual);

  console.log(todo_items);
  return !todo_items ? (
    <div class="loader">Loading...</div>
  ) : (
    <div className="Itemlist">
      <ul className="list-group">
        {todo_items.map((item) => (
          <Item key={item._id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default Itemlist;
