import { useState } from "react";
import Calender from "./jsx/calender/Calender";
import Diary from "./jsx/diary/Diary";
import Scheduler from "./jsx/scheduler/Scheduler";
import "./css/header.css";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
function App() {
  const nowDate = new Date();
  const [now, setNow] = useState(
    String(nowDate.getFullYear()) +
      String(nowDate.getMonth() + 1) +
      String(nowDate.getDate())
  );

  let currentDate = "";
  if (localStorage.getItem("currentDate")) {
    currentDate = JSON.parse(localStorage.getItem("currentDate"));
  }
  // const nowDate = new Date();
  const obj = [
    {
      ["day" + `${currentDate ? currentDate[2] : nowDate.getDate()}`]: {
        feeling: "",
        weather: "",
        date:
          String(nowDate.getFullYear()) +
          String(nowDate.getMonth() + 1) +
          +String(nowDate.getDate()),
        diaryTitle: "",
        diaryText: "",
      },
    },
  ];

  const [diary, setDiary] = useState(
    () => obj || JSON.parse(localStorage.getItem("diary"))
  );
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Calender now={now} setNow={setNow} />} />
        <Route
          path="/Diary"
          element={
            <Diary now={now} diary={diary} setDiary={setDiary} obj={obj} />
          }
        />
        <Route path="/Scheduler" element={<Scheduler />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
