const SHOW_MODAL = "modal/SHOW_MODAL";

export type IModalState = {
  showModal: boolean;
};

const INITIAL_STATE: IModalState = {
  showModal: false,
};

export function setModal() {
  return {
    type: SHOW_MODAL,
  };
}

function reducer(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case SHOW_MODAL:
      return { ...state, showModal: !state.showModal };
    default:
      return state;
  }
}

export default reducer;
