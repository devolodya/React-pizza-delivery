import Pizza from "./Pizza";
import { useState, useEffect } from "react";
import "../../scss/List.scss";
import Skeleton from "./Skeleton";

const List = (props) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://63af1e9c649c73f572b5d1d5.mockapi.io/items")
      .then((res) => res.json())
      .then((item) => {
        setItems(item);
        setIsLoading(false);
      });
  }, []);
  return (
    <div id="listWrapper">
      <div id="list">
        {isLoading
          ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
          : items.map((item) => <Pizza key={item.id} {...item} />)}
      </div>
    </div>
  );
};

export default List;
