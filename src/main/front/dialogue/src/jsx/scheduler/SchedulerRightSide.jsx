import TimeTable from "./TimeTable";
import TimeTitle from "./TimeTitle";
import Style from "../../css/scheduler/StyleSchedulerRightSide";
import { useState, useRef, useEffect } from "react";
function SchedulerRightSide(props) {
  const data = useRef([]);

  useEffect(() => {
    props.setScheduler((prev) => {
      let temp = prev;
      temp[0]["day" + new Date().getDate()].studyTimeTable.start =
        props.studyStart;
      temp[0]["day" + new Date().getDate()].studyTimeTable.end = props.studyEnd;
      temp[0]["day" + new Date().getDate()].studyTimeTable.time = props.time;
      temp[0]["day" + new Date().getDate()].studyTimeTable.count = props.count;
      return temp;
    });
  }, [props.time, props.setStudyEnd, props.setStudyStart, props.count]);

  let arr = [];
  for (let i = 0; i < 144; i++) {
    arr.push(i);
  }
  const timeArr = [
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "01",
    "02",
    "03",
    "04",
    "05",
  ];
  let counter = 0;
  let counter2 = 0;

  const painting = () => {
    let start =
      props.scheduler[0]["day" + new Date().getDate()].studyTimeTable.start;
    let end =
      props.scheduler[0]["day" + new Date().getDate()].studyTimeTable.end;
    let countArr =
      props.scheduler[0]["day" + new Date().getDate()].studyTimeTable.count;

    for (let j = 0; j < countArr; j++) {
      for (let i = start[j]; i <= end[j]; i++) {
        data[i].className = "timeData click";
      }
    }
    timeFunc();
  };

  const timeFunc = () => {
    for (let i = 0; i < 144; i++) {
      if (data[i].className == "timeData click") {
        counter2++;
      }
    }
    const hour = Math.floor((counter2 * 10) / 60);
    const minute = (counter2 * 10) % 60;
    props.setTime((prev) => {
      let temp = [hour, minute];
      return temp;
    });
  };

  return (
    <>
      <Style className="rightSide">
        <div className="time">
          <p>
            <span>{props.time[0]}</span>시간<span>{props.time[1]}</span>분
          </p>
        </div>
        <div className="table">
          <div className="timeTitle">
            {timeArr.map((x, y) => (
              <TimeTitle key={y} time={x} />
            ))}
          </div>
          <div
            className="timeTable"
            onMouseMove={painting}
            onMouseEnter={timeFunc}
          >
            {arr.map((x) => (
              <TimeTable
                time={x % 7 == 0 || x == 0 ? timeArr[counter++] : ""}
                key={x}
                x={x}
                data={data}
                setCount={props.setCount}
                setStudyEnd={props.setStudyEnd}
                setStudyStart={props.setStudyStart}
                setTime={props.setTime}
                timeFunc={timeFunc}
                studyStart={props.studyStart}
                setFlag={props.setFlag}
              />
            ))}
          </div>
        </div>
      </Style>
    </>
  );
}

export default SchedulerRightSide;
