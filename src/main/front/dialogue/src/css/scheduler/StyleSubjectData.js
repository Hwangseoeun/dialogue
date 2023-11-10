import styled from "styled-components";

const StyleSubjectData = styled.li`
  width: 100%;
  height: 3.6vh;
  display: flex;

  div {
    width: 92%;
    height: 100%;
    display: flex;
  }
  input {
    font-size: 15px;
    border: 1px solid black;
    border-left: none;
    border-right: none;
  }
  input[type="text"]:nth-child(2) {
    padding-left: 0.2vw;
    width: 90%;
    height: 100%;
    border: 1px solid black;
    outline: none;
  }
  input:nth-child(1) {
    padding-left: 0.5vw;
    width: 10%;
    height: 100%;
    outline: none;
  }
  input[type="checkbox"] {
    width: 8%;
    height: 3.8vh;
    appearance: none;
    position: relative;
    background-color: white;
    outline: none;
  }
  input[type="checkbox"]::before {
    content: "∨";
    color: black;
    font-size: 20px;
    font-weight: 600;
    line-height: 17px;
    position: absolute;
    top: 1.7vh;
    left: 1.1vw;
    transform: scale(0) translate(-50%, -50%);
  }
  input[type="checkbox"]:checked::before {
    border-radius: 2px;
    transform: scale(1) translate(-50%, -50%);
  }
  input[type="checkbox"]:checked {
    /* background-color: rgb(141, 194, 211); */
    border-color: black;
    color: white;
  }
`;

export default StyleSubjectData;
