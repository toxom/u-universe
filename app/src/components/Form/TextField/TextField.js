import React from 'react';
import TextField from '@mui/material/TextField';

const EmailTextField = ({ label, variant, borderRadius, width, ...props }) => {
  const inputStyle = {
    borderColor: 'black', // Set the border color to black
    borderRadius: borderRadius || '0px', // Set the border radius (default to 'px' if not provided),
    width: width || '100%', // Set the width (default to '100%' if not provided)
  };

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
        style: inputStyle, // Apply the inputStyle object here
      }}
      {...props}
    />
  );
};

export default EmailTextField;
