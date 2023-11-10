import ToDo from "./ToDo";
import SchedulerRightSide from "./SchedulerRightSide";
import SchedulerLeftSide from "./SchedulerLeftSide";
import Header from "../Header";
import StyleScheduler from "../../css/scheduler/StyleScheduler";
import { useEffect, useState, useRef } from "react";
// import { json } from "react-router-dom";
function Scheduler() {
  const [subject, setSubject] = useState(() => {
    if (localStorage.getItem("scheduler")) {
      return JSON.parse(localStorage.getItem("scheduler"))[0][
        "day" + new Date().getDate()
      ].studyPlan.subject;
    } else {
      return [];
    }
  });

  const [subjectPlan, setSubjectPlan] = useState(() => {
    if (localStorage.getItem("scheduler")) {
      return JSON.parse(localStorage.getItem("scheduler"))[0][
        "day" + new Date().getDate()
      ].studyPlan.plan;
    } else {
      return [];
    }
  });

  const [complete, setComplete] = useState(() => {
    if (localStorage.getItem("scheduler")) {
      return JSON.parse(localStorage.getItem("scheduler"))[0][
        "day" + new Date().getDate()
      ].studyPlan.complete;
    } else {
      return [];
    }
  });

  const [memo, setMemo] = useState(() => {
    if (localStorage.getItem("scheduler")) {
      return JSON.parse(localStorage.getItem("scheduler"))[0][
        "day" + new Date().getDate()
      ].studyPlan.memo;
    } else {
      return "";
    }
  });

  const [focusCounter, setFocusCounter] = useState(() => {
    if (localStorage.getItem("scheduler")) {
      return (
        JSON.parse(localStorage.getItem("scheduler"))[0][
          "day" + new Date().getDate()
        ].studyPlan.subject.length + 1
      );
    } else {
      return 1;
    }
  });
  const [checkArr, setCheckArr] = useState([]);
  //-------------------------------------------------------------------studyPlanner

  const [time, setTime] = useState([0, 0]);
  const [studyStart, setStudyStart] = useState(() => {
    if (localStorage.getItem("scheduler")) {
      return JSON.parse(localStorage.getItem("scheduler"))[0][
        "day" + new Date().getDate()
      ].studyTimeTable.start;
    } else {
      return [];
    }
  });
  const [studyEnd, setStudyEnd] = useState(() => {
    if (localStorage.getItem("scheduler")) {
      return JSON.parse(localStorage.getItem("scheduler"))[0][
        "day" + new Date().getDate()
      ].studyTimeTable.end;
    } else {
      return [];
    }
  });
  const [count, setCount] = useState(() => {
    if (localStorage.getItem("scheduler")) {
      return JSON.parse(localStorage.getItem("scheduler"))[0][
        "day" + new Date().getDate()
      ].studyTimeTable.count;
    } else {
      return 0;
    }
  });
  const [flag, setFlag] = useState(false);
  //----------------------------------------------------------studyTimeTable

  const [toDo, setToDo] = useState(() =>
    localStorage.getItem("scheduler")
      ? JSON.parse(localStorage.getItem("scheduler"))[0][
          "day" + new Date().getDate()
        ].toDo.toDoText
      : []
  );

  const [toDoComplete, setToDoComplete] = useState(() =>
    localStorage.getItem("scheduler")
      ? JSON.parse(localStorage.getItem("scheduler"))[0][
          "day" + new Date().getDate()
        ].toDo.toDoComplete
      : []
  );
  //-------------------------------------------------------------------toDo
  const [scheduler, setScheduler] = useState(() =>
    localStorage.getItem("scheduler")
      ? JSON.parse(localStorage.getItem("scheduler"))
      : obj
  );
  let subjectRef = useRef([]);
  let planRef = useRef([]);

  useEffect(() => {
    localStorage.setItem("scheduler", JSON.stringify(scheduler));
  }, [scheduler, studyStart, studyEnd]);

  useEffect(() => {
    scheduler[0]["day" + new Date().getDate()].studyPlan.subject.map((x) => {
      subjectRef.current.push(x);
    });
    scheduler[0]["day" + new Date().getDate()].studyPlan.plan.map((x) => {
      planRef.current.push(x);
    });
  }, [subjectRef]);

  return (
    <>
      <Header />
      <StyleScheduler>
        <section className="leftSection">
          <ToDo
            scheduler={scheduler}
            setScheduler={setScheduler}
            toDo={toDo}
            setToDo={setToDo}
            setToDoComplete={setToDoComplete}
            toDoComplete={toDoComplete}
          />
        </section>
        <section className="rightSection">
          <SchedulerLeftSide
            setScheduler={setScheduler}
            scheduler={scheduler}
            setMemo={setMemo}
            memo={memo}
            subject={subject}
            subjectPlan={subjectPlan}
            complete={complete}
            setSubject={setSubject}
            setSubjectPlan={setSubjectPlan}
            setComplete={setComplete}
            setFocusCounter={setFocusCounter}
            focusCounter={focusCounter}
            setCheckArr={setCheckArr}
            checkArr={checkArr}
            subjectRef={subjectRef}
            planRef={planRef}
          />
          <SchedulerRightSide
            scheduler={scheduler}
            setScheduler={setScheduler}
            studyEnd={studyEnd}
            setStudyEnd={setStudyEnd}
            studyStart={studyStart}
            setStudyStart={setStudyStart}
            time={time}
            setTime={setTime}
            count={count}
            setCount={setCount}
            setFlag={setFlag}
          />
        </section>
      </StyleScheduler>
    </>
  );
}

export default Scheduler;

const obj = [
  {
    ["day" + new Date().getDate()]: {
      studyPlan: {
        subject: [],
        plan: [],
        complete: [],
        memo: "",
      },
      studyTimeTable: {
        start: [],
        end: [],
        count: 0,
        time: [],
      },
      toDo: {
        toDoText: [],
        toDoComplete: [],
      },
    },
  },
];
