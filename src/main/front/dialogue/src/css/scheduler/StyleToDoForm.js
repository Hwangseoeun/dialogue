import styled from "styled-components";

const StyleToDoForm = styled.div`
  margin-top: 1vh;
  width: 21vw;
  height: 5.5vh;
  border: 2px solid black;
  color: black;
  font-size: 15px;
  display: flex;
  align-items: center;

  p {
    width: 80%;
    height: 5.5vh;
    text-indent: 7px;
    display: flex;
    align-items: center;
    position: relative;
  }
  .complete::after {
    content: "";
    width: 95%;
    height: 4%;
    display: inline-block;
    position: absolute;
    left: 0.5vw;
    background-color: black;
  }
  .complete {
    color: rgb(128, 128, 128);
  }
  .delete {
    width: 10%;
    height: 100%;
    border: none;
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(240, 248, 255, 0);
    cursor: pointer;
  }
  .check {
    appearance: none;
    margin-left: 0.5vw;
    width: 17px;
    height: 17px;
    border-radius: 3px;
    border: 2px solid black;
    position: relative;
    cursor: pointer;
    outline: none;
  }
  .check::before {
    content: "∨";
    color: black;
    font-size: 18px;
    font-weight: 600;
    line-height: 17px;
    position: absolute;
    top: 50%;
    left: 50%;
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

export default StyleToDoForm;
