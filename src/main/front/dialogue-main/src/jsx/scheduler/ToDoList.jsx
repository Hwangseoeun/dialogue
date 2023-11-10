import { useEffect, useState } from "react";
import StyleToDoForm from "../../css/scheduler/StyleToDoForm";
function ToDoList(props) {
  const [className, setClassname] = useState(false);

  let toDoComplete = [];
  if (localStorage.getItem("scheduler")) {
    toDoComplete = JSON.parse(localStorage.getItem("scheduler"))[0][
      "day" + new Date().getDate()
    ].toDo.toDoComplete;
  }

  useEffect(() => {
    if (props.complete.length > 0) {
      props.complete.current.map((x, y) => {
        if (toDoComplete[y] == "true") {
          x.parentNode.children[1].className = "complete";
          return (x.checked = true);
        }
      });
    }
  }, [props.toDo]);

  return (
    <StyleToDoForm>
      <input
        ref={(ref) => (props.complete.current[props.num] = ref)}
        type="checkbox"
        className="check"
        onClick={() => {
          setClassname((prev) => !prev);
          props.setToDoComplete((prev) => {
            let temp = [...prev];
            temp[props.num] = `${temp[props.num] == "true" ? false : true}`;
            return temp;
          });
        }}
      />
      <p className={`${className ? "complete" : ""}`}>{props.toDo}</p>
      <span
        className="delete"
        onClick={(e) => {
          let remove = props.toDoArr.filter((x) => x.key != props.num);
          props.setToDo(remove);
        }}
      >
        x
      </span>
    </StyleToDoForm>
  );
}
export default ToDoList;
