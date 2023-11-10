import styled from "styled-components";

const Style = styled.div`
  width: 40%;
  /* margin-left: 3vw; */
  display: flex;
  flex-direction: column;
  align-items: center;

  .time {
    width: 60%;
    height: 9%;
    font-size: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .table {
    width: 300px;
    height: 90.5%;
    display: flex;
    justify-content: center;
  }
  .timeTitle {
    width: 20%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .timeTitle div {
    width: 100%;
    height: 23px;
    border-bottom: 1px solid black;
    text-align: center;
  }
  .timeTitle div::after {
    content: "";
    display: block;
    width: 99%;
    height: 24px;
    border-right: 1px solid black;
    position: relative;
    bottom: 3.2vh;
  }
  .timeTable {
    width: 80%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    position: relative;
  }
  .timeData {
    width: 40px;
    height: 23px;
    border-bottom: 1px solid black;
    position: relative;
    /* z-index: 1; */
  }
  .timeData::after {
    content: "";
    width: 40px;
    height: 6px;
    display: block;
    border-right: 1px solid black;
    position: absolute;
    top: 2vh;
    z-index: 2;
  }
  .timeData:nth-child(6n + 0)::after {
    display: none;
  }
  .unClick:hover {
    background-color: #a6a6a6;
  }
  .click {
    background-color: #cbcbfa;
  }
`;

export default Style;
