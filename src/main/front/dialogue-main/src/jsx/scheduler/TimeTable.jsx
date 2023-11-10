function TimeTable(props) {
  return (
    <div
      className={"timeData unClick"}
      ref={(ref) => (props.data[props.x] = ref)}
      onMouseDown={(e) => {
        props.setCount((prev) => prev + 1);
        props.setStudyStart((prev) => {
          let temp = [...prev];
          temp.push(props.x);
          return temp;
        });
      }}
      onMouseUp={(e) => {
        props.setStudyEnd((prev) => {
          let temp = prev;
          temp.push(props.x);
          return temp;
        });
        props.timeFunc();
      }}
    ></div>
  );
}

export default TimeTable;
