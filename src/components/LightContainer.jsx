import React from "react";
import { useSelector, useDispatch } from "react-redux";

const LightContainer = () => {
  const light = useSelector((state) => state.light);
  const dispatch = useDispatch();
  return (
    <div>
      <p>{light}</p>
      <button onClick={() => dispatch({ type: "SWITCH" })}>Switch</button>
    </div>
  );
};

export default LightContainer;
