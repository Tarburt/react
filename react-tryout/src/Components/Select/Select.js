const Select = ({ label, value, onChange }) => {
  const options = ["", "Men", "Women", "Kids"];

  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <select id={label} value={value} onChange={onChange} required>
        {options.map((element) => (
          <option key={element} value={element}>
            {element}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
