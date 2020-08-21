import React, { useState } from 'react';
import PropTypes from 'prop-types';
import 'styled-components/macro';

import TablePlaceholder from '../TablePlaceholder';
import styles from './styles';

const titles = [
  'name',
  'gender',
  'born',
  'age',
  'playedBy',
];

const Table = ({ data, sortBy }) => {
  // Set initial values for each column
  const [sortType, setSortType] = useState({ columnName: '', asc: false });

  /**
   * Sort table by each column
   * @param {array}
   * @param {string}
   * @return {array}
   */
  const sortByColumn = (info, columnName) => {
    // Toggle the column asc/desc
    const asc = (sortType.columnName === columnName) ? !sortType.asc : false;
    // Current column
    setSortType({ columnName, asc });
    return sortBy(info, asc, columnName);
  };

  // Display correct arrow: DEFAULT | ASC | DESC
  const displayArrow = (columnName) => {
    if (columnName !== sortType.columnName) return ' ↕';
    return sortType.asc === false ? ' ↓' : '  ↑';
  };

  return !data.data ? <TablePlaceholder /> : (
    <div css={styles}>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            {data.data && titles.map((item, index) => (
              <th key={`th-key-${index.toString()}`} onClick={() => sortByColumn(data.data, item)}>
                {item}
                {displayArrow(item)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.data && data.data.map((character, index) => (
            <tr key={`td-${index.toString()}`}>
              <td>{character.name || '-'}</td>
              <td>{character.gender || '-'}</td>
              <td>{character.born || '-'}</td>
              <td>{character.age || '-'}</td>
              <td>{character.actor || '-' }</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Table.defaultProps = {
  data: {},
  sortBy: () => {},
};

Table.propTypes = {
  sortBy: PropTypes.func,
  data: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({}),
    ),
  }),
};

export default Table;
