const initialState = "on";

const lightReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SWITCH":
      return state === "on" ? "off" : "on";
    default:
      return state;
  }
};

export default lightReducer;
