import styled from "styled-components";

const Detail = styled.div`
  width: 20vw;
  height: 20vw;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 35vh;
  background-color: white;

  .dateBox {
    margin-top: 1vh;
    width: 90%;
    height: 10%;
    font-size: 22px;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: yellowgreen; */
  }
  .dateBox span:last-child {
    cursor: pointer;
  }
  .diaryBox {
    margin-top: 2vh;
    width: 90%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: yellowgreen; */
  }
  .diaryBox img {
    margin-top: 1vh;
    width: 5vw;
    height: 5vw;
  }
  .diaryBox p {
    margin-top: 4vh;
    padding: 0 0.5vw 0.5vh;
    width: 90%;
    height: 5vh;
    border: 2px solid black;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: 5vh;
    /* background-color: blue; */
    cursor: pointer;
  }
`;

export default Detail;
