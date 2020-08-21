import React from 'react';
import PropTypes from 'prop-types';
import 'styled-components/macro';
import styles from './styles';

const Pagination = ({ currentPage, next, previous }) => (
  <div css={styles}>
    <div className="btn-group btn-group-lg" role="group">
      <button
        type="button"
        className="btn btn-secondary"
        onClick={previous}
      >
        Previous
      </button>

      <div className="pagination">
        <span
          className="page-item"
          aria-label="current page"
          aria-current="page"
        >
          {currentPage}
        </span>
      </div>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={next}
      >
        Next
      </button>
    </div>
  </div>
);

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  next: PropTypes.func.isRequired,
  previous: PropTypes.func.isRequired,
};

export default Pagination;
