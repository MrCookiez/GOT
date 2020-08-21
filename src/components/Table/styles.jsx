import { css } from 'styled-components';

export default css`
    .table__wrapper {
      overflow-x: auto;
    }

    table {
        width: 100%;
        box-shadow: 5px 12px 20px 15px #00000029;
        border-radius: 5px;

        @media (min-width: 1024px) {
          min-width: 1024px;
        }

    }

    thead {
        text-transform: uppercase;
    }
`;
