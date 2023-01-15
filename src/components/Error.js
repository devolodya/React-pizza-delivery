import React from "react";
import "../scss/Error.scss";
const Error = () => {
  return (
    <div id="errorPage">
      <span>Сторінку не знайдено</span>
      <div id="errorReturn">
        <a href="/">Повернутись на головну сторінку</a>
      </div>
    </div>
  );
};

export default Error;
