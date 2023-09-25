const Input = ({ type, label, value, onChange }) => {
  return (
    <div>
      <label htmlFor={label}> {label}</label>
      <input type={type} id={label} value={value} onChange={onChange} required/>
    </div>
  );
};

export default Input;
