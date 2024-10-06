import React from 'react';
import { GlobalStyles } from '@mui/material';

const CustomGlobalStyles = () => {
  return (
    <GlobalStyles
      styles={{
        '::-webkit-scrollbar': {
          width: '15px',
        },
        '::-webkit-scrollbar-track': {
          background: '#17171E',
        },
        '::-webkit-scrollbar-thumb': {
          background: '#665DC3',
        },
      }}
    />
  );
};

export default CustomGlobalStyles;