import { useState } from "react";
import Detail from "../../css/Calender/StylrCalenderDetail";
import { useNavigate, Link } from "react-router-dom";
function CalenderDetail(props) {
  const navigate = useNavigate();
  const toDiary = () => {
    localStorage.setItem(
      "currentDate",
      JSON.stringify([
        props.currentDate.getFullYear(),
        props.currentDate.getMonth(),
        props.currentDate.getDate(),
      ])
    );
    navigate("/Diary");
  };
  const [diary, setDiary] = useState();
  const [feeling, setFeeling] = useState();
  let count = 0;
  let count2 = 0;

  return (
    <>
      <Detail className={props.remove ? "remove" : "box"}>
        <div className="dateBox">
          <span className="currentDate">
            {props.currentDate ? props.currentDate.getDate() : ""}
          </span>
          <span
            onClick={(e) => {
              props.setRemove(true);
            }}
          >
            x
          </span>
        </div>
        <div className="diaryBox">
          <img
            src={
              localStorage.getItem("diary")
                ? props.diaryArr
                    .map((x) => {
                      if (props.currentNum != 0) {
                        if (
                          String(Object.keys(x)).replace("day", "") ==
                          props.currentNum
                        ) {
                          if (x[Object.keys(x)].feeling == "") {
                            return "img/feeling/empty.png";
                          } else {
                            return x[Object.keys(x)].feeling;
                          }
                        } else {
                          count++;
                          if (count == props.diaryArr.length) {
                            return "img/feeling/empty.png";
                          }
                        }
                      }
                    })
                    .join("")
                : "img/feeling/empty.png"
            }
            alt=""
            className="feeling"
          />
          <p className="diaryTitle" onClick={toDiary}>
            {localStorage.getItem("diary")
              ? props.diaryArr
                  .map((x, y) => {
                    if (props.currentNum != 0) {
                      if (
                        String(Object.keys(x)).replace("day", "") ==
                        props.currentNum
                      ) {
                        if (x[Object.keys(x)].diaryTitle == "") {
                          return "일기 쓰러 가기 ✏️✏️";
                        } else {
                          return x[Object.keys(x)].diaryTitle;
                        }
                      } else {
                        count2++;
                        if (count2 == props.diaryArr.length) {
                          return "일기 쓰러 가기 ✏️✏️";
                        }
                      }
                    }
                  })
                  .join("")
              : "일기 쓰러 가기 ✏️✏️"}
          </p>
        </div>
      </Detail>
    </>
  );
}

export default CalenderDetail;
