import React from 'react';
import PropTypes from 'prop-types';
import 'styled-components/macro';
import styles from './styles';

const SearchInput = ({ onChange }) => (
  <div css={styles}>
    <input className="input is-rounded" type="search" placeholder="Type here..." onChange={onChange} />
  </div>
);

SearchInput.propTypes = {
  // Event listener
  onChange: PropTypes.func.isRequired,
};

export default SearchInput;
