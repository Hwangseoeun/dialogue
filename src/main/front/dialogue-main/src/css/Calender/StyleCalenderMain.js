import styled from "styled-components";
const Td = styled.td`
  width: 10vw;
  height: 10vh;
  border: 1px solid rgb(0, 0, 0);
  border-top: none;
  border-right: none;
  position: relative;
  cursor: pointer;

  .calenderData {
    width: 100%;
    height: 100%;
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
  }
  .diaryInfo {
    width: 40%;
    height: 31%;
    display: flex;
    align-items: center;
  }
  .feelingColor {
    margin: 0 0.5vw 0 0.5vw;
    width: 0.6vw;
    height: 0.6vw;
    border-radius: 100%;
  }
  .diaryTitle {
    margin: 0 0.5vw 0 0.5vw;
    width: 0.6vw;
    height: 0.6vw;
    border-radius: 100%;
  }

  .angry,
  .tired,
  .soso,
  .sick,
  .sad,
  .happy,
  .title {
    /* border: 1px solid black; */
  }
  .title {
    background-color: #b5b5b5;
    /* border: 1px solid black; */
  }
  .angry {
    background-color: #ff0000;
  }
  .happy {
    background-color: #fffd85;
  }
  .soso {
    background-color: #a170bd;
  }
  .sick {
    background-color: #2e913b;
  }
  .sad {
    background-color: #7691fc;
  }
  .tired {
    background-color: #40436e;
  }
`;

export default Td;
