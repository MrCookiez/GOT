import { css } from 'styled-components';
import dragonBG from './background-img.webp';

export default css`
    margin: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    box-sizing: border-box;
    font-family: 'Play', sans-serif;
    background-color: black;
    height: 100vh;
    width: 100vw;

    .container {
      display: flex;
      align-items: center;
      flex-direction: column;
      background-image: url(${dragonBG});
      background-position: bottom;
      background-repeat: no-repeat;
      height: 100vh;
      width: 100vw;
    }

    .title {
        text-align: center;
        color: white;
        margin-top: 25px;
    }
`;
