import React from "react";

const List = () => {
  let mylist = ["List 1", "List 2", "List 3", "List 4", "List 5"];

  let list = mylist.map((item, index) => <li key={index}>{item}</li>);
  return (
    <>
      <ul>{list}</ul>
    </>
  );
};

export default List;
