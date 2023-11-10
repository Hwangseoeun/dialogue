import StyleSubjectData from "../../css/scheduler/StyleSubjectData";
import { useEffect, useRef, useState } from "react";
function SubjectData(props) {
  let counter = 0;
  let focus = useRef([]);
  // const [click, setClick] = useState(false);
  let schedulerArr = "";
  if (localStorage.getItem("scheduler")) {
    schedulerArr = JSON.parse(localStorage.getItem("scheduler"))[0][
      "day" + new Date().getDate()
    ].studyPlan.complete;
  }

  const addFunc = (e) => {
    if (e.key == "Enter") {
      if (e.target.className == "subject") {
        props.setSubject((prev) => {
          let temp = [...prev];
          temp[props.class - 1] = focus.current[0].value;
          return temp;
        });
      } else {
        props.setSubjectPlan((prev) => {
          let temp = [...prev];
          temp[props.class - 1] = focus.current[1].value;
          return temp;
        });
      }
      if (props.focusCounter <= 21) {
        if (e.target.className == "subject") {
          props.allFocus[props.focusCounter].children[0].children[1].focus();
        } else {
          props.allFocus[
            props.focusCounter + 1
          ].children[0].children[0].focus();
          props.setFocusCounter((prev) => prev + 1);
        }
      }
    }
  };

  props.checkRef.current.map((x, y) =>
    schedulerArr[y] == "true" ? (x.checked = true) : ""
  );

  return (
    <StyleSubjectData ref={(ref) => (props.allFocus[props.class] = ref)}>
      <div>
        <input
          type="text"
          className="subject"
          maxLength={2}
          ref={(el) => (focus.current[0] = el)}
          onKeyPress={(e) => {
            addFunc(e);
          }}
          onClick={(e) => {
            props.setFocusCounter(props.class);
          }}
          defaultValue={props.subjectRef != undefined ? props.subjectRef : ""}
        />
        <input
          type="text"
          maxLength={25}
          ref={(el) => (focus.current[1] = el)}
          onKeyPress={(e) => {
            addFunc(e);
          }}
          onClick={(e) => {
            props.setFocusCounter(props.class);
          }}
          defaultValue={props.planRef != undefined ? props.planRef : ""}
        />
      </div>
      <input
        ref={(ref) => (props.checkRef.current[props.class] = ref)}
        type="checkbox"
        className={"class" + props.class}
        onClick={(e) => {
          props.setComplete((prev) => {
            let temp = [...prev];
            temp[props.class] = `${temp[props.class] == "true" ? false : true}`;
            return temp;
          });
        }}
        disabled={props.subject.length >= props.class ? false : true}
      />
    </StyleSubjectData>
  );
}

export default SubjectData;
