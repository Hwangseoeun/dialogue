function Feeling(props) {
  return (
    <>
      <img
        src={`img/feeling/${props.feel}.png`}
        alt=""
        onClick={(e) => {
          props.changeFeeling(e);
          props.setFeelingRemove((prev) => !prev);
        }}
      />
    </>
  );
}

export default Feeling;
