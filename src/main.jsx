import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import './App.css';
import App from './App';

// Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac'
  }
};

const theme = extendTheme({ colors });

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
