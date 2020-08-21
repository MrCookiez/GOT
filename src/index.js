import React from 'react';
import ReactDOM from 'react-dom';
import { DataProvider } from './components/DataContext';
import App from './App';

ReactDOM.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <DataProvider>
    <App />
  </DataProvider>,
  global.document.getElementById('root'),
);
