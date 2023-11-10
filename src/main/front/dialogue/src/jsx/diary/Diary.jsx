import Header from "../Header";
import StyleDiary from "../../css/diary/StyleDiary";
import DiaryHeader from "./DiaryHeader";
import DiaryMain from "./DiaryMain";
import { useEffect, useState } from "react";

function Diary(props) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [feelingEmoji, setFeelingEmoji] = useState("img/feeling/empty.png");
  const [weatherEmoji, setWeatherEmoji] = useState("img/weather/sun.png");
  const [currentDiary, setCurrentDiary] = useState(props.obj[0]);

  useEffect(() => {
    localStorage.setItem("diary", JSON.stringify(props.diary));
  }, [props.diary]);
  return (
    <>
      <Header />
      <StyleDiary>
        <DiaryHeader
          feelingEmoji={feelingEmoji}
          setFeelingEmoji={setFeelingEmoji}
          weatherEmoji={weatherEmoji}
          setWeatherEmoji={setWeatherEmoji}
          diary={props.diary}
          setDiary={props.setDiary}
          currentDiary={currentDiary}
        />
        <DiaryMain
          title={title}
          setTitle={setTitle}
          text={text}
          setText={setText}
          setDiary={props.setDiary}
          diary={props.diary}
          feelingEmoji={feelingEmoji}
          weatherEmoji={weatherEmoji}
          currentDiary={currentDiary}
          setCurrentDiary={setCurrentDiary}
          now={props.now}
        />
      </StyleDiary>
    </>
  );
}

export default Diary;
