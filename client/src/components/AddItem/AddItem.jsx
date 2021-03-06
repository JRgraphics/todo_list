import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/actions/itemActions";
import "./AddItem.css";

import add_icon from "../../assets/icons/plus [#1469].png";

function AddItem() {
  const dispatch = useDispatch();
  const input_el = useRef(null);

  const handleAddItem = () => {
    if (input_el.current.value.length > 0) {
      dispatch(addItem({ description: input_el.current.value }));
      input_el.current.value = "";
    } else {
      alert("Please add item to the field.");
    }
  };

  return (
    <div className="add-item-container row">
      <input
        className="add-item-input dark-bg p-2 col-10"
        ref={input_el}
        type="text"
        onKeyDown={(e) => {
          if (e.keyCode === 13) {
            handleAddItem();
          }
        }}
      />
      <button className="add-item-button col-2" onClick={() => handleAddItem()}>
        <img src={add_icon} alt={"icon"} />
      </button>
    </div>
  );
}

export default AddItem;
