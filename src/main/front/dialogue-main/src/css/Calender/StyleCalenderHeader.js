import styled from "styled-components";

const MainHeader = styled.div`
  margin-top: 2vh;
  width: 100%;
  height: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  .year {
    font-size: 18px;
    position: absolute;
    bottom: 9.5vh;
  }
  .month {
    font-size: 40px;
    font-weight: 900;
  }
  .monthEng {
    margin-top: -1vh;
    font-size: 15px;
    font-weight: 600;
  }
  input {
    margin: 0 2vw 0 2vw;
    width: 2vw;
    height: 2vw;
    border-radius: 100%;
    border: none;
    font-size: 20px;
    font-weight: 600;
    background-color: white;
    cursor: pointer;
  }
`;

export default MainHeader;
