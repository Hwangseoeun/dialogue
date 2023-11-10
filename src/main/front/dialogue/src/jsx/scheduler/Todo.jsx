import { useEffect, useRef, useState } from "react";
import ToDoList from "../scheduler/ToDoList";
import StyleToDo from "../../css/scheduler/StyleToDo";
function ToDo(props) {
  let complete = useRef([]);
  let classRef = useRef([]);

  const [counter, setCounter] = useState(() => {
    if (
      localStorage.getItem("scheduler") &&
      JSON.parse(localStorage.getItem("scheduler"))[0][
        "day" + new Date().getDate()
      ].toDo.toDoText.length > 0
    ) {
      return (
        props.scheduler[0]["day" + new Date().getDate()].toDo.toDoText[
          props.scheduler[0]["day" + new Date().getDate()].toDo.toDoText
            .length - 1
        ].key + 1
      );
    } else {
      return 0;
    }
  });
  const [toDoArr, setToDoArr] = useState([]);
  const [toDoKey, setToDoKey] = useState([]);

  useEffect(() => {
    props.setScheduler((prev) => {
      let temp = [...prev];
      if (props.toDo.length > 0) {
        temp[0]["day" + new Date().getDate()].toDo.toDoText = props.toDo;
        temp[0]["day" + new Date().getDate()].toDo.toDoComplete =
          props.toDoComplete;
      }
      return temp;
    });
  }, [props.toDo, props.toDoComplete]);

  const enterEvent = (e) => {
    setCounter((prev) => prev + 1);
    const toDos = {
      toDo: e.target.value,
      key: counter,
    };
    if (e.key == "Enter") {
      e.preventDefault();
      props.setToDo([...props.toDo, toDos]);
      e.target.value = "";
      setCounter((prev) => prev++);
    }
  };

  return (
    <>
      <StyleToDo>
        <form action="" className="toDoForm">
          <div className="todoBox">
            {props.toDo.map((x, y) => (
              <ToDoList
                y={y}
                toDo={x.toDo}
                key={x.key}
                setToDo={props.setToDo}
                toDoArr={props.toDo}
                num={x.key}
                complete={complete}
                setToDoComplete={props.setToDoComplete}
                toDoComplete={props.toDoComplete}
                setToDoArr={setToDoArr}
                classRef={classRef}
                // completeFunc={completeFunc}
              />
            ))}
          </div>
          <input
            type="text"
            placeholder="write your todo"
            className="toDoInput"
            maxLength={16}
            onKeyPress={enterEvent}
          />
        </form>
      </StyleToDo>
    </>
  );
}

export default ToDo;
