import SubjectData from "./SubjectData";
import LeftSide from "../../css/scheduler/StyleSchedulerLeftSide";
import { useEffect, useState, useRef } from "react";

function SchedulerLeftSide(props) {
  const allFocus = {};
  const data = useRef([]);

  useEffect(() => {
    props.setScheduler((prev) => {
      let temp = [...prev];
      temp[0]["day" + new Date().getDate()].studyPlan.memo = props.memo;
      temp[0]["day" + new Date().getDate()].studyPlan.subject = props.subject;
      temp[0]["day" + new Date().getDate()].studyPlan.plan = props.subjectPlan;
      temp[0]["day" + new Date().getDate()].studyPlan.complete = props.complete;
      return temp;
    });
  }, [props.subject, props.subjectPlan, props.complete, props.memo]);

  const arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  ];

  let checkRef = useRef([]);
  return (
    <LeftSide className="schedulerSection">
      <form className="schedulerForm" action="">
        <div className="leftSideHeader">
          <div className="date">
            <span className="dateTitle">날짜:</span>
            <span>{new Date().getFullYear()}.</span>
            <span>{new Date().getMonth() + 1}.</span>
            <span>{new Date().getDate()}</span>
          </div>
          <textarea
            className="text"
            onChange={(e) => {
              props.setMemo(e.target.value);
            }}
            defaultValue={
              props.scheduler[0]["day" + new Date().getDate()].studyPlan.memo
            }
          ></textarea>
        </div>
        <div className="studyList">
          <ul>
            {arr.map((x, y) => (
              <SubjectData
                key={x}
                class={x}
                subject={props.subject}
                setSubject={props.setSubject}
                setSubjectPlan={props.setSubjectPlan}
                subjectPlan={props.subjectPlan}
                setComplete={props.setComplete}
                allFocus={allFocus}
                focusCounter={props.focusCounter}
                setFocusCounter={props.setFocusCounter}
                setCheckArr={props.setCheckArr}
                checkArr={props.checkArr}
                data={data}
                scheduler={props.scheduler}
                subjectRef={props.subjectRef.current[y]}
                planRef={props.planRef.current[y]}
                checkRef={checkRef}
              />
            ))}
          </ul>
        </div>
      </form>
    </LeftSide>
  );
}

export default SchedulerLeftSide;
