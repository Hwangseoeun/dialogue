import MainHeader from "../../css/Calender/StyleCalenderHeader";

function CalenderHeader(props) {
  const month = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ];
  return (
    <>
      <MainHeader>
        <span className="year">{props.monthEnd.getFullYear()}</span>
        <div>
          <input
            type="button"
            value="＜"
            onClick={() => {
              props.setNextMonth((prev) => prev - 1);
              props.setPreveMonth((prev) => prev - 1);
            }}
          />
          <span className="month">{props.monthEnd.getMonth() + 1}</span>
          <input
            type="button"
            value="＞"
            onClick={() => {
              props.setNextMonth((prev) => prev + 1);
              props.setPreveMonth((prev) => prev + 1);
            }}
          />
        </div>
        <span className="monthEng">{month[props.monthEnd.getMonth()]}</span>
      </MainHeader>
    </>
  );
}

export default CalenderHeader;
