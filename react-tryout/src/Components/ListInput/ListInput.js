import { useState, useEffect } from "react";

const List = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const keys = Object.keys(localStorage);
    const list = keys.map((key) => JSON.parse(localStorage.getItem(key)));
    setList(list);
  }, [list]);

  const deleteItem = (key) => {
    localStorage.removeItem(key);
    setList(list.filter((item) => item.key !== key));
  };

  return (
    <ul>
      {list.map((item) => (
        <li key={item.key}>
          Key: {item.key}, Expense: {item.expense}, Price: {item.price},
          Category: {item.category}
          <button onClick={() => deleteItem(item.key)}>Delete 💥</button>
        </li>
      ))}
    </ul>
  );
};

export default List;
