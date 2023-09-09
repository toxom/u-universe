import React from 'react';
import TextField from '@mui/material/TextField';

const EmailTextField = ({ label, variant, ...props }) => {
  return (
    <TextField
      label={label || "Email"}
      type="email"
      variant={variant || "outlined"}
      InputLabelProps={{
        style: {
          color: 'black', // Set the label text color to black
        },
      }}
      InputProps={{
        style: {
          borderColor: 'black', // Set the border color to black
        },
      }}
      {...props}
    />
  );
};

export default EmailTextField;
