import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { GlobalStyle } from 'components/GlobalStyle';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    white: '#fafafa',
    black: '#212121',
    red: '#ffadad',
    peach: '#ffd6a5',
    light: {
      green: '#fdffb6',
      blue: '#e4f1ee',
      skyBlue: '#d9edf8',
      lavender: '#dedaf4',
      mint: '#c0fdfb', 
      lilac: '#e7d8ff',
      pearl: '#f7f3e9',
      lemon: '#fffab0',
      coral: '#ffabab',
      peach2: '#ffd1d1'
    },
  },
  radii: {
    sm: '4px',
    md: '12px',
    lg: '16px',
  },
  spacing: value => `${value * 4}px`,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
