import { css } from 'styled-components';

export default css`
    margin: 40px auto 20px;
    display: flex;
    justify-content: center;

    .input {
      transition: 0.5s;
      border: none;
      background-color: rgba(255, 255, 255, 0.7);
      width: 250px;
    }

    .input:focus {
      transition: 0.5s;
      width: 400px;

      ::placeholder {
        color: white;
      }
    }

    .is-rounded {
      border-radius: 5px;
      padding: 8px 32px;
    }
`;
