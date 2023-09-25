import { useState } from "react";

import Input from "../Input/Input";
import Select from "../Select/Select";
import ListInput from "../ListInput/ListInput.js";

const Form = () => {
  const [key, setKey] = useState("");
  const [expense, setExpense] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");

  const submitHandle = (event) => {
    event.preventDefault();
    if (key !== "" && expense !== "" && price >= 0 && category !== "") {
      localStorage.setItem(
        key,
        JSON.stringify({ key, expense, price, category })
      );
      setKey("");
      setExpense("");
      setPrice(0);
      setCategory("");
    } else {
      alert("kindly fill the values");
    }
  };

  return (
    <div>
      <h2>hello</h2>
      <form onSubmit={submitHandle}>
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
        <button type="submit">Submit ✅</button>
      </form>
      <ListInput />
    </div>
  );
};

export default Form;
