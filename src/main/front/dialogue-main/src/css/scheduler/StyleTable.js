import styled from "styled-components";

const TableLine = styled.div`
  border-bottom: 1px solid black;
  display: flex;

  span {
    width: 35px;
    height: 23px;
    text-align: center;
    display: block;
    position: relative;
  }
  span::after {
    content: "";
    width: 35px;
    height: 23px;
    border-right: 1px solid black;
    display: block;
    position: absolute;
    top: 0;
    z-index: 2;
  }
  ul {
    display: flex;
    background-color: rgba(240, 248, 255, 0);
  }
  .timeData {
    width: 35px;
    height: 23px;
    position: relative;
    /* left: 0.5vw; */
    /* background-color: yellowgreen; */
  }
  .timeData::after {
    content: "";
    width: 34px;
    height: 5px;
    border-right: 1px solid black;
    position: absolute;
    top: 2.7vh;
    z-index: 2;
  }
  .timeData:last-child::after {
    display: none;
  }
  /* .timeData:last-child {
    border-right: 1px solid black;
  } 
  /* .timeData:hover {
    background-color: gray;
  } */
`;

// export default TableLine;
