import React from 'react';
import { ThemeProvider } from '@mui/material';
import faTheme from '../mui/faTheme'

const Fa = () => {
  return (
    <ThemeProvider theme={faTheme}>
      صفحه فارسی
    </ThemeProvider>
  );
};

export default Fa;