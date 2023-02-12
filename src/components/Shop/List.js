import Pizza from "./Pizza";
import { useState, useEffect } from "react";
import "../../scss/Shop/List.scss";
import Skeleton from "./Skeleton";
import axios from "axios";

const List = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function GetData() {
      try {
        const response = await axios(
          "https://63af1e9c649c73f572b5d1d5.mockapi.io/items"
        );
        setItems(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    }
    GetData();
  }, []);

  return (
    <>
      <div id="listWrapper">
        <div id="list">
          {isLoading
            ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
            : items.map((item) => <Pizza key={item.id} {...item} />)}
        </div>
      </div>
    </>
  );
};

export default List;
