import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useField } from 'formik';

const InputField = ({ label, type, name }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [field, meta] = useField(name);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box sx={{ mb: 2 }}>
      <TextField
        fullWidth
        variant="standard"
        id="standard-basic"
        label={label}
        type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
        {...field}
        error={meta.touched && Boolean(meta.error)}
        helperText={meta.touched && meta.error}
        InputProps={{
          endAdornment: type === 'password' && (
            <IconButton onClick={handleTogglePasswordVisibility}>
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          ),
        }}
      />
    </Box>
  );
};

export default InputField;
