import Pizza from "./Pizza";
import { useState, useEffect } from "react";
import "../scss/List.scss";

const List = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://63af1e9c649c73f572b5d1d5.mockapi.io/items")
      .then((res) => res.json())
      .then((item) => setItems(item));
  }, []);
  return (
    <div id="listWrapper">
      <div id="list">
        {items.map((item) => (
          <Pizza key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default List;
