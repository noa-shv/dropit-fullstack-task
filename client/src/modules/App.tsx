import React from 'react';
// import DropitAppBar from './app-bar/DropitAppBar';
import AppRouter from '../contexts/router';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Todo: add seprate theme page
const theme = createTheme({
    palette: {
        primary: {
            main: '#000000',
        },
    },
});

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
