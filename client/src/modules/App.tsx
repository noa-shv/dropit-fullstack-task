import React from 'react';
import AppRouter from '../contexts/router';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';

function App() {
  return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <AppRouter />
        </div>
      </ThemeProvider>
  );
}

export default App;
