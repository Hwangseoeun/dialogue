import styled from "styled-components";

const StyleDiary = styled.main`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .diary {
    margin-top: 5vh;
    width: 80%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    position: relative;
  }
  .diary p {
    width: 80%;
    height: 8%;
    display: flex;
    align-items: center;
  }
  .diary p input {
    margin: 0 0 0 0.5vw;
    width: 95%;
    height: 3vh;
    font-size: 15px;
    border: none;
    border-bottom: 1px solid black;
    outline: none;
    background-color: rgba(240, 248, 255, 0);
  }
  textarea {
    margin-top: 1vh;
    padding: 1vw 1vw 1vw 1vw;
    width: 77%;
    height: 80%;
    border: 1px solid black;
    font-size: 15px;
    resize: none;
    outline: none;
  }
  textarea::-webkit-scrollbar {
    width: 3px;
  }
  textarea::-webkit-scrollbar-thumb {
    background-color: black;
  }
  .btnBox {
    width: 79.7%;
    height: 10%;
    display: flex;
    justify-content: end;
    align-items: flex-end;
  }
  button {
    margin-left: 0.5vw;
    width: 5vw;
    height: 5vh;
    border: 1px solid black;
    outline: none;
    background-color: rgba(240, 248, 255, 0);
    cursor: pointer;
  }
  .save {
    cursor: pointer;
  }
  .save:active {
    background-color: #c6c1ff;
  }
`;

export default StyleDiary;
