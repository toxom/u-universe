import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/system'; // Import styled for custom styling

// Define a custom button component with styled
const CustomButton = styled(Button)`
  background-color: #FFC100; // Change the background color to your desired color
  color: black; // Change the text color to white or any desired color
  border-width: 1px 3px 3px 1px; // Set border widths individually (top, right, bottom, left)
  border-style: solid; // Set the border style to solid
  border-color: black; // Set the border color to black
  &:hover {
    background-color: red; // Change the hover background color (optional)
    color: black; // Change the hover text color (optional)
    border-width: 1px 3px 3px 1px; // Set hover border widths (optional)
  }
`;

export default CustomButton;
