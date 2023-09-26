import { useEffect, useState } from "react";

import { Input, Select } from "../Input/Input";
import List from "../List/List";

const Form = () => {
  const [key, setKey] = useState("");
  const [expense, setExpense] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    const keys = Object.keys(localStorage);
    const newList = keys.map((key) => JSON.parse(localStorage.getItem(key)));
    setList(newList);
  }, []);

  // ! allow child components to communicate back to their parent and trigger changes in the state that’s managed by the parent.
  const deleteItem = (key) => {
    setList(list.filter((element) => element.key !== key));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (key !== "" && expense !== "" && price >= 0 && category !== "") {
      const data = { key, expense, price, category };
      localStorage.setItem(key, JSON.stringify(data));
      setList([...list, data]);
      setKey("");
      setExpense("");
      setPrice(0);
      setCategory("");
    } else {
      alert("fill the details first");
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <Input
          type="text"
          label="Key"
          value={key}
          onChange={(event) => setKey(event.target.value)}
        />
        <Input
          type="text"
          label="Expense"
          value={expense}
          onChange={(event) => setExpense(event.target.value)}
        />
        <Input
          type="number"
          label="Price"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
        <Select
          label="Category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
        <button onSubmit={submitHandler} type="submit">
          Submit✅
        </button>
      </form>
      {/* allow child components to communicate back to their parent and trigger changes in the state that’s managed by the parent.  */}
      <List list={list} deleteItem={deleteItem} />
    </div>
  );
};

export default Form;
