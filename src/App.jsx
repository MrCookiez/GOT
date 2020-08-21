import React, { useState, useEffect, useContext } from 'react';
import 'styled-components/macro';
import axios from 'axios';

import { DataContext } from './components/DataContext';
import Table from './components/Table';
import Pagination from './components/Pagination';
import SearchInput from './components/SearchInput';
import endpoints from './config/endpoints.json';
import {
  sortBy, getAgeListByName, getFirstNames, getDataWithAge,
} from './functions';
import styles from './styles';

const App = () => {
  // Page bookmark
  // The 1st page had only 1 name in the response that is why we start from the 2nd
  const [page, setPage] = useState(1);
  // Storage for the responses
  const [data, setData] = useContext(DataContext);
  // Only one response
  const [currentData, setCurrentData] = useState({});
  // Get search input
  const [searchData, setSearchData] = useState({});
  // Info from the 1st request

  // Go to the previous page
  const getPreviousPage = () => ((page - 1 <= 1) ? setPage(1) : setPage(page - 1));

  // Go to the next page
  const getNextPage = () => setPage(page + 1);

  // Sort by column
  const sortData = (unsortedData, asc, columnName) => (
    setSearchData({ data: sortBy(unsortedData, asc, columnName) })
  );

  // Filter table data by text input
  const filterData = (event, unfilteredData) => {
    const { target: { value } } = event;

    const filteredData = unfilteredData.data.filter((characterInfo) => {
      // Convert object into array
      const charArray = Object.values(characterInfo);
      // Check for same values
      return charArray.find((elem) => String(elem).toLowerCase().includes(value.toLowerCase()));
    });

    setSearchData({ data: filteredData });

    return searchData;
  };

  useEffect(() => {
    // Create request url
    const url = `${endpoints.gotAPI}characters?page=${page}&pageSize=10`;
    // Get the existing response
    const availableRes = data.find((res) => res.url === url);

    if (!availableRes) {
      let charactersData;
      // Make the first request (characters basic data)
      axios.get(url)
        .then((res) => {
          // Get a list of first names
          charactersData = res.data;
          // Make a second request (characters age by name)
          return getAgeListByName(getFirstNames(charactersData));
        }).then((anotherRes) => {
          let actualResponse;

          if (!(anotherRes instanceof Error)) {
            actualResponse = getDataWithAge(charactersData, anotherRes.data, url);
          } else {
            // Set a default value if bad request
            actualResponse = getDataWithAge(charactersData, [], url);
          }
          // Add data to context
          setData([...data, actualResponse]);
          // Add data to the current page
          setCurrentData(actualResponse);
          // Add a copy of data for the search as it will change the table
          setSearchData(actualResponse);
        })
        .catch((err) => +err);
    } else {
      // Use the stored response as current data
      setCurrentData(availableRes);
      // Use a copy of stored response for search
      setSearchData(availableRes);
    }
  }, [page, data, setData]);

  return (
    <div css={styles}>
      <div className="container">
        <h1 className="title is-2">Game of Thrones</h1>

        <SearchInput onChange={(e) => filterData(e, currentData)} />

        <Table data={searchData} sortBy={sortData} />

        <Pagination
          next={getNextPage}
          previous={getPreviousPage}
          currentPage={page}
        />

      </div>
    </div>
  );
};

export default App;
