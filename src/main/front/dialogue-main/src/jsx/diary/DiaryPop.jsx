import styled from "styled-components";
import { useNavigate } from "react-router-dom";
function DiaryPop() {
  const navigate = useNavigate();
  return (
    <>
      <Div>
        <h2>저장되었습니다!</h2>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          확인
        </button>
      </Div>
    </>
  );
}

export default DiaryPop;

const Div = styled.div`
  width: 20vw;
  height: 13vw;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  position: absolute;
  top: 15vh;
  background-color: white;
  z-index: 3;

  button {
    width: 7.5vw;
    height: 5.5vh;
    border: 600;
    /* border: 2px solid black; */
  }
`;
