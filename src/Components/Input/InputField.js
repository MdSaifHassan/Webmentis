import { TextField } from '@mui/material';

const InputField = ({
  label,
  name,
  value,
  onChange,
  type = 'text',
  error = false,
  helperText = '',
  variant={},
  fullWidth = true,
  sx = {}, // Adding sx to handle custom styles
  ...props
}) => {
  return (
    // <TextField
    //   label={label}
    //   name={name}
    //   value={value}
    //   onChange={onChange}
    //   type={type}
    //   error={error}
    //   helperText={helperText}
    //   fullWidth={fullWidth}
    //   variant={variant}
    //   margin="normal"
    //   sx={sx} 
    //   {...props}
    // />
    <TextField
  label={label}
  name={name}
  value={value}
  onChange={onChange}
  type={type}
  error={error}
  helperText={helperText}
  fullWidth={fullWidth}
  variant={variant}
  margin="normal"
  sx={sx}
  {...props}
/>

  );
};

export default InputField;
