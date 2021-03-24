const SHOW_MODAL = "modal/SHOW_MODAL";

const INITIAL_STATE = {
  showModal: false,
};

export function setModal() {
  return {
    type: SHOW_MODAL,
  };
};

function reducer(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case SHOW_MODAL:
      return { ...state, showModal: !state.showModal };
    default:
      return state;
  }
};

export default reducer;
