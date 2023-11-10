import styled from "styled-components";

const StyleDiaryHeader = styled.section`
  margin-top: 3vh;
  width: 55%;
  height: 8%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  p {
    font-size: 17px;
  }

  .feelingBox {
    width: 20%;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .curruntFeeling {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .feeling {
    width: 12vw;
    height: 17vh;
    border: 1px solid black;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    position: absolute;
    top: 9.5vh;
    background-color: white;
    z-index: 2;
  }
  .remove {
    display: none;
  }

  img {
    width: 50px;
    height: 50px;
    cursor: pointer;
  }

  input {
    margin: 0;
    width: 1.5vw;
    height: 3vh;
    border: none;
    font-size: 17px;
    font-weight: 300;
    outline: none;
    background-color: rgba(240, 248, 255, 0);
  }
  input:first-child {
    margin-left: 0.5vw;
    width: 3vw;
  }
  .weatherBox {
    width: 13%;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .curruntWeather {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .curruntWeather img {
    margin-top: 0.5vh;
  }
  .weather {
    width: 9vw;
    height: 17vh;
    border: 1px solid black;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    position: absolute;
    top: 9.5vh;
    left: 1vw;
    background-color: white;
    z-index: 2;
  }
`;

export default StyleDiaryHeader;
