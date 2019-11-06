import React from "react";
import "./style.css";
import SearchCardTemplate from "../searchcardtemplate";

const cardList = ({ listItems }) => {
  return (
    <ul>
      {listItems.map((listItem, index) => {
        const { id, name, address } = listItem;
        return (
          <SearchCardTemplate
            key={index}
            id={id}
            name={name}
            address={address}
          />
        );
      })}
    </ul>
  );
};

export default cardList;
