const Input = ({ label, type, value, onChange }) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input type={type} id={label} value={value} onChange={onChange} />
    </div>
  );
};

const Select = ({ label, value, onChange }) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <select onChange={onChange} id={label} value={value}>
        <option value="">kindly choose from the values</option>
        <option value="Men">Men</option>
        <option value="Women">Women</option>
        <option value="Kids">Kids</option>
      </select>
    </div>
  );
};

export { Input, Select };
