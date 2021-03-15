import { AlertType } from "../../utils/types";

const ALERT = "alert/ALERT";

export type IAlertState = {
  alerts: AlertObject[];
};

type AlertObject = {
  message: string;
  displayFor?: number;
  id?: number;
  type?: AlertType;
};

const INITIAL_STATE = {
  alerts: [
    {
      type: AlertType.INFO,
      message: "",
      displayFor: null,
      id: null,
    },
    {
      type: AlertType.ERROR,
      message: "",
      displayFor: null,
      id: null,
    },
    {
      type: AlertType.SUCCESS,
      message: "",
      displayFor: null,
      id: null,
    },
    {
      type: AlertType.WARNING,
      message: "",
      displayFor: null,
      id: null,
    },
  ],
};

export const showAlert = (data: IAlertState) => ({
  type: ALERT,
  payload: data,
});

function reducer(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case ALERT:
      return {
        ...state,
        alerts: state.alerts.map((alert: any) => {
          if (alert.type === action.payload.type) {
            return action.payload;
          }
          return alert;
        }),
      };
    default:
      return state;
  }
}

export default reducer;
