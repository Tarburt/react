const List = ({ list, deleteItem }) => {
  const deleteHandler = (key) => {
    localStorage.removeItem(key);
    deleteItem(key);
  };

  const categories = ["Men", "Women", "Kids"];

  return (
    <div>
      {categories.map((category) => (
        <div key={category}>
          <h2>{category}</h2>
          <ul>
            {list
              .filter((element) => element.category === category)
              .map((element) => (
                <li key={element.key}>
                  Key: {element.key} Expense: {element.expense}{" "} Price: {element.price}{" "}
                  <button onClick={() => deleteHandler(element.key)}>
                    Delete💥
                  </button>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default List;
