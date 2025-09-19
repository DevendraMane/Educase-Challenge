import TextField from "@mui/material/TextField";

export const Input = (props) => {
  const { label, placeholder, name, type, required, onChange, value } = props;

  return (
    <div className="input-field-container">
      <TextField
        label={label}
        placeholder={placeholder}
        name={name}
        type={type}
        required={required}
        variant="outlined"
        className="input-field"
        fullWidth
        value={value}
        onChange={onChange}
        slotProps={{
          inputLabel: {
            style: { color: "#6C25FF" },
          },
          input: {
            style: { color: "#1D2226" },
          },
          formHelperText: {
            style: { color: "#DD4A3D" },
          },
        }}
      />
    </div>
  );
};
