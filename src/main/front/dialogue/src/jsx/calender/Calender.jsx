import { useState } from "react";
import Header from "../Header";
import Main from "../../css/Calender/StyleCalender";
import CalenderHeader from "./CalenderHeader";
import CalenderMain from "./CalenderMain";

function Calender(props) {
  const nowDate = new Date();
  const [nextMonth, setNextMonth] = useState(0);
  const [prevMonth, setPreveMonth] = useState(1);
  const [currentDate, setCurrentDate] = useState(nowDate);
  const nowYears = currentDate.getFullYear();
  const nowMonth = currentDate.getMonth();
  const monthStart = new Date(nowYears, nowMonth + nextMonth, 1).getDay();
  const monthEnd = new Date(nowYears, nowMonth + prevMonth, 0);
  const endDay = monthEnd.getDate();
  const endDate = new Date(
    nowYears,
    nowMonth + prevMonth,
    42 - endDay - monthStart
  ).getDate();

  const rows = [[], [], [], [], [], []];
  let counter = 0;
  let counter2 = 0;
  const date = ["SUN", "MON", "THU", "WED", "THU", "FRI", "SET"];
  const days = [];

  for (let i = -monthStart + 1; i <= endDate + endDay; i++) {
    if (counter2 == 7) {
      counter++;
      counter2 = 0;
    }
    counter2++;
    rows[counter].push(new Date(nowYears, nowMonth + nextMonth, i));
  }

  for (let i = 0; i < 7; i++) {
    days.push(<th key={i}>{date[i]}</th>);
  }

  function getClassName(x) {
    if (
      x.getDate() == currentDate.getDate() &&
      nextMonth == 0 &&
      x.getMonth() == currentDate.getMonth()
    ) {
      return "today";
    } else if (x.getDay() == 0) {
      return "sun";
    } else if (x.getDay() == 6) {
      return "set";
    } else {
      return "";
    }
  }
  return (
    <>
      <Header />
      <Main>
        <CalenderHeader
          setNextMonth={setNextMonth}
          setPreveMonth={setPreveMonth}
          monthEnd={monthEnd}
        />
        <CalenderMain
          days={days}
          rows={rows}
          getClassName={getClassName}
          currentDate={currentDate}
          nextMonth={nextMonth}
        />
      </Main>
    </>
  );
}

export default Calender;
