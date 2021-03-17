import { AlertType } from "../../utils/types";
import { v4 as uuidv4 } from "uuid";

const ADD_ALERT = "alert/ADD_ALERT";
const REMOVE_ALERT = "alert/REMOVE_ALERT";

export type IAlertState = {
  alerts: AlertObject[];
};

export type AlertObject = {
  message: string;
  displayFor?: number;
  id?: string;
  type?: AlertType;
};

const INITIAL_STATE = {
  alerts: [],
};

export const addAlert = (data: AlertObject) => ({
  type: ADD_ALERT,
  payload: data,
});

export const removeAlert = (id: any) => ({
  type: REMOVE_ALERT,
  payload: id,
});

function reducer(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case ADD_ALERT:
      const alerts = [...state.alerts];
      if (!action.payload.id) {
        action.payload.id = uuidv4();
      }
      if (!action.payload.displayFor) {
        action.payload.displayFor = 5000;
      }
      if (!action.payload.type) {
        action.payload.displayFor = AlertType.INFO;
      }
      return {
        ...state,
        alerts: [...alerts, action.payload],
      };
    case REMOVE_ALERT:
      return {
        ...state,
        alerts: state.alerts.filter((alert: any) => {
          console.log(action.payload);
          return alert.id !== action.payload;
        }),
      };
    default:
      return state;
  }
}

export default reducer;