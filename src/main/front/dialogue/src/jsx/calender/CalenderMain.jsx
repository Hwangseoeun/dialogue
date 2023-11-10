import { useEffect, useState } from "react";
import CalenderDetail from "./Calenderdetail";
import Td from "../../css/Calender/StyleCalenderMain";
function CalenderMain(props) {
  const [remove, setRemove] = useState(true);
  const [currentDate, setCurrentDate] = useState("");

  const diaryArr = JSON.parse(localStorage.getItem("diary"));

  const [currentNum, setCurrentNum] = useState(0);
  let count = 0;
  return (
    <>
      <table>
        <thead>
          <tr>{props.days}</tr>
        </thead>
        <tbody>
          {props.rows.map((i, j) => (
            <tr key={j}>
              {i.map((x, y) => (
                <Td
                  key={y}
                  className={props.getClassName(x)}
                  onClick={(e) => {
                    setCurrentDate(x);
                    setRemove(false);
                    setCurrentNum(x.getDate());
                  }}
                >
                  <div className="calenderData">
                    <span>{x.getDate()}</span>
                    <div className="diaryInfo">
                      <div
                        className={
                          "feelingColor " +
                          `${
                            localStorage.getItem("diary")
                              ? diaryArr
                                  .map((i) =>
                                    String(Object.keys(i)).replace("day", "") ==
                                      x.getDate() &&
                                    x.getMonth() == props.currentDate.getMonth()
                                      ? i[Object.keys(i)].feeling
                                          .substring(38)
                                          .replace(".png", "")
                                      : ""
                                  )
                                  .join("")
                              : ""
                          }`
                        }
                      ></div>
                      <div
                        className={
                          "diaryTitle " +
                          `${
                            localStorage.getItem("diary")
                              ? diaryArr
                                  .map((i) =>
                                    String(Object.keys(i)).replace("day", "") ==
                                      x.getDate() &&
                                    x.getMonth() == props.currentDate.getMonth()
                                      ? i[Object.keys(i)].diaryTitle != ""
                                        ? "title"
                                        : "remove"
                                      : ""
                                  )
                                  .join("")
                              : "remove"
                          }`
                        }
                      ></div>
                    </div>
                  </div>
                </Td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <CalenderDetail
        setRemove={setRemove}
        remove={remove}
        currentDate={currentDate}
        diaryArr={diaryArr}
        currentNum={currentNum}
      />
    </>
  );
}

export default CalenderMain;
