const initialState = {
  isVisible: false,
};

const modalReducer = (state = initialState, action) => {
  if (action.type === "MODAL_STATE") {
    return {
      ...state,
      isVisible: !state.isVisible,
    };
  }
  return state;
};

export default modalReducer;
