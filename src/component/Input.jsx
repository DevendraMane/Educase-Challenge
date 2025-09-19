export const Input = (props) => {
  const { label, placeholder, name, type, required, onChange } = props;
  return (
    <div className="input-field-container">
      <label>
        {label}
        {required && <span>*</span>}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
      />
    </div>
  );
};
