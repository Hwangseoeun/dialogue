import { useEffect, useState } from "react";
import DiaryPop from "./DiaryPop";
import Swal from "sweetalert";

function DiaryMain(props) {
  let currentDate = "";
  if (localStorage.getItem("currentDate")) {
    currentDate = JSON.parse(localStorage.getItem("currentDate"))[2];
  }
  const nowDate = new Date();
  const diaryLength = props.diary.length;
  const [read, setRead] = useState(false);
  const [goTo, setGoTo] = useState(false);
  const savedDiary = () => {
    for (let i = 0; i < diaryLength; i++) {
      if (
        String(Object.keys(props.currentDiary)) ==
        String(Object.keys(props.diary[i]))
      ) {
        props.setDiary((prev) => {
          setRead(true);
          let temp = [...prev];
          if (props.feelingEmoji != "img/feeling/empty.png") {
            temp[i][Object.keys(props.diary[i])].feeling = props.feelingEmoji;
          }
          if (props.title != "") {
            temp[i][Object.keys(props.diary[i])].diaryTitle = props.title;
          }
          if (props.text != "") {
            temp[i][Object.keys(props.diary[i])].diaryText = props.text;
          }
          if (props.weatherEmoji != "img/weather/sun.png") {
            temp[i][Object.keys(props.diary[i])].weather = props.weatherEmoji;
          }
          return temp;
        });
        break;
      } else {
        if (i == diaryLength - 1) {
          props.setDiary((prev) => {
            let temp = JSON.parse(localStorage.getItem("diary"));
            temp.push(props.currentDiary);
            return temp;
          });
        }
      }
    }
  };

  useEffect(() => {
    props.setCurrentDiary((prev) => {
      let temp = { ...prev };
      temp = {
        ["day" + `${currentDate ? currentDate : nowDate.getDate()}`]: {
          feeling: props.feelingEmoji,
          weather: props.weatherEmoji,
          date: 2023119,
          diaryTitle: props.title,
          diaryText: props.text,
        },
      };
      return temp;
    });
  }, [props.feelingEmoji, props.weatherEmoji, props.title, props.text]);

  const togo = (e) => {
    setGoTo(true);
  };

  return (
    <>
      <div className="diary">
        <p>
          제목:
          <input
            type="text"
            maxLength={60}
            onChange={(e) => {
              props.setTitle(e.target.value);
            }}
            defaultValue={props.diary
              .map((x) =>
                String(Object.keys(x)) ==
                "day" + `${currentDate ? currentDate : nowDate.getDate()}`
                  ? x[Object.keys(x)].diaryTitle
                  : ""
              )
              .join("")}
          />
        </p>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          maxLength={1500}
          onChange={(e) => {
            props.setText(e.target.value);
          }}
          defaultValue={props.diary
            .map((x) =>
              String(Object.keys(x)) ==
              "day" + `${currentDate ? currentDate : nowDate.getDate()}`
                ? x[Object.keys(x)].diaryText
                : ""
            )
            .join("")}
        ></textarea>
        {goTo ? <DiaryPop /> : ""}
        <div className="btnBox">
          <button
            type="submit"
            className="save"
            onClick={(e) => {
              savedDiary();
              togo(e);
            }}
          >
            저장
          </button>
        </div>
      </div>
    </>
  );
}

export default DiaryMain;
