import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

// Create a data context
export const DataContext = createContext();

// Create a data provider component
export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  return <DataContext.Provider value={[data, setData]}>{children}</DataContext.Provider>;
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
