import { useState } from "react";
import StyleDiaryHeader from "../../css/diary/StyleDiaryHeader";
// import happy from "../../img/feeling/happy.png";
import Feeling from "./Feeling";
import Weather from "./Weather";

function DiaryHeader(props) {
  const diaryLength = props.diary.length;

  let currentDate = "";
  if (localStorage.getItem("currentDate")) {
    currentDate = JSON.parse(localStorage.getItem("currentDate"));
  }
  const diaryArr = JSON.parse(localStorage.getItem("diary"));
  const [feelingRemove, setFeelingRemove] = useState(true);
  const [weatherRemove, setWeatherRemove] = useState(true);
  const [feeling, setFeeling] = useState("img/feeling/empty.png");
  const [weather, setWeather] = useState("img/weather/sun.png");

  const changeFeeling = (e) => {
    setFeeling(e.target.src);
    props.setFeelingEmoji(e.target.src);

    for (let i = 0; i < diaryLength; i++) {
      if (
        String(Object.keys(props.currentDiary)) ==
        String(Object.keys(props.diary[i]))
      ) {
        props.setDiary((prev) => {
          let temp = [...prev];
          temp[i][Object.keys(props.diary[i])].feeling = e.target.src;
          return temp;
        });
        break;
      }
    }
  };

  const changeWeather = (e) => {
    setWeather(e.target.src);
    props.setWeatherEmoji(e.target.src);
    for (let i = 0; i < diaryLength; i++) {
      if (
        String(Object.keys(props.currentDiary)) ==
        String(Object.keys(props.diary[i]))
      ) {
        props.setDiary((prev) => {
          let temp = [...prev];
          temp[i][Object.keys(props.diary[i])].weather = e.target.src;
          return temp;
        });
        break;
      }
    }
  };

  const feelingArr = ["happy", "angry", "sad", "soso", "sick", "tired"];
  const weatherArr = ["sun", "cloud", "rain", "snow"];
  const nowDate = new Date();
  let count = 0;
  let count2 = 0;
  let count3 = 0;
  let count4 = 0;
  return (
    <StyleDiaryHeader className="inpo">
      <div className="feelingBox">
        <div className="curruntFeeling">
          <p className="todayFeeling">오늘의 기분 :</p>
          <img
            src={
              diaryArr
                ? diaryArr
                    .map((x) => {
                      if (x[Object.keys(x)].feeling != "") {
                        if (
                          currentDate[2] ==
                          String(Object.keys(x)).replace("day", "")
                        ) {
                          return x[Object.keys(x)].feeling;
                        } else {
                          count2++;
                          if (count2 == diaryArr.length) {
                            return feeling;
                          }
                        }
                      } else {
                        return feeling;
                      }
                    })
                    .join("")
                : feeling
            }
            alt=""
            onClick={() => {
              setFeelingRemove((prev) => !prev);
            }}
          />
        </div>
        <div className={`${feelingRemove ? "remove" : "feeling"}`}>
          {feelingArr.map((x, y) => (
            <Feeling
              feel={x}
              key={y}
              changeFeeling={changeFeeling}
              setFeelingRemove={setFeelingRemove}
              setDiary={props.setDiary}
            />
          ))}
        </div>
      </div>
      <p>
        날짜:{" "}
        <span>{currentDate ? currentDate[0] : nowDate.getFullYear()}</span>.
        <span>{currentDate ? currentDate[1] + 1 : nowDate.getMonth() + 1}</span>
        .<span>{currentDate ? currentDate[2] : nowDate.getDate()}</span>
      </p>
      <div className="weatherBox">
        <div className="curruntWeather">
          <p>날씨 : </p>
          <img
            src={
              diaryArr
                ? diaryArr
                    .map((x) => {
                      if (x[Object.keys(x)].weather != "") {
                        if (
                          currentDate[2] ==
                          String(Object.keys(x)).replace("day", "")
                        ) {
                          return x[Object.keys(x)].weather;
                        } else {
                          count3++;
                          if (count3 == diaryArr.length) {
                            return weather;
                          }
                        }
                      } else {
                        return weather;
                      }
                    })
                    .join("")
                : ""
            }
            alt=""
            onClick={() => {
              setWeatherRemove((prev) => !prev);
            }}
          />
        </div>
        <div className={`${weatherRemove ? "remove" : "weather"}`}>
          {weatherArr.map((x, y) => (
            <Weather
              weather={x}
              key={y}
              changeWeather={changeWeather}
              setWeatherRemove={setWeatherRemove}
              setDiary={props.setDiary}
            />
          ))}
        </div>
      </div>
    </StyleDiaryHeader>
  );
}

export default DiaryHeader;
