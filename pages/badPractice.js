import { useState } from "react";

export default function UserForm() {
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  const onItemClick = (item) => {
    setSelectedItems(item);
  };
  return (
    <ul>
      {items.map((item) => {
        return <li onClick={() => onItemClick(item)}></li>;
      })}
    </ul>
  );
}
