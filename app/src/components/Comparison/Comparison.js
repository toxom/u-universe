import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; // Import the CheckCircle icon
import ClearIcon from '@mui/icons-material/Clear'; // Import the Clear icon

const Comparison = () => {
  // Sample data for feature descriptions and tick icons
  const data = [
    { feature: 'Feature 1', tick1: true, tick2: true },
    { feature: 'Feature 2', tick1: true, tick2: true },
    { feature: 'Feature 2', tick1: true, tick2: true },
    { feature: 'Feature 2', tick1: true, tick2: true },
    { feature: 'Feature 2', tick1: true, tick2: true },
    { feature: 'Feature 2', tick1: true, tick2: true },
    { feature: 'Feature 2', tick1: true, tick2: true },
    { feature: 'Feature 2', tick1: true, tick2: true },
    { feature: 'Feature 2', tick1: true, tick2: true },
    { feature: 'Feature 2', tick1: true, tick2: true },
    { feature: 'Feature 2', tick1: true, tick2: true },
    { feature: 'Feature 2', tick1: true, tick2: true },

    // Add more rows for other features

    
  ];

  const tableContainerStyles = {
    border: '2px solid #FFC100', // Add a border stroke
    borderRadius: '10px', // Add border-radius for rounded corners
    backgroundColor: 'white', // Change the background color
    width: '300px', // Set the maximum width for the table
    margin: '0 auto', // Center the table horizontally


        // Lock the table size for screens with a maximum width of 768px
    '@media (max-width: 768px)': {
        width: '400px', // Adjust the width for medium-sized screens
    },

    // Lock the table size for screens with a maximum width of 480px
    '@media (max-width: 480px)': {
        width: '280px', // Adjust the width for smaller screens
    },


  };

  // Define custom colors for tick1 and tick2
  const tick1Color = 'lightgreen'; // Green color for CheckCircleIcon
  const tick2Color = 'red'; // Red color for ClearIcon

  // Define CSS styles for the second column with vertical borders
  const secondColumnStyles = {
    borderLeft: '2px solid #000', // Vertical border on the left
    borderRight: '2px solid #000', // Vertical border on the right
    backgroundColor: '#f0f0f0', // Background color for the second column

    
  };

  return (
    <TableContainer style={tableContainerStyles}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Feature Description</TableCell>
            <TableCell style={{ borderLeft: '2px solid #FFC100', borderRight: '2px solid #FFC100', backgroundColor: '#FFC100', textAlign: 'center' }}>U-universe</TableCell>
            <TableCell style={{ textAlign: 'center' }}>Product 2</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.feature}</TableCell>
              <TableCell style={{ borderLeft: '2px solid #FFC100', borderRight: '2px solid #FFC100', backgroundColor: '#FFC100', textAlign: 'center' }}>
                {row.tick1 ? (
                  <CheckCircleIcon style={{ color: tick1Color }} /> // Apply custom color to CheckCircleIcon
                ) : (
                  ''
                )}
              </TableCell>
              <TableCell style={{ textAlign: 'center' }}>
                {index === 1 || index === 3 || index === 8 ? (
                  <CheckCircleIcon style={{ color: tick1Color }} /> // Apply custom color to CheckCircleIcon for the second and fourth row
                ) : (
                  row.tick2 ? (
                    <ClearIcon style={{ color: tick2Color }} /> // Apply custom color to ClearIcon
                  ) : (
                    ''
                  )
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Comparison;
