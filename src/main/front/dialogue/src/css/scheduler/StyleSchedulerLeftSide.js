import styled from "styled-components";

const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  /* background-color: blue; */

  form {
    width: 100%;
    height: 100%;
  }
  .leftSideHeader {
    width: 100%;
    height: 15%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .date {
    margin: 1.5vh 0 0.5vh 0;
    width: 100%;
    height: 30%;
    border-bottom: 1px solid black;
    font-size: 16px;
  }
  .dateTitle {
    margin-right: 0.5vw;
  }
  textarea {
    padding: 0.5vw 0.5vw 0.5vw 1vw;
    width: 95%;
    height: 65%;
    border: none;
    font-size: 17px;
    font-weight: 900;
    /* line-height: 65%; */
    outline: none;
    resize: none;
    overflow: hidden;
    background-color: rgba(240, 248, 255, 0);
  }
  .studyList {
    width: 100%;
    height: 86.7%;
  }
  ul {
    width: 100%;
    height: 100%;
    list-style: none;
  }
`;

export default LeftSide;
