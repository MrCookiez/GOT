import { css, keyframes } from 'styled-components';

const loadingY = keyframes`
  to {
    background-position:
      0 0,
      100% 0, /* move highlight to right */
      120px 0,
      120px 40px,
      120px 80px,
      120px 120px;
  }
`;

export default css`
  .loading {
    margin: auto;
    width: 700px;
    height: 600px; /* change height to see repeat-y behavior */
    display: flex;
    justify-content: center;
    align-items: center;

    background-image:
      radial-gradient( lightgray 50%, transparent 0 ),
      linear-gradient( 100deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0) 80% ),
      linear-gradient( lightgray 20px, transparent 0 ),
      linear-gradient( lightgray 20px, transparent 0 ),
      linear-gradient( lightgray 20px, transparent 0 ),
      linear-gradient( lightgray 20px, transparent 0 ),
      linear-gradient( lightgray 20px, transparent 0 ),
      linear-gradient( lightgray 20px, transparent 0 ),
      linear-gradient( lightgray 20px, transparent 0 ),
      linear-gradient( lightgray 20px, transparent 0 ),
      linear-gradient( lightgray 20px, transparent 0 );

    background-repeat: repeat-y;

    background-size:
      0 0, /* circle */
      50px 200px, /* highlight */
      150px 200px,
      350px 200px,
      300px 200px,
      250px 200px;

    background-position:
      0 0, /* circle */
      0 0, /* highlight */
      120px 0,
      120px 40px,
      120px 80px,
      120px 120px;

    animation: ${loadingY} 1s infinite;
  }
`;
